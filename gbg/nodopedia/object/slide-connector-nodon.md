---
title: Slide-Connector Nodon
layout: nodopedia/entry
category: object
quote: I get in the middle of objects and let them slide!<br>You can count on me!
---

# Port
## Input
<div class="table-wrapper"><table><thead><tr><th>Port name</th><th>Port function</th><th>Input operation</th></tr></thead><tbody><tr><td>Slide amount</td><td>Sets how far away the object is placed relative to its original position, taking the input value from this port as the distance. Measured in meters.<br>Movement force will be applied to any objects connected to it, above or below.<br><br>If nothing is connected to this port, the object's position won't be fixed.</td><td>Restricted to between -100.00 and 100.00</td></tr></tbody></table></div>

## Output
None

## Connection
<div class="table-wrapper"><table><thead><tr><th>Port name</th><th>Port function</th></tr></thead><tbody><tr><td>Upper connection port</td><td>Connect this port to the lower connection port of another Nodon to physically link objects.<br>You can have both the upper and lower connected objects move along the same axis.<br>Object Nodon, Fancy-Object Nodon, Text-Object Nodon, Number-Object Nodon, Moving-Object Nodon, and Rotating-Object Nodon can connect to this connection port only with their lower connection ports.</td></tr><tr><td>Lower connection port</td><td>This is a special type of port that physically links objects generated by Nodon on the game screen. Connect it to the upper connection port of another Nodon to link them.<br>You can have both the upper and lower connected objects move along the same axis.<br>Person Nodon, Car Nodon, UFO Nodon, Object Nodon, Fancy-Object Nodon, Text-Object Nodon, Number-Object Nodon, Moving-Object Nodon, and Rotating-Object Nodon can connect to this connection port only with the upper connection port.</td></tr></tbody></table></div>

# Settings
## Slide Axis
Sets the axis along which objects can move.<br>
You can choose from X, Y, or Z.

## Range
Sets the range that the object can move through. Measured in meters.<br>
You can set the range between -100.00 and 100.00.

## Position
Determines the position of the object at the time of game start or after a reset.<br>
X, Y, and Z can each be set to between -100.00 and 100.00.<br>
Measured in meters.