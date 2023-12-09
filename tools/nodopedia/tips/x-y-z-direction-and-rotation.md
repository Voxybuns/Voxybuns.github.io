---
title: X, Y, Z Direction and Rotation
layout: nodopedia/entry
category: tips
---

Game Builder Garage uses the x, y, and z axes to refer to direction, position, and rotation.<br>
All three axes meet each other at right angles.

<img src="/data/nodopedia/img/figures/axes.svg">

# Referring to Direction
If the x-axis is running left and right, then the y-axis will run up and down, and the z-axis back and forth.<br>
Right will be X+, left will be X-.<br>
Up will be Y+, down will be Y-.<br>
Forward will be Z+, backward will be Z-.

# Referring to Position
The point where all three axes intersect will be position 0 for each axis.<br>
Positions lower than 0 will be represented with a minus value.<br>
The unit of measurement is meters (m).<br>
For example, the position of a point that is 10 meters away from 0 in the X- direction would be referred to as -10m.

# Referring to Rotation
Looking from the 0 position in the X+ direction, counterclockwise rotation is referred to as X+ rotation.<br>
Looking from the 0 position in the Y+ direction, counterclockwise rotation is referred to as Y+ rotation.<br>
Looking from the 0 position in the Z+ direction, counterclockwise rotation is referred to as Z+ rotation.<br>
The unit of measurement is degrees.

# World Coordinates
The game's space and world within it will always face in the same direction.<br>
When the game is initialized, before any Nodon are called, X+ will be right, Y+ will be up, and Z+ will be forward on the game screen.<br>
This coordinate system, which is based on the positioning and direction of the world, is referred to as the "world coordinates" system.

# Local Coordinates
Objects rotate independently on their own axes. When rotated, the axes themselves will rotate along with the object.
If the object moves independently, its coordinate position will remain at zero.<br>
This coordinate system, which is based on the positioning and direction of an individual object, is referred to as the "local coordinate" system.<br>
When an Object Nodon is called, before any of its settings have been altered, its local coordinates will be the same as the world coordinates.<br>
Connection points and texture faces will be referred to with the object's local coordinates.<br>
For example, the face of a Person Nodon will always face toward the Z- direction of the local coordinates. This will never change, no matter what direction the Person moves or rotates in.

# Camera Coordinates
The camera, which captures the game space, can move independently of the world and the objects within it.<br>
Moving or rotating the camera will not change what can be viewed from it.<br>
This coordinate system, which is based on the positioning and direction of the camera, is referred to as the "camera coordinate" system.<br>
In relation to the console screen or monitor, right is X+, up is Y+, and forward is Z+.