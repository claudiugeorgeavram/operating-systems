/* SPDX-License-Identifier: BSD-3-Clause */

#include <stdio.h>
#include <unistd.h>
#include <sys/types.h>
#include <fcntl.h>
#include <math.h>

typedef enum { false, true } bool;

int main(void)
{
	/*
	 * TODO: Use standard C library functions.
	 * Be as creative as you can.
	 */

	int i, n;
	bool isEven;

	scanf("%d", &n);
	for (i = 0; i < n; i++) {
		isEven = false;
		if (i % 2 == 0) {			
			isEven = true;
		}
		if (isEven == true) {
			printf("%d is an even number\n", i);
		}
		
	}

	return 0;
}
