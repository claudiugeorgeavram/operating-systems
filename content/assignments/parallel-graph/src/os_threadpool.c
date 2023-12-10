// SPDX-License-Identifier: BSD-3-Clause

#include "os_threadpool.h"
#include <stdlib.h>
#include <stdio.h>
#include <unistd.h>

/* Create a task that thread must execute */
os_task_t *task_create(void *arg, void (*f)(void *))
{
	/* TODO: Implement task creation. */
	os_task_t *task;

	task = calloc(1, sizeof(*task));

	task->argument = arg;
	task->task = f;

	return task;
}

/* Add a new task to threadpool task queue */
void add_task_in_queue(os_threadpool_t *tp, os_task_t *t)
{
	/* TODO: Implement adding new task in queue. */
	os_task_queue_t *new_node = malloc(sizeof(os_task_queue_t));
    if (!new_node) {
        // Handle memory allocation failure
        return;
    }
    new_node->task = t;
    new_node->next = NULL;\

	pthread_mutex_lock(&(tp->lock));

	if(tp->tasks == NULL) {		
		tp->tasks = new_node;
	} else {
		os_task_queue_t *node_iter = tp->tasks;
        while (node_iter->next != NULL) {
            node_iter = node_iter->next;
        }
		node_iter->next = new_node;
		
	}
	pthread_cond_signal(&(tp->pending_tasks_exist));
	pthread_mutex_unlock(&(tp->lock));

}

/* Get the head of task queue from threadpool */
os_task_t *get_task(os_threadpool_t *tp)
{
	/* TODO: Implement getting head of task queue. */
	os_task_t *t = NULL;

	pthread_mutex_lock(&(tp->lock));

	if (tp->tasks == NULL) {
		tp->num_waiting_threads++;
		pthread_cond_wait(&(tp->pending_tasks_exist), &(tp->lock));		
		if(tp->should_stop) {
			pthread_mutex_unlock(&(tp->lock));
			return NULL;
		}
		tp->num_waiting_threads--;
	}
	if (tp->tasks != NULL) {
	t = tp->tasks->task;
	tp->tasks = tp->tasks->next;
	}

	pthread_mutex_unlock(&(tp->lock));

	return t;
}

/* Initialize the new threadpool */
os_threadpool_t *threadpool_create(unsigned int num_tasks, unsigned int num_threads)
{
	/* TODO: Implement thread pool creation. */
	os_threadpool_t *tp;
	tp = calloc(1, sizeof(*tp));
	if (!tp) {
        // Handle memory allocation failure
        return NULL;
    }

	pthread_mutex_init (&(tp->lock), NULL);
	pthread_cond_init(&(tp->pending_tasks_exist), NULL);
	
	/* Initialize tasks */
	tp->tasks = NULL;
	
	/* Initialize threads */
	tp->num_threads = num_threads;
	tp->num_waiting_threads = 0;
	tp->threads = calloc(num_threads, sizeof(pthread_t));
	if (!tp->threads) {
        // Handle memory allocation failure
        free(tp);
        return NULL;
    }

	for (int i = 0; i < tp->num_threads; i++) {
		pthread_create(&(tp->threads[i]), NULL, thread_loop_function, (void *)tp);
	}

	tp->should_stop = 0;
	return tp;
}

/* Loop function for threads */
void *thread_loop_function(void *args)
{
	/* TODO: Implement thread loop function. */
	os_threadpool_t *tp = (os_threadpool_t *)args;
	os_task_t *t;

	while (!tp->should_stop) {		
		t = get_task(tp);
		if (t != NULL) {
			t->task(t->argument);
		}
	}
	return NULL;
}

void threadpool_stop(os_threadpool_t *tp, int (*processing_is_complete)(os_threadpool_t *))
{
	/* TODO: Implement thread pool stop. */
	while(!processing_is_complete(tp)) {

	}
	
	while(tp->num_waiting_threads != tp->num_threads) {
		
	}

	pthread_mutex_lock(&(tp->lock));
	tp->should_stop = 1;
	pthread_cond_broadcast(&(tp->pending_tasks_exist));
	pthread_mutex_unlock(&(tp->lock));

	for (int i = 0; i < tp->num_threads; ++i) {
		pthread_join(tp->threads[i], NULL);
	}

	// Clean up lock and condition variable
    pthread_mutex_destroy(&(tp->lock));
    pthread_cond_destroy(&(tp->pending_tasks_exist));
	// Free allocated memory for threads
    free(tp->threads);
    // Free any other allocated resources related to the threadpool
    free(tp);

	return;
}
