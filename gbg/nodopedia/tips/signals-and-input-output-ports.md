---
title: Signals and Input/Output Ports
layout: nodopedia/entry
category: tips
---

# Input Ports with No Connections
An input port with no connection assumes an input of 0.00.<br>
However, certain Nodon will assume other values at unconnected ports.

# Input Ports with Multiple Connections
If a single input port has multiple connections, the signals arriving at the port are added together and treated as a single signal.

# Output Ports with Multiple Connections
If a single output port has multiple connections, the same signal is sent through each connection.

# Signal Range
When a signal travels between output and input ports, it can travel through 16 connections per frame.<br>
If there are more than 16 connections between Nodon in a chain, then the signal will continue on in the next frame.