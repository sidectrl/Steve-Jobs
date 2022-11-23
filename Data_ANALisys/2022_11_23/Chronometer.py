"""
classe cronometro
prevede tre metodi
a) start
b) stop
c) readTime
"""
# import necessary functions
from time import time


class Chronometer:

    def __init__(self):
        self.t0 = 0
        self.t1 = 0
        self.on = False

# to string

    def __str__(self) -> str:
        return "Clock t0 = {}, t1 = {}, on = {}".format(self.t0, self.t1, self.on)

# start method

    def start(self):
        self.t0 = time()
        self.on = True

# stop method

    def stop(self):
        self.t1 = time()
        self.on = False

# readTime method

    def readTime(self):
        if self.on:
            temp = time()
            return temp-self.t0
        else:
            return self.t1 - self.t0
