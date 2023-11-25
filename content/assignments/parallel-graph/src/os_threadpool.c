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
	pthread_mutex_lock(&tp->lock);

	os_task_queue_t *new_node = calloc(1, sizeof(*new_node));
	new_node->task = t;
	tp->tasks->next = new_node;

	pthread_mutex_unlock(&tp->lock);
}

/* Get the head of task queue from threadpool */
os_task_t *get_task(os_threadpool_t *tp)
{
	/* TODO: Implement getting head of task queue. */
	os_task_t *t;
	os_task_queue_t *old_node;

	pthread_mutex_lock(&tp->lock);

	t = tp->tasks->task;
	old_node = tp->tasks;
	tp->tasks = tp->tasks->next;
	free(old_node);

	pthread_mutex_unlock(&tp->lock);

	return t;
}

/* Initialize the new threadpool */
os_threadpool_t *threadpool_create(unsigned int num_tasks, unsigned int num_threads)
{
	/* TODO: Implement thread pool creation. */
	os_threadpool_t *pool;
	pool = calloc(1, sizeof(*pool));

	pthread_mutex_init(&pool->lock, NULL);
	pool->should_stop = 0;
	pool->num_threads = num_threads;
	return pool;
}

/* Loop function for threads */
void *thread_loop_function(void *args)
{
	/* TODO: Implement thread loop function. */
	return NULL;
}

void threadpool_stop(os_threadpool_t *tp, int (*processing_is_complete)(os_threadpool_t *))
{
	/* TODO: Implement thread pool stop. */
}
