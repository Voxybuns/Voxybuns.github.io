---
layout: entry
title:  "Attract-Object Nodon"
category: object
order: 30
quote: Hey, you feel like attracting some objects?<br />We can work on it together! What do you say?
---
<h1>Port</h1>
<h2>Input</h2>
<table class="wrapped">
  <colgroup>
    <col />
    <col />
    <col />
  </colgroup>
  <tbody>
    <tr>
      <th>Port name</th>
      <th>Port function</th>
      <th>Input operation</th>
    </tr>
    <tr>
      <td label="Port name"><span>Force</span></td>
      <td label="Port function"><span>Adds force to objects that it touches, according to the input value received at this port.<br />Plus values will attract, and minus values will repulse.<br />If nothing is connected to this port, an input value of 1.00 will be assumed.</span></td>
      <td label="Input operation"><span>Restricted to between -1.00 and 1.00</span></td>
    </tr>
  </tbody>
</table>
<h2>Output</h2>
<p>None</p>
<h2>Connection</h2>
<table class="wrapped">
  <colgroup>
    <col />
    <col />
  </colgroup>
  <tbody>
    <tr>
      <th>Port name</th>
      <th>Port function</th>
    </tr>
    <tr>
      <td label="Port name"><span>Lower connection port</span></td>
      <td label="Port function">
        <p>This is a special type of port that physically links objects generated by Nodon on the game screen. Connect it to the upper connection port of another Nodon to link them.<br />When connected to this port, the object will be physically linked to the target object.<br>
        <br>Person Nodon, Car Nodon, UFO Nodon, Object Nodon, Fancy-Object Nodon, Text-Object Nodon, Number-Object Nodon, Moving-Object Nodon, Rotating-Object Nodon, and Hand Nodon can connect to this connection port only with their upper connection ports.<br />You can't connect to a connection group that includes a Head Nodon.</p>
      </td>
    </tr>
  </tbody>
</table>
<h1>Settings</h1>
<h2>Object Shape</h2>
<p>Sets the shape.<br />You can choose from Box, Cylinder, or Sphere.</p>
<h2>Properties</h2>
<p>Sets the properties of objects.</p>
<p>Visible and Can Be Grabbed by Hand Nodon? can be enabled or disabled.<br />Solid, Movable, Destructive, and Destructible are always disabled.<br />Play Sound When Hit/Destroyed? is always set to Don't play.</p>
<p>See also: <a href="/nodopedia/tips/properties">About Properties</a></p>
<h2>Connection Point</h2>
<p>Sets how the objects physically connect to each other. A connection point is defined based on an object's face.</p>
<table class="wrapped">
  <colgroup>
    <col />
    <col />
  </colgroup>
  <thead>
    <tr>
      <th>
        <p>Setting value</p>
      </th>
      <th>
        <p>Description</p>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td label="Setting value"><span>Auto</span></td>
      <td label="Description"><span>Chooses the closest connection points of the objects automatically based on factors such as location, orientation, and size of the objects.</span></td>
    </tr>
    <tr>
      <td label="Setting value"><span>Manual</span></td>
      <td label="Description"><span>The objects will be joined by the faces set in the Own Connection Point and Target Connection Point options.</span></td>
    </tr>
  </tbody>
</table>
<h2>Own Connection Point</h2>
<p>The face indicated on this object will join to the face indicated in the Target Connection Point option.<br />You can choose from Center, X-, X+, Y-, Y+, Z-, or Z+.<br />Only effective when Connection Point is set to Manual.</p>
<h2>Target Connection Point</h2>
<p>The face indicated on the target object will join to the face indicated in the Own Connection Point option.<br />You can choose from Center, X-, X+, Y-, Y+, Z-, or Z+.<br />Only effective when Connection Point is set to Manual.</p>
<h2>Center of Attraction</h2>
<p>Sets the source position of the attracting or repulsing force.<br />Can be set to X+, Y+, Z+, X-, Y-, Z-, or Center.</p>
<h2>Attract Which Objects?</h2>
<p>Sets the type of objects that will be checked.<br />You can enable multiple types.</p>
<p>If multiple object types are enabled, they'll all be affected by the force.</p>
<table class="wrapped">
  <colgroup>
    <col />
    <col />
  </colgroup>
  <thead>
    <tr>
      <th>
        <p>Setting value</p>
      </th>
      <th>
        <p>Description</p>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td label="Setting value"><span>Box<br />Cylinder<br />Sphere</span></td>
      <td label="Description"><span>Checks objects with the specified shapes, whether they're simple objects, text objects, number objects, moving objects, or rotating objects.</span></td>
    </tr>
    <tr>
      <td label="Setting value"><span>Person<br />Car<br />UFO</span></td>
      <td label="Description"><span>Checks the types of characters specified.</span></td>
    </tr>
    <tr>
      <td label="Setting value"><span>Crate<br />Shipping Container<br />Dice<br />Panel<br />Treasure Chest<br />Television<br />Joy-Con (R)<br />Joy-Con (L)<br />Soccer Ball<br />Golf Ball<br />Balloon<br />Apple<br />Turnip<br />Fish<br />Fluffball<br />Alien<br />Traveler<br />Cheerleader<br />Diver<br />Mermaid<br />Robot<br />Sorceress<br />Yeti<br />Sumo Wrestler<br />Hoop<br />Arrow<br />Rocket<br />Pencil<br />Tuna<br />Chick<br />Hippo<br />Bear</span></td>
      <td label="Description"><span>Checks fancy objects with the specified appearance.</span></td>
    </tr>
  </tbody>
</table>
<h2>Size</h2>
<p>Sets the size of an object.<br />When the object's shape is set to Box, you'll be able to set the X, Y, and Z<br />dimensions separately.<br />When the object's shape is set to Cylinder, the ratio between X and Z will be fixed, but their ratios to Y can be adjusted.<br />When the object's shape is set to Sphere, the ratio between X, Y, and Z will be fixed.<br /><br />X, Y, and Z can be set to between 0.10 and 10.00. Measured in meters.</p>
<h2>Position</h2>
<p>Determines the position of the object at the time of game start or after a reset.<br />X, Y, and Z can each be set to between -100.00 and 100.00.<br />Measured in meters.</p>
<h2>Rotation</h2>
<p>Sets the orientation of the object at game start or after a reset.<br />The X, Y, and Z axes can each be set between -180.00° and 180.00°.</p>