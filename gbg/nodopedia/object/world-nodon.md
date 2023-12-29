---
title: World Nodon
layout: nodopedia/entry
category: object
quote: It is we who create the world<br>in which you work.
---

# Port
## Input
None

## Output
None

## Connection
<div class="table-wrapper"><table><thead><tr><th>Port name</th><th>Port function</th></tr></thead><tbody><tr><td>Upper connection port</td><td>Connect this port to the lower connection port of another Nodon to physically link objects.<br>Connecting a Texture Nodon to this connection port will apply that texture to the world's walls and floor.<br>This connection port can only connect to the Texture Nodon's lower connection port.</td></tr></tbody></table></div>

# Settings
## World Shape
Sets the world's basic form.<br>
Choose from None, Sphere, Plane, Dome, Cuboid, or Cylinder.

## World Appearance
Sets the world's appearance.<br>
You can choose from Normal, Grass, Tiles, Metal, or Sand.

## World Lighting
Sets the world's lighting and sky.<br>
You can choose from Noon, Evening, Night, Pitch black, and Outer space.<br>
Pitch black is completely black, as the name suggests. You can light up part of the world using the Effect Nodon's Light function, or you can make objects glow by enabling Neon under the World Nodon's Object Appearance property.

## World Material
Sets the type of material.

<div class="table-wrapper"><table><thead><tr><th>Setting value</th><th>Description</th></tr></thead><tbody><tr><td>Normal</td><td>The basic material for objects.</td></tr><tr><td>Bouncy</td><td>A rubberlike material. Bouncy and hard to slip on.</td></tr><tr><td>Slippery</td><td>An ice-like material with a slippery surface.</td></tr></tbody></table></div>

## Object Appearance
Affects the appearance of all objects in the world.

<div class="table-wrapper"><table><thead><tr><th>Setting value</th><th>Description</th></tr></thead><tbody><tr><td>Normal</td><td>Sets a standard appearance.</td></tr><tr><td>Metal</td><td>Gives objects a shiny, reflective, metallic appearance.</td></tr><tr><td>Neon</td><td>Objects will emit their own light.</td></tr></tbody></table></div>

## Properties
Sets the world's destructiveness.<br>
Can be set to Destructive or Non-Destructive. You specify which objects the world will break with "..." under Destructive.

See also: <a href="/gbg/nodopedia/tips/about-properties">About Properties</a>

## Size
Sets the size of an object.<br>
If World Shape is set to None, this has no effect.<br>
If Plane is set, only X and Z will be valid.<br>
If Cylinder is set, the ratio of X and Z is fixed and only Y can be adjusted.<br>
If Cuboid is set, X, Y, and Z can each be adjusted individually.<br>
If Sphere or Dome is set, the ratios between X, Y, and Z are fixed.<br>
X, Y, and Z can be set to between 1 and 200. Measured in meters.

## Object-Destruction Speed
Sets the minimum speed at which objects in the world will break.<br>
Objects that have both Destructive and Destructible enabled will break upon colliding with each other at that speed or faster.<br>
It can be set to a range between 0.00 and 100.00. Measured in meters per second.

## Other
Size doesn't represent the size of the world; it represents its outer limit.

When an object goes beyond -409.6m to 409.6m in any of the X, Y, or Z directions, it will be deleted.<br>
Unlike being broken, deletion will not trigger the Object-Break Nodon.

You can only call up one World Nodon per game.