/* SPDX-License-Identifier: BSD-3-Clause */

#include "./syscall.h"
#include "./string.h"

static const char src[] = "warhammer40k\n";
static char dest2[] = "Destination string is: ";
static char dest[128];

int main(void)
{
	strcpy(dest, src);
	strcat(dest2, src);

	write(1, "Destination string is: ", 23);
	write(1, dest, strlen(dest));
	write(1, dest2, strlen(dest2));

	exit(0);
	return 0;
}
