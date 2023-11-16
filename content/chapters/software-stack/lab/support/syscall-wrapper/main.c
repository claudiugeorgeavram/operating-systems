/* SPDX-License-Identifier: BSD-3-Clause */

#include "./syscall.h"

int main(void)
{
	char buf[256];
	int bytes_read = read(0, buf, sizeof(buf));
	write(1, buf, bytes_read);
	write(1, "Hello, world!\n", 14);
	exit(0);
	return 0;
}
