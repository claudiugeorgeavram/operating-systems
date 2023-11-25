// SPDX-License-Identifier: BSD-3-Clause

#include "os_threadpool.h"
#include <stdlib.h>
#include <stdio.h>
#include <unistd.h>

/* Create a task that thread must execute */
os_task_t *task_create(void *arg, void (*f)(void *))
{
	/* TODO: Implement task creation. */
	printf("task_create declare\n");
	os_task_t *task;
	printf("task_create after declare\n");

	printf("task_create calloc\n");
	task = calloc(1, sizeof(*task));
	printf("task_create after calloc\n");

	printf("task_create assign\n");
	task->argument = arg;
	task->task = f;
	printf("task_create after assign\n");

	return task;
}

/* Add a new task to threadpool task queue */
void add_task_in_queue(os_threadpool_t *tp, os_task_t *t)
{
	/* TODO: Implement adding new task in queue. */
	printf("before add task lock\n");
	pthread_mutex_lock(&(tp->lock));
	printf("after add task lock\n");

	printf("before create node\n");
	os_task_queue_t *new_node = calloc(1, sizeof(*new_node));
	new_node->task = t;
	tp->tasks->next = new_node;

	printf("after create node\n");

	pthread_mutex_unlock(&(tp->lock));
	printf("after add task unlock\n");
}

/* Get the head of task queue from threadpool */
os_task_t *get_task(os_threadpool_t *tp)
{
	/* TODO: Implement getting head of task queue. */
	os_task_t *t;
	os_task_queue_t *old_node;

	
	printf("get_task before lock\n");
	pthread_mutex_lock(&(tp->lock));
	printf("get_task after lock\n");

	printf("get_task before t assign\n");
	t = tp->tasks->task;
	printf("get_task after t assign\n");
	printf("get_task before oldnode assign\n");
	old_node = tp->tasks;
	printf("get_task after oldnode assign\n");
	printf("get_task before tp tasks free assign\n");
	tp->tasks = tp->tasks->next;
	printf("get_task after tp tasks free assign\n");
	printf("get_task before free mem\n");
	free(old_node);
	printf("get_task after free mem\n");

	pthread_mutex_unlock(&(tp->lock));
	printf("get_task after mutex lock\n");

	return t;
}

/* Initialize the new threadpool */
os_threadpool_t *threadpool_create(unsigned int num_tasks, unsigned int num_threads)
{
	printf("init\n");
	/* TODO: Implement thread pool creation. */
	os_threadpool_t *tp;
	tp = calloc(1, sizeof(*tp));
	
	/* Initialize tasks */
	tp->tasks = calloc(num_tasks, sizeof(tp->tasks));
	
	/* Initialize threads */
	tp->num_threads = num_threads;
	tp->threads = calloc(num_threads, sizeof(tp->threads));
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
	printf("thread_loop_start\n");
	os_threadpool_t *tp = (os_threadpool_t *)args;
	printf("thread_loop init args\n");
	os_task_t *t;

	while (!tp->should_stop) {
		printf("thread_loop in while\n");
		t = get_task(tp);
		if (t != NULL) {
			t->argument;
		}
	}
}

void threadpool_stop(os_threadpool_t *tp, int (*processing_is_complete)(os_threadpool_t *))
{
	/* TODO: Implement thread pool stop. */
	if (processing_is_complete(tp)) {
		tp->should_stop = 1;
		return;
	}
}
