---
layout: entry
title:  "World Nodon"
category: object
order: 31
quote: It is we who create the world<br />in which you work.
---
<h1>Port</h1>
<h2>Input</h2>
<p>None</p>
<h2>Output</h2>
<p>None</p>
<h2>Connection</h2>
<table class="wrapped">
  <colgroup>
    <col />
    <col />
  </colgroup>
  <thead>
    <tr>
      <th>
        <p>Port name</p>
      </th>
      <th>
        <p>Port function</p>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td label="Port name"><span>Upper connection port</span></td>
      <td label="Port function">
        <p>Connect this port to the lower connection port of another Nodon to physically link objects.<br />Connecting a Texture Nodon to this connection port will apply that texture to the world's walls and floor.<br>
        <br>This connection port can only connect to the Texture Nodon's lower connection port.</p>
      </td>
    </tr>
  </tbody>
</table>
<h1>Settings</h1>
<h2>World Shape</h2>
<p>Sets the world's basic form.<br />Choose from None, Sphere, Plane, Dome, Cuboid, or Cylinder.</p>
<h2>World Appearance</h2>
<p>Sets the world's appearance.<br />You can choose from Normal, Grass, Tiles, Metal, or Sand.</p>
<h2>World Lighting</h2>
<p>Sets the world's lighting and sky.<br />You can choose from Noon, Evening, Night, Pitch black, and Outer space.<br />Pitch black is completely black, as the name suggests. You can light up part of the world using the Effect Nodon's Light function, or you can make objects glow by enabling Neon under the World Nodon's Object Appearance property.</p>
<h2>World Material</h2>
<p>Sets the type of material.</p>
<table class="wrapped">
  <tbody>
    <tr>
      <th>
        <p>Setting value</p>
      </th>
      <th>
        <p>Description</p>
      </th>
    </tr>
    <tr>
      <td label="Setting value"><span>Normal</span></td>
      <td label="Description"><span>The basic material for objects.</span></td>
    </tr>
    <tr>
      <td label="Setting value"><span>Bouncy</span></td>
      <td label="Description"><span>A rubberlike material. Bouncy and hard to slip on.</span></td>
    </tr>
    <tr>
      <td label="Setting value"><span>Slippery</span></td>
      <td label="Description"><span>An ice-like material with a slippery surface.</span></td>
    </tr>
  </tbody>
</table>
<h2>Object Appearance</h2>
<p>Affects the appearance of all objects in the world.</p>
<table class="wrapped">
  <tbody>
    <tr>
      <th>
        <p>Setting value</p>
      </th>
      <th>
        <p>Description</p>
      </th>
    </tr>
    <tr>
      <td label="Setting value"><span>Normal</span></td>
      <td label="Description"><span>Sets a standard appearance.</span></td>
    </tr>
    <tr>
      <td label="Setting value"><span>Metal</span></td>
      <td label="Description"><span>Gives objects a shiny, reflective, metallic appearance.</span></td>
    </tr>
    <tr>
      <td label="Setting value"><span>Neon</span></td>
      <td label="Description"><span>Objects will emit their own light.</span></td>
    </tr>
  </tbody>
</table>
<h2>Properties</h2>
<p>Sets the world's destructiveness.<br />Can be set to Destructive or Non-Destructive. You specify which objects the world will break with "..." under Destructive.</p>
<p>See also: <a href="/nodopedia/tips/properties">About Properties</a></p>
<h2>Size</h2>
<p>Sets the size of an object.<br />If World Shape is set to None, this has no effect.<br />If Plane is set, only X and Z will be valid.<br />If Cylinder is set, the ratio of X and Z is fixed and only Y can be adjusted.<br />If Cuboid is set, X, Y, and Z can each be adjusted individually.<br />If Sphere or Dome is set, the ratios between X, Y, and Z are fixed.<br />X, Y, and Z can be set to between 1 and 200. Measured in meters.</p>
<h2>Object-Destruction Speed</h2>
<p>Sets the minimum speed at which objects in the world will break.<br />Objects that have both Destructive and Destructible enabled will break upon colliding with each other at that speed or faster.<br />It can be set to a range between 0.00 and 100.00. Measured in meters per second.</p>
<h1>Other</h1>
<p>Size doesn't represent the size of the world; it represents its outer limit.<br /><br />When an object goes beyond -409.6m to 409.6m in any of the X, Y, or Z directions, it will be deleted.<br />Unlike being broken, deletion will not trigger the Object-Break Nodon.</p>
<p>You can only call up one World Nodon per game.</p>