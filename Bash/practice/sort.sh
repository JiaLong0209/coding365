#!/bin/bash

# Top 5 CPU Usage Processes
ps aux | sort -k 3 -r | head -5 

# Top 5 Memory Usage Processes
ps aux | sort -k 4 -r | head -5
