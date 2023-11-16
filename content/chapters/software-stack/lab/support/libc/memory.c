/* SPDX-License-Identifier: BSD-3-Clause */

#include <stdlib.h>

int main(void)
{
	void *p;

	/*
	 * TODO: Use malloc() to allocate memory of different sizes.
	 * Store result in p.
	 * Use free() to deallocate memory.
	 * Use ltrace and strace command line tools to monitor library
	 * and system calls.
	 */
	p = (int*)malloc(200 * sizeof(int));
	free(p);

	p = (int*)malloc(2000 * sizeof(int));
	free(p);

	p = (int*)malloc(20000 * sizeof(int));
	free(p);

	p = (int*)malloc(200000 * sizeof(int));
	free(p);

	return 0;
}
