---
layout: entry-quoteless
title:  "Signals and Input/Output Ports"
category: tips
order: 3
---
<h1>Input Ports with No Connections</h1>
<p>An input port with no connection assumes an input of 0.00.<br />However, certain Nodon will assume other values at unconnected ports.</p>
<h1>Input Ports with Multiple Connections</h1>
<p>If a single input port has multiple connections, the signals arriving at the port are added together and treated as a single signal.</p>
<h1>Output Ports with Multiple Connections</h1>
<p>If a single output port has multiple connections, the same signal is sent through each connection.</p>
<h1>Signal Range</h1>
<p>When a signal travels between output and input ports, it can travel through 16 connections per frame.<br />If there are more than 16 connections between Nodon in a chain, then the signal will continue on in the next frame.</p>