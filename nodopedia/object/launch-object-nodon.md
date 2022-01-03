---
layout: entry
title:  "Launch-Object Nodon"
category: object
order: 26
quote: Ready for the BLAM?! The POW?!<br />Objects awaaaaaaaay!
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
      <td label="Port name"><span>Launch</span></td>
      <td label="Port function"><span>When a value other than 0.00 is received at this port, objects will be launched.<br />Objects won't launch faster than the launch interval. If input is received again before the launch interval has passed, it will be ignored.<br /><br />If nothing is connected to this port, a constant input value of 1.00 will be assumed.</span></td>
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
        <p>Connect this port to the lower connection port of another Nodon to physically link objects.<br>
        <br>This connection port can only connect to the Texture Nodon's lower connection port.</p>
      </td>
    </tr>
    <tr>
      <td label="Port name"><span>Lower connection port</span></td>
      <td label="Port function">
        <p>This is a special type of port that physically links objects generated by Nodon on the game screen. Connect it to the upper connection port of another Nodon to link them.<br />When connected to an object, it will launch objects from the connected object.<br>
        <br>Person Nodon, Car Nodon, UFO Nodon, Object Nodon, Fancy-Object Nodon, Text-Object Nodon, Number-Object Nodon, Moving-Object Nodon, and Rotating-Object Nodon can connect to this connection port only with the upper connection port.</p>
      </td>
    </tr>
  </tbody>
</table>
<h1>Settings</h1>
<h2>Object Shape</h2>
<p>Sets the shape of the object to be launched.<br />You can choose from Cuboid, Cylinder, or Sphere.</p>
<h2>Properties</h2>
<p>Sets the properties of the object to be launched.</p>
<p>The following properties can be enabled or disabled: Visible, Solid, Movable, Destructive, Destructible, Play Sound When Hit/Destroyed?, or Can Be Grabbed by Hand Nodon?</p>
<p>See also: <a href="/nodopedia/tips/properties">About Properties</a></p>
<h2>Color</h2>
<p>Sets the color of the object to be launched.</p>
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
<h2>Material</h2>
<p>Sets the material of the object to be launched.</p>
<table class="wrapped">
  <thead>
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
    <tr>
      <td label="Setting value"><span>Floaty</span></td>
      <td label="Description"><span>A lighter-than-air, balloon-like material that floats upward.</span></td>
    </tr>
    <tr>
      <td label="Setting value"><span>Zero gravity</span></td>
      <td label="Description"><span>A strange material that neither falls nor floats upward!</span></td>
    </tr>
  </thead>
</table>
<h2 id="Anchor_830288757_h2_8">
  <span style="letter-spacing: -0.008em;">Connection Point</span>
</h2>
<p>Sets how the connection point of the launch origin will be determined.</p>
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
<p>The indicated face on the launch origin will connect to the target object's connection point.<br />You can choose from X+, Y+, Z+, X-, Y-, Z-, or Center.<br />Only effective when Connection Point is set to Manual.</p>
<h2>Target Connection Point</h2>
<p>The face indicated on the target object will join to the face indicated in the Own Connection Point option.<br />You can choose from Center, X-, X+, Y-, Y+, Z-, or Z+.<br />Only effective when Connection Point is set to Manual.</p>
<h2>Launch Direction</h2>
<p>Sets the direction that the objects will launch in.<br />You can choose from X+, Y+, Z+, X-, Y-, or Z-.</p>
<h2>Launch Speed</h2>
<p>Sets the initial velocity of the launched object.<br />You can choose between 0.00 and 100.00. Measured in meters per second.</p>
<h2>Launch Interval (seconds)</h2>
<p>Sets the minimum amount of time in between individual object launches.<br />Measured in seconds. Can be set to between 0.10 and 100.00.</p>
<h2>Size</h2>
<p>Sets the size of the object to be launched.<br />When the object's shape is set to Box, you'll be able to set the X, Y, and Z<br />dimensions separately.<br />When the object's shape is set to Cylinder, the ratio between X and Z will be fixed, but their ratios to Y can be adjusted.<br />When the object's shape is set to Sphere, the ratio between X, Y, and Z will be fixed.<br /><br />X, Y, and Z can be set to between 0.10 and 10.00. Measured in meters.</p>
<h2>Position</h2>
<p>Sets the position of the launch origin when the game is initialized or reset.<br />X, Y, and Z can each be set to between -100.00 and 100.00.<br />Measured in meters.</p>
<h2>Rotation</h2>
<p>Sets the direction of the launch origin when the game is initialized or reset.<br />The X, Y, and Z axes can each be set to between -180.00° and 180.00°.</p>
<h1>Other</h1>
<p>When the Launch-Object Nodon is embedded into an object-generating Nodon, the object and the launched objects won't be able to collide until after they've separated completely for the first time.</p>
<h2>Three Types of Launch-Object Nodon</h2>
<p>Launch-Object Nodon can be divided into three different types depending on the limit on the number of objects they can have launched at once.<br />The launch limits are as follows:<br />・Launch-Object Nodon (1 object) can launch 1 object per Nodon.<br />・Launch-Object Nodon (10 objects) can launch 10 objects per Nodon.<br />・Launch-Object Nodon (100 objects) can launch 100 objects per Nodon.<br />When an object is launched that exceeds the limit, the oldest launched object will be deleted.</p>
<h2>Call Limit</h2>
<p>You can call up to a certain number of Launch-Object Nodon per game. The upper limit varies depending on how many objects they can launch:<br />・64 Launch-Object Nodon (1 object)<br />・16 Launch-Object Nodon (10 objects)<br />・2 Launch-Object Nodon (100 objects)</p>
<h3>Special Costs</h3>
<p>All object-generating Nodon impose a "cost," and the cost limit per game is 512.<br />Note that this cost is separate from the overall 512 Nodon limit.<br />Object-related Nodon other than the Launch-Object Nodon have a cost of 1.<br />Launch-Object Nodon costs are calculated differently, as shown below.<br /><br />・Launch-Object Nodon (1 object) impose a cost of 3 per Nodon.<br />・Launch-Object Nodon (10 objects) impose a cost of 12 per Nodon.<br />・Launch-Object Nodon (100 objects) impose a cost of 102 per Nodon.<br /></p>