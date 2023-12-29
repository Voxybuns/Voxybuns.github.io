---
title: Flag Nodon
layout: nodopedia/entry
category: middle
quote: Hmmm...uh...<br>Just have to remember if the flag is on or off...
---

# Port
## Input
<div class="table-wrapper"><table><thead><tr><th>Port name</th><th>Port function</th><th>Input operation</th></tr></thead><tbody><tr><td>On</td><td>The flag switches on when this port receives a value other than 0.00.</td><td>Determines whether a signal is or is not equal to 0.00</td></tr><tr><td>Off</td><td>The flag switches off when this port receives a value other than 0.00.<br>If a value other than 0.00 is received at both the on and off ports, off is prioritized and the flag will switch off.</td><td>Determines whether a signal is or is not equal to 0.00</td></tr></tbody></table></div>

## Output
<div class="table-wrapper"><table><thead><tr><th>Port name</th><th>Port function</th><th>Output value</th></tr></thead><tbody><tr><td>Flag is on</td><td>When the flag is on, the output will be 1.00.<br>When it's off, it'll be 0.00.</td><td>0.00 or 1.00</td></tr></tbody></table></div>

## Connection
None

# Settings
None

# Other
When the game starts up or resets, the flag will always be in the off state.