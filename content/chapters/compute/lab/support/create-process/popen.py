# SPDX-License-Identifier: BSD-3-Clause

import subprocess
from sys import exit


def main():
    # TODO 1: Change the command launched by `Popen()`. Try some commands with
    # arguments as well.
    subprocess.Popen("mkdir")


if __name__ == "__main__":
    exit(main())
