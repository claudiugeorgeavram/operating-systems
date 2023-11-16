/* SPDX-License-Identifier: BSD-3-Clause */

#include "./syscall.h"
#include "./string.h"
#include "./printf.h"

static const char src[] = "warhammer40k";
static char dest[128];
static char out_buffer[256];

/* _putchar implementation has to be provided. */
void _putchar(char character)
{
	write(1, &character, 1);
}

/* Old implementation

int main(void)
{
	printf("[before] src is at %p, len is %lu, content: \"%s\"\n", src, strlen(src), src);
	printf("[before] dest is at %p, len is %lu, content: \"%s\"\n", dest, strlen(dest), dest);

	printf("copying src to dest\n");
	strcpy(dest, src);

	printf("[after] src is at %p, len is %lu, content: \"%s\"\n", src, strlen(src), src);
	printf("[after] dest is at %p, len is %lu, content: \"%s\"\n", dest, strlen(dest), dest);

	exit(0);
	return 0;
}
*/

int main(void)
{
	sprintf(out_buffer, "[before] src is at %p, len is %lu, content: \"%s\"\n", src, strlen(src), src);
	sprintf(out_buffer+strlen(out_buffer),"[before] dest is at %p, len is %lu, content: \"%s\"\n", dest, strlen(dest), dest);

	sprintf(out_buffer+strlen(out_buffer),"copying src to dest\n");
	strcpy(dest, src);

	sprintf(out_buffer+strlen(out_buffer),"[after] src is at %p, len is %lu, content: \"%s\"\n", src, strlen(src), src);
	sprintf(out_buffer+strlen(out_buffer),"[after] dest is at %p, len is %lu, content: \"%s\"\n", dest, strlen(dest), dest);

	write(1, out_buffer, strlen(out_buffer));

	exit(0);
	return 0;
}