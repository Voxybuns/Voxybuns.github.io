---
title: Teleport-Object-Exit Nodon
layout: nodopedia/entry
category: object
quote: By my power, objects cast into subspace are retrieved without incident.
---

# Port
## Input
None

## Output
None

## Connection
<div class="table-wrapper"><table><thead><tr><th>Port name</th><th>Port function</th></tr></thead><tbody><tr><td>Lower connection port</td><td>This is a special type of port that physically links objects generated by Nodon on the game screen. Connect it to the upper connection port of another Nodon to link them.<br>When connected to this port, the object will be physically linked to the target object.<br>Person Nodon, Car Nodon, UFO Nodon, Object Nodon, Fancy-Object Nodon, Text-Object Nodon, Number-Object Nodon, Moving-Object Nodon, Rotating-Object Nodon, Head Nodon, and Hand Nodon can physically connect to this Nodon only with the upper connection port.</td></tr></tbody></table></div>

# Settings
## Teleport ID
Sets the Teleport ID to link it to Teleport-Object-Entrance Nodon.<br>
You can choose an ID between A and H.<br>
Teleport-Object-Exit Nodon can't have the same ID within the same game. If you call another, it will automatically be set to a different ID.

## Object Shape
Sets the shape.<br>
You can choose from Box, Cylinder, or Sphere.

## Properties
Sets the properties of objects.

Visible and Can Be Grabbed by Hand Nodon? can be enabled or disabled.<br>
Solid, Movable, Destructive, and Destructible are always disabled.<br>
Play Sound When Hit/Destroyed? is always set to Don't play.

See also: <a href="/tools/nodopedia/tips/about-properties">About Properties</a>

## Connection Point
Sets how the objects physically connect to each other. A connection point is defined based on an object's face.

<div class="table-wrapper"><table><thead><tr><th>Setting value</th><th>Description</th></tr></thead><tbody><tr><td>Auto</td><td>Chooses the closest connection points of the objects automatically based on factors such as location, orientation, and size of the objects.</td></tr><tr><td>Manual</td><td>The objects will be joined by the faces set in the Own Connection Point and Target Connection Point options.</td></tr></tbody></table></div>

## Own Connection Point
The face indicated on this object will join to the face indicated in the Target Connection Point option.<br>
You can choose from Center, X-, X+, Y-, Y+, Z-, or Z+.<br>
Only effective when Connection Point is set to Manual.

## Target Connection Point
The face indicated on the target object will join to the face indicated in the Own Connection Point option.<br>
You can choose from Center, X-, X+, Y-, Y+, Z-, or Z+.<br>
Only effective when Connection Point is set to Manual.

## Teleport Physics
Sets how an object's physics are handled when an object teleporting from an entrance with a corresponding Teleport ID comes out of a teleport exit.

<div class="table-wrapper"><table><thead><tr><th>Setting value</th><th>Description</th></tr></thead><tbody><tr><td>Preserve</td><td>The teleported object will exit in the same direction and with the same speed that it had when it touched the entrance.<br>If the Teleport-Object-Exit Nodon is slanted, the object's direction will be modified by the slant.</td></tr><tr><td>Reset</td><td>The speed and direction that the object had when it touched the entrance will be ignored, and the object will exit in the same direction as the exit, with the speed set in Launch Speed.</td></tr></tbody></table></div>

## Launch Speed
Sets the initial speed for objects on exit.<br>
Measured in meters per second, and can be set between 0.00 and 100.00.<br>
Only effective when Teleport Physics is set to Reset.

## Launch Direction
Sets the direction that the object exits in.<br>
You can choose from X+, Y+, Z+, X-, Y-, or Z-, referring to the local coordinate system of the exit itself.<br>
Only effective when Teleport Physics is set to Reset.

## Size
Sets the size of an object.<br>
When the object's shape is set to Box, you'll be able to set the X, Y, and Z dimensions separately.<br>
When the object's shape is set to Cylinder, the ratio between X and Z will be fixed, but their ratios to Y can be adjusted.<br>
When the object's shape is set to Sphere, the ratio between X, Y, and Z will be fixed.

X, Y, and Z can be set to between 0.10 and 10.00. Measured in meters.

## Position
Determines the position of the object at the time of game start or after a reset.<br>
X, Y, and Z can each be set to between -100.00 and 100.00.<br>
Measured in meters.<br>
However, if Movable is enabled and the world's shape is set to Plane, Dome, Cuboid, or Cylinder, the Y value will be adjusted so that objects lower than Y: 0 aren't embedded into the ground.

## Rotation
Sets the orientation of the object at game start or after a reset.<br>
The X, Y, and Z axes can each be set between -180.00° and 180.00°.