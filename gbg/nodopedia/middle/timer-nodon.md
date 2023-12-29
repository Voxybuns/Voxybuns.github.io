---
title: Timer Nodon
layout: nodopedia/entry
category: middle
quote: My only job is to wait until the scheduled time.<br>That is all.
---

# Port
## Input
<div class="table-wrapper"><table><thead><tr><th>Port name</th><th>Port function</th><th>Input operation</th></tr></thead><tbody><tr><td>Input</td><td>When the value received by this port changes from 0.00 to anything else, the timer starts to count down.<br>Any further input received after the timer has started or while the Nodon is sending an output will have no effect.</td><td>Determines whether a signal is or is not equal to 0.00</td></tr></tbody></table></div>

## Output
<div class="table-wrapper"><table><thead><tr><th>Port name</th><th>Port function</th><th>Output value</th></tr></thead><tbody><tr><td>Output</td><td>Outputs 1.00 when the set number of seconds passes from the start of the countdown.<br>It will continue to output 1.00 for the number of seconds determined by the Continue Output for How Long? setting.</td><td>0.00 or 1.00</td></tr></tbody></table></div>

## Connection
None

# Settings
## Output after How Many Seconds?
Sets the amount of seconds to wait after receiving input before outputting 1.00.<br>
If set to 0.00, then output will be sent immediately, without waiting even one frame.<br>
Since the time is based on frame processing, the time measurement in seconds might be slightly off.<br>
You can set it between 0.00 and 100.00.

## Continue Output for How Long?
Sets how many seconds to continue to output a value of 1.00 after the countdown
completes.<br>
Even when set to 0.00, it'll wait a minimum of one frame before
sending the output.<br>
You can set it between 0.00 and 100.00.

# Other
Actual waiting times may lengthen slightly depending on how long the whole program takes to complete all its processes.