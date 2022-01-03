---
layout: entry
title:  "Angle &rarr; Position Nodon"
category: middle
order: 9
quote: So, I output sines and cosines.<br />Just don't ask me what any of that means...
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
      <td label="Port name"><span>Angle</span></td>
      <td label="Port function"><span>The input received at this port will be used as an angle to calculate the location.<br />Measured in degrees (°).</span></td>
      <td label="Input operation"><span>Loops between -180.00 and 180.00</span></td>
    </tr>
  </tbody>
</table>
<h2>Output</h2>
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
      <th>Output value</th>
    </tr>
    <tr>
      <td label="Port name"><span>Horizontal position</span></td>
      <td label="Port function">
        <span>Using the value received at the angle port, this calculates the location of the angle on a circle with a radius of 1.00, then outputs the horizontal location.<br />This will be the cos (cosine) of the angle.</span>
      </td>
      <td label="Output value"><span>Between -1.00 and 1.00</span></td>
    </tr>
    <tr>
      <td label="Port name"><span>Vertical position</span></td>
      <td label="Port function">
        <span>Using the value received at the angle port, this calculates the location of the angle on a circle with a radius of 1.00, then outputs the vertical location.<br />This will be the sin (sine) of the angle.</span>
      </td>
      <td label="Output value"><span>Between -1.00 and 1.00</span></td>
    </tr>
  </tbody>
</table>
<h2>Connection</h2>
<p>None</p>
<h1>Settings</h1>
<p>None</p>