---
layout: entry
title:  "Head Nodon"
category: object
order: 38
quote: Use me to connect objects to the camera's position!<br />I'll make sure your head's screwed on tight!
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
  <tbody>
    <tr>
      <th>Port name</th>
      <th>Port function</th>
    </tr>
    <tr>
      <td label="Port name">
        <p>Upper connection port</p>
      </td>
      <td label="Port function">
        <p>Connect this port to the lower connection port of another Nodon to physically link objects.<br>
        <br>Objects linked to the Head Nodon are handled in the following ways:<br />Connecting objects will attach to an invisible box object at the position of the camera. The dimensions of the box are X: 0.50m, Y: 0.40m, Z: 8.00m.<br />Connected objects will follow the movement and rotation of this object.<br />They won't collide with objects that are connected to, or gripped by, the Hand Nodon.<br />Directly connected objects will ignore the Connection Type setting and always have the Normal Connection Type.<br />You can only connect one object per port.<br>
        <br>Object Nodon, Fancy-Object Nodon, Text-Object Nodon, Number-Object Nodon, Moving-Object Nodon, Rotating-Object Nodon, Play-Sound Nodon, Effect Nodon, All-Sensor Nodon, Extending-Object Nodon, Destroy-Object Nodon, and Teleport-Object-Entrance/Exit Nodon can connect to this connection port only with their lower connection ports.<br />It cannot connect to groups that include an Attract Nodon or a Camera-related Nodon.</p>
      </td>
    </tr>
  </tbody>
</table>
<h1>Settings</h1>
<p>None</p>
<h1>Other</h1>
<p>When a Head Nodon is called, it's possible to use a Touch-Sensor Nodon to check the line of sight. The line of sight can be thought of as an invisible line, extending from the camera's location along the direction in which the camera is pointed.</p>
<p>You can only call one Head Nodon per game.</p>