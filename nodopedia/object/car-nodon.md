---
layout: entry
title:  "Car Nodon"
category: object
order: 2
quote: Vroom vroom!<br />I make cars drive around on the game screen!
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
      <td label="Port name"><span>Accelerate</span></td>
      <td label="Port function">
        <p>If the received input is a positive value, the car will accelerate forward. If it's a negative value, then the car will reverse.<br />If a negative value is received while accelerating, or a positive value while reversing, this represents hitting the brakes to stop the car.</p>
      </td>
      <td label="Input operation"><span>Restricted to between -2.00 and 2.00</span></td>
    </tr>
    <tr>
      <td label="Port name"><span>Steering Wheel</span></td>
      <td label="Port function">
        <p>The value received as input will represent the steering wheel being turned left or right and cause the car to turn.<br />Negative values will turn the wheel left, and positive values will turn it right.</p>
      </td>
      <td label="Input operation"><span>Restricted to between -1.00 and 1.00</span></td>
    </tr>
    <tr>
      <td label="Port name"><span>Jump</span></td>
      <td label="Port function"><span>When a value other than 0.00 is received, the car will jump.<br />The height of the jump will be determined by the length of time that the signal is<br />received for.</span></td>
      <td label="Input operation"><span>Determines whether a signal is or is not equal to 0.00</span></td>
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
      <td label="Port name"><span>Upper connection port</span></td>
      <td label="Port function">
        <p>Connect this port to the lower connection port of another Nodon to physically link objects.<br><br>Connects to all lower connection ports.</p>
      </td>
    </tr>
  </tbody>
</table>
<h1>Settings</h1>
<h2>Properties</h2>
<p>Sets the properties of objects.</p>
<p>The following properties can be enabled or disabled: Visible, Solid, Destructive, Destructible, Play Sound When Hit/Destroyed?, or Can Be Grabbed by Hand Nodon?<br />Movable is always enabled.</p>
<p>See also: <a href="/nodopedia/tips/properties">About Properties</a></p>
<h2>Color</h2>
<p>Sets the color.</p>
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
      <td label="Description">
        <p>The color will be applied automatically, depending on the properties.<br><br>See also: <a href="/nodopedia/tips/automatic-colors">When Color Is Set to Auto</a></p>
      </td>
    </tr>
    <tr>
      <td label="Setting value"><span>Blue<br />Red<br />Green<br />Yellow<br />Light blue<br />Pink<br />Lime green<br />Orange<br />Purple<br />Brown<br />White<br />Black</span></td>
      <td label="Description"><span>Changes the color as specified.</span></td>
    </tr>
  </tbody>
</table>
<h2>Movement Speed</h2>
<p>Sets the scale factor of the movement speed.<br />Can be set between 0.00 and 2.00.</p>
<h2>Jump Strength</h2>
<p>Sets the scale factor of the jump speed.<br />Can be set between 0.00 and 2.00.</p>
<h2>Size</h2>
<p>Sets the size of an object.<br />The ratios between X, Y, and Z are fixed.<br />You can only set a size of between 0.10 and 10.00 that the X, Y, and Z dimensions will fit into.</p>
<h2>Position</h2>
<p>Determines the position of the object at the time of game start or after a reset.<br />X, Y, and Z can each be set to between -100.00 and 100.00.<br />Measured in meters.<br />However, if Movable is enabled and the world's shape is set to Plane, Dome, Cuboid, or Cylinder, the Y value will be adjusted so that objects lower than Y: 0 aren't embedded into the ground.</p>
<h2>Y-Axis Rotation</h2>
<p>Sets the orientation of the object at game start or after a reset, according to y-axis rotation.<br />Can be set between -180.00° and 180.00°.</p>
<h1>Other</h1>
<p>You can call up to eight Car Nodon per game.</p>