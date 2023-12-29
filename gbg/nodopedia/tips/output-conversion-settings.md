---
title: Output Conversion Settings
layout: nodopedia/entry
category: tips
---

# Handling of Raw Input Values
Most input Nodon have Output and Range settings.<br>
These settings determine how the raw input value should be converted and then sent as output. (In practice, the value is determined by how the input Nodon gives its output.)<br>
The two settings should be considered a set.

# Output
Specifies either Digital or Analog.<br>
If it's set to Digital, an output value of 1.00 will be sent if the input is within the values specified in Range. If it's outside the range, it'll send 0.00.<br>
If it's set to Analog, values lower than the range's lower limit will be sent as 0.00, and values within it will be converted precisely to a value between 0.00 and 1.00. If it's higher than the range's upper limit, it'll be sent as 1.00.

# Range Slider
## Upper/Lower Handle
The two handles can be moved left or right.<br>
The raw input value (for example, the amount that a control stick is tilted) is converted according to the graph shown above the slider and then sent as output.<br>

<img src="/data/nodopedia/img/figures/handles.svg">

The horizontal axis represents the input, and the vertical axis represents the output.

## Value Preview
The arrow underneath the slider shows a preview of the value.<br>
It moves left or right, depending on the raw input value.<br>
The value that will be sent from the Nodon is shown in the square part of the mark.

<div class="table-wrapper"><table><tbody><tr><th>Output</th><td>0.00</td><td>0.50</td><td>1.00</td></tr><tr><th>Display</th><td><img src="/data/nodopedia/img/figures/indicator_empty.svg"></td><td><img src="/data/nodopedia/img/figures/indicator_half.svg" height="48"></td><td><img src="/data/nodopedia/img/figures/indicator_full.svg" height="48"></td></tr></tbody></table></div>

# Common Settings
## Input Threshold and Analog Output
This refers to analog ranges with a small deadzone—for example, 0.10 to 1.00.

<img src="/data/nodopedia/img/figures/threshold_analog.svg">

Input values lower than 0.10 will be output as 0.00, so very small input will be disregarded. We can call 0.10 the "input threshold."<br>
If the input exceeds 0.10, it'll start to output, and the output will increase along with the input. If 1.00 is received as input, it'll send 1.00 as output.<br>
When called up, most input Nodon will have their ranges set like this by default. (Some Nodon may have different input thresholds for the lower margin.)<br>
A Nodon like the Shake Nodon can pick up slight movement even when the player is trying to hold the Joy-Con still, so having an input threshold can ensure that output is sent only when the Joy-Con is intentionally shaken.

## Sensitive Analog Output
Settings similar to an analog range of 0.00 to 0.50.

<img src="/data/nodopedia/img/figures/sensitive_analog.svg">

Responds sensitively to input. Any input above a certain value will result in an output of 1.00.<br>
In the example above, an input of 0.50 will result in an output of 1.00, which represents a sensitivity double that of a range like 0.00 to 1.00.<br>
You can adjust the sensitivity by moving the slider on the right.

## Sending Raw Values as Analog Output
Settings similar to an analog range of 0.00 to 1.00.

<img src="/data/nodopedia/img/figures/raw_analog.svg">

With a range of 0.00 to 1.00, the value received as input will be sent unchanged as output.

## If-Style Digital Handling
Settings similar to a digital range of 0.10 to 1.00.

<img src="/data/nodopedia/img/figures/ifstyle_digital.svg">

Use this when you want to make a clear, digital judgment of a momentary occurrence—for example, the swinging of a Joy-Con.<br>
Very small input won't produce any response (it'll continue to output 0.00), but if it goes over the threshold, it'll output 1.00. It won't output intermediate values like 0.50.<br>
You can adjust the handle for the lower margin to change the input threshold.

## While-Style Digital Handling
Settings similar to a digital range of 0.50 to 0.60.

<img src="/data/nodopedia/img/figures/whilestyle_digital.svg">

Outputs 1.00 under specific input conditions. Outside of those conditions, outputs 0.00.<br>
For example, you might use this type of setting if you wanted to use the If-Face-Up Nodon to check whether the Joy-Con is held at a certain angle.