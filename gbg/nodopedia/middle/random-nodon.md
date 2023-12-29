---
title: Random Nodon
layout: nodopedia/entry
category: middle
quote: Woo-hoo! I bet you can't get enough of my zany random numbers!<br>You know there's actually a method to the madness!<br>Haven't a clue what it is though!
---

# Port
## Input
<div class="table-wrapper"><table><thead><tr><th>Port name</th><th>Port function</th><th>Input operation</th></tr></thead><tbody><tr><td>?</td><td>If this port receives any value other than 0.00, it will generate a new random number. Technically, it isn't a true random number but a pseudorandom number!</td><td>Determines whether a signal is or is not equal to 0.00</td></tr><tr><td>Reset</td><td>If this port receives any value other than 0.00, it will reset the generated random number to 0.00.</td><td>Determines whether a signal is or is not equal to 0.00</td></tr></tbody></table></div>

## Output
<div class="table-wrapper"><table><thead><tr><th>Port name</th><th>Port function</th><th>Output value</th></tr></thead><tbody><tr><td>Random number</td><td>Outputs the generated random number.</td><td>Between 0.00 and 1,000.00</td></tr></tbody></table></div>

## Connection
None

# Settings
## Update Timing
Sets when new random numbers should be generated.

<div class="table-wrapper"><table><thead><tr><th>Setting value</th><th>Description</th></tr></thead><tbody><tr><td>On change from 0</td><td>Generate one new number when a value other than 0.00 is received at the ? port.</td></tr><tr><td>While not 0</td><td>Whenever a number other than 0.00 is received at the ? port, the Nodon will continue to generate random numbers.</td></tr></tbody></table></div>

## Output Range
Sets the range of possible random numbers.
The maximum is 1,000. The minimum is one.