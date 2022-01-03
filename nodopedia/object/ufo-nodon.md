---
layout: entry
title:  "UFO Nodon"
category: object
order: 3
quote: I'm in charge of moving a zippy UFO<br />on the game screen! Whee!
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
      <td label="Port name"><span>Forward/Back</span></td>
      <td label="Port function">
        <p>Uses the input received at this port as the speed and moves the UFO forward and back.<br />Negative values will move the UFO backward, and positive values will move it forward.</p>
      </td>
      <td label="Input operation"><span>Restricted to between -2.00 and 2.00</span></td>
    </tr>
    <tr>
      <td label="Port name"><span>Left/Right</span></td>
      <td label="Port function">
        <p>Uses the input received at this port as the speed and moves the UFO left and right.<br />Negative values will move the UFO left, and positive values will move it right.</p>
      </td>
      <td label="Input operation"><span>Restricted to between -2.00 and 2.00</span></td>
    </tr>
    <tr>
      <td label="Port name"><span>Up/Down</span></td>
      <td label="Port function">
        <p>Uses the input received at this port as the speed and moves the UFO up and down.<br />Negative values will move the UFO down, and positive values will move it up.</p>
      </td>
      <td label="Input operation"><span>Restricted to between -2.00 and 2.00</span></td>
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
<h2>Frame of Reference<br />for Motion</h2>
<p>Sets which rules an object will base its movement on.</p>
<p>It's not possible to select Local for UFO Nodon.</p>
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
      <td label="Setting value"><span>World</span></td>
      <td label="Description"><span>Moves the object along the world's coordinate system, according to the input received.<br />The world's coordinate system is based on the world's directionality, regardless of the directionality of the camera or the object itself.</span></td>
    </tr>
    <tr>
      <td label="Setting value"><span>Camera</span></td>
      <td label="Description"><span>Moves the object along the camera's coordinate system, according to the input received.<br />The camera's coordinate system is based on the directionality of the camera's viewpoint.</span></td>
    </tr>
  </tbody>
</table>
<h2>Horizontal Speed</h2>
<p>Sets the scale factor of the horizontal (left/right and forward/back) movement speed.<br />Can be set between 0.00 and 2.00.</p>
<h2>Vertical Speed</h2>
<p>Sets the scale factor of the vertical movement speed.<br />Can be set between 0.00 and 2.00.</p>
<h2>Size</h2>
<p>Sets the size of an object.<br />The ratios between X, Y, and Z are fixed.<br />You can only set a size of between 0.10 and 10.00 that the X, Y, and Z dimensions will fit into.</p>
<h2>Position</h2>
<p>Determines the position of the object at the time of game start or after a reset.<br />X, Y, and Z can each be set to between -100.00 and 100.00.<br />Measured in meters.<br />However, if Movable is enabled and the world's shape is set to Plane, Dome, Cuboid, or Cylinder, the Y value will be adjusted so that objects lower than Y: 0 aren't embedded into the ground.</p>
<h2>Y-Axis Rotation</h2>
<p>Sets the orientation of the object at game start or after a reset, according to y-axis rotation.<br />Can be set between -180.00° and 180.00°.</p>
<h2>Turning Speed</h2>
<p>Applies a value to the turn rate on a fixed scale, when movement direction changes.<br />A value of 0.00 means movement without any turning.<br />The scale is fixed between 0.00 and 1.00.</p>
<h1>Other</h1>
<p>You can call up to eight UFO Nodon per game.</p>