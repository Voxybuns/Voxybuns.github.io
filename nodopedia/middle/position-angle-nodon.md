---
layout: entry
title:  "Position &rarr; Angle Nodon"
category: middle
order: 8
quote: Turning positions into angles is my whole<br />reason for being.
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
      <td label="Port name"><span>Horizontal position</span></td>
      <td label="Port function"><span>The value received here is used as the horizontal position when calculating the output.</span></td>
      <td label="Input operation"><span>Signal passes through unchanged</span></td>
    </tr>
    <tr>
      <td label="Port name"><span>Vertical position</span></td>
      <td label="Port function"><span>The value received here is used as the vertical position when calculating the output.</span></td>
      <td label="Input operation"><span>Signal passes through unchanged</span></td>
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
      <td label="Port name"><span>Angle</span></td>
      <td label="Port function">
        <span>The two inputs together specify a location. This Nodon will find the angle of the direction along which that location lies, from the center (0,0), then send it as output. Measured in degrees (°).</span>
      </td>
      <td label="Output value"><span>Between -180.00 and 180.00</span></td>
    </tr>
  </tbody>
</table>
<h2>Connection</h2>
<p>None</p>
<h1>Settings</h1>
<p>None</p>