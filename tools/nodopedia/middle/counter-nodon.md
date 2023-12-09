---
title: Counter Nodon
layout: nodopedia/entry
category: middle
quote: IF THERE ARE NUMBERS, I WILL COUNT THEM.<br>AND I WILL REMEMBER.
---

# Port
## Input
<div class="table-wrapper"><table><thead><tr><th>Port name</th><th>Port function</th><th>Input operation</th></tr></thead><tbody><tr><td>Count up</td><td>Input received here is used to increase or decrease the count.</td><td>Signal passes through unchanged</td></tr><tr><td>Count down</td><td>Input received here is used to increase or decrease the count.</td><td>Signal passes through unchanged</td></tr><tr><td>Reset</td><td>When input other than 0.00 is received at this port, the count will be reset.<br>When reset, the count will revert to the value specified by the Starting Value property.<br>If input other than 0.00 is received at the reset port at the same time as input from another port, the reset will be executed with priority.</td><td>Determines whether a signal is or is not equal to 0.00</td></tr></tbody></table></div>

## Output
<div class="table-wrapper"><table><thead><tr><th>Port name</th><th>Port function</th><th>Output value</th></tr></thead><tbody><tr><td>Count</td><td>Outputs the current count value.</td><td>Accepts any number</td></tr></tbody></table></div>

## Connection
None

# Settings
## Starting Value
Sets the value that the counter will have at game start or after a reset.
You can choose between -1,000 and 1,000.

## Mode
Sets the count mode.

<div class="table-wrapper"><table><thead><tr><th>Setting value</th><th>Description</th></tr></thead><tbody><tr><td>No limit</td><td>Removes any limiting range on the count.</td></tr><tr><td>Range</td><td>The count will count up or down, but only within the Count Range. If the count goes beyond the range, input will be altered to make it fit.<br><br>For example, if the Count Range is set to between zero and 10, input will be handled as below.<br>・If the count would have been -1.00, it'll be 0.00.<br>・If the count hits 5.00, it'll be 5.00.<br>・If the count would have been 13.00, it'll be 10.00.</td></tr><tr><td>Loop</td><td>The count will loop between the upper and lower limits of the Count Range. If the count goes beyond the range, it'll loop back round to the opposite.<br><br>For example, if the Count Range is set to between zero and 10, input will be handled as below.<br>・If the count would have been -1.00, it'll be 9.00.<br>・If the count hits 5.00, it'll be 5.00.<br>・If the count would have been 10.00, it'll be 0.00.<br>・If the count would have been 13.00, it'll be 3.00.</td></tr><tr><td>Bounce</td><td>The count will bounce between the upper and lower limits of the Count Range.<br><br>The direction of the count will vary depending on the current state of the Nodon.<br>You can think of counting up as the "out portion" of a round trip and counting down as the "return portion."<br>On the out portion, values received will be added to the total. On the return portion, they'll be subtracted.<br><br>If the count goes beyond the upper limit, the count will toggle from the out portion to the return portion, or vice versa if the count goes beyond the lower portion.<br><br>If the input is received at the reset port, the count will revert to the specified starting value and to the out portion of the count.</td></tr></tbody></table></div>

## Count Range
Sets the range of values that the Nodon will track.
If the mode is set to No Limit, this setting will have no effect.
You can choose between -1,000 and 1,000.

## Count Timing
Sets the timing for when counting takes place.

<div class="table-wrapper"><table><thead><tr><th>Setting value</th><th>Description</th></tr></thead><tbody><tr><td>On change from 0</td><td>When a value other than 0.00 is received at the count up or count down ports, one of the following values will be applied to the count only once, at the moment the value is received.<br><br>If a value equal or greater than -1.00 but less than 0.00 is received: -1.00<br>If a value higher than 0.00 but lower or equal to 1.00 is received: 1.00<br>If a value lower than -1.00 or higher than 1.00 is received, values after the decimal point will be rounded down.</td></tr><tr><td>While Not 0</td><td>The value of the received input will be either added to or subtracted from the total, depending whether it was received at the count up or count down port.</td></tr></tbody></table></div>