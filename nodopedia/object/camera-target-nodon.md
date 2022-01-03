---
layout: entry
title:  "Camera-Target Nodon"
category: object
order: 35
quote: Oh! Hey! Over here! Yoo-hoo!<br />Look at me! Hey! Cameras, please!
---
<h1>If you call up this Nodon...</h1>
<p>This Nodon's position will become the camera's target.</p>
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
      <td label="Port name"><span>X</span></td>
      <td label="Port function"><span>The camera target moves along the x-axis according to the value received.<br />Measured in meters.<br /></span></td>
      <td label="Input operation"><span>Restricted to between -1,000.00 and 1,000.00</span></td>
    </tr>
    <tr>
      <td label="Port name"><span>Y</span></td>
      <td label="Port function"><span>The camera target moves along the y-axis according to the value received.<br />Measured in meters.<br /></span></td>
      <td label="Input operation"><span>Restricted to between -1,000.00 and 1,000.00</span></td>
    </tr>
    <tr>
      <td label="Port name"><span>Z</span></td>
      <td label="Port function"><span>The camera target moves along the z-axis according to the value received.<br />Measured in meters.<br /></span></td>
      <td label="Input operation"><span>Restricted to between -1,000.00 and 1,000.00</span></td>
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
        <p>This is a special type of port that physically links objects generated by Nodon on the game screen. Connect it to the upper connection port of another Nodon to link them.<br>
        <br>The Camera-Target Nodon will follow objects that it is connected to.<br>
        <br>Person Nodon, Car Nodon, UFO Nodon, Object Nodon, Fancy-Object Nodon, Text-Object Nodon, Number-Object Nodon, Moving-Object Nodon, and Rotating-Object Nodon can only connect to this connection port with their upper connection ports.<br />You can't connect to a connection group that includes a Head Nodon or a Hand Nodon.</p>
      </td>
    </tr>
  </tbody>
</table>
<h1>Settings</h1>
<h2>Horizontal Tracking Rate</h2>
<p>Sets how closely the horizontal movement of the connected object, or the position represented by input received, will be tracked. If it's set to 0.00, it won't follow at all. If it's set to 1.00, it'll move immediately to the target.<br />Can be set to between 0.00 and 1.00.</p>
<h2>Vertical Tracking Rate</h2>
<p>Sets how closely the vertical movement of the connected object, or the position represented by input received, will be tracked. If it's set to 0.00, it won't follow at all. If it's set to 1.00, it'll move immediately to the target.<br />Can be set to between 0.00 and 1.00.</p>
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
<h2>Position</h2>
<p>Determines the position of the object at the time of game start or after a reset.<br />X, Y, and Z can each be set to between -100.00 and 100.00.<br />Measured in meters.</p>
<h2>Offset Distance</h2>
<p>Sets the distance that the camera is offset by.<br />You can set it from between -100.00 to 100.00. Measured in meters.</p>
<h1>Other</h1>
<p>You can only call one Camera-Target Nodon per game.<br />Also, you can't call a Game-Screen Nodon or a Camera Nodon when a Camera-Target Nodon is present.</p>
<p>See also: <a href="/nodopedia/tips/advanced-cameras">Advanced Cameras</a></p>