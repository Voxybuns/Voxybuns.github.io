---
layout: entry
title:  "Hand Nodon"
category: object
order: 39
quote: Want to grab something?<br />I'll be your helping hand!
---
<h1>If you call up this Nodon...</h1>
<p>This Nodon will place a hand line on the game screen. The line will move according to the tilt of a wirelessly connected Joy-Con controller.</p>
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
      <td label="Port name"><span>Grab</span></td>
      <td label="Port function"><span>If a value other than 0.00 is received at this port, the hand will grab whatever the hand line is currently pointing at.<br />However, objects in connection groups that include a Game-Screen Nodon, a Camera Nodon, or a Camera-Position Nodon cannot be grabbed.<br />If the hand grabs an object in a connection group that includes a Camera-Target Nodon, the camera's target will not change while the object is grabbed.</span></td>
      <td label="Input operation"><span>Determines whether a signal is or is not equal to 0.00</span></td>
    </tr>
    <tr>
      <td label="Port name"><span>Forward/Backward</span></td>
      <td label="Port function"><span>Moves the grabbed object back or forth, depending on the input.<br />Plus values will move the object forward, minus values back.<br />Measured in meters per second.</span></td>
      <td label="Input operation"><span>Restricted to between -1,000.00 and 1,000.00.</span></td>
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
        <br>Connected objects will be treated as gripped objects, gripped from the start.<br />It's not possible to drop a connected object.<br />You can only connect one object per port.<br>
        <br>Object Nodon, Fancy-Object Nodon, Text-Object Nodon, Number-Object Nodon, Moving-Object Nodon, Rotating-Object Nodon, Play-Sound Nodon, Effect Nodon, All-Sensor Nodon, Extending-Object Nodon, Destroy-Object Nodon, Teleport-Object-Entrance/Exit Nodon, and Attract-Object Nodon can connect to this connection port only with their lower connection ports.<br />It cannot connect to groups that include a Camera-related Nodon.</p>
      </td>
    </tr>
  </tbody>
</table>
<h1>Settings</h1>
<h2>Controller Number</h2>
<p>Select which controller to check.</p>
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
      <td label="Setting value"><span>1 to 4</span></td>
      <td label="Description"><span>Checks the controller with the selected number.</span></td>
    </tr>
    <tr>
      <td label="Setting value"><span>Auto</span></td>
      <td label="Description">
        <p>Changes the controller to be automatically checked, depending on connection status.<br>
        <br>See also: <a href="/nodopedia/tips/automatic-controllers">Automatic Switching between Controllers</a></p>
      </td>
    </tr>
  </tbody>
</table>
<h2>Which Controller?</h2>
<p>Sets which Joy-Con to check.</p>
<h2>Mode</h2>
<p>Sets the type of grip.</p>
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
      <td label="Setting value"><span>Hold</span></td>
      <td label="Description"><span>Grips the object as long as an input other than 0.00 is received.<br />When 0.00 is received, the object will be dropped.</span></td>
    </tr>
    <tr>
      <td label="Setting value"><span>Toggle</span></td>
      <td label="Description">
        <p>If an input with a value other than 0.00 is received when nothing is gripped, the hand will grip an object. It will continue to grip, even if a value of 0.00 is received.<br />If an input with a value other than 0.00 is received when something is gripped, the hand will release the object.</p>
      </td>
    </tr>
  </tbody>
</table>
<h2>Carrying Style</h2>
<p>Sets the orientation and position for gripped objects.</p>
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
      <td label="Setting value"><span>Precise</span></td>
      <td label="Description"><span>The object will keep its position and orientation even after being gripped.</span></td>
    </tr>
    <tr>
      <td label="Setting value"><span>Snappy</span></td>
      <td label="Description">
        <p>Resets the orientation and position, then grips.<br />The orientation will be determined by the object's connection point. The position will be determined by the Snap Distance setting.</p>
      </td>
    </tr>
  </tbody>
</table>
<h2>Snap Distance</h2>
<p>Sets the position of the grabbed object.<br />Can be set between 0.00 and 100.00. Measured in meters.<br />Only takes effect when Carrying Style is set to Snappy or an object is<br />physically connected.</p>
<h2>Center of Rotation</h2>
<p>Sets where changes in the tilt angle of the Joy-Con will be reflected on the<br />in-game hand.<br />You can choose from Wrist, Elbow, or Shoulder.<br />Selecting Wrist will result in smaller movements, while Shoulder makes<br />larger movements.</p>
<h2>Launch Speed</h2>
<p>Sets the amount of force that is applied to gripped objects on release. Objects will be sent flying on release due to this power.<br />You can set between 0.00 and 100.00. Measured in meters per second.</p>
<h1>Other</h1>
<p>The hand's line will be moved with the motion sensor of a wirelessly connected Joy-Con.<br />Point the Joy-Con at the screen and move it up, down, left, and right.</p>
<p>You can call up to eight Hand Nodon per game.</p>