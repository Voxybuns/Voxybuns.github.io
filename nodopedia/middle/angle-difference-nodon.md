---
layout: entry
title:  "Angle-Difference Nodon"
category: middle
order: 10
quote: Ah, I know that look! You're wanting to calculate some angles, aren't ya?<br />Instead of subtracting one from the other, you might want to give Angle Difference a try!
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
      <td label="Port name"><span>Angle 1</span></td>
      <td label="Port function">
        <span>Takes the input value as the reference<br />angle, measured in degrees (°).</span>
      </td>
      <td label="Input operation"><span>Signal passes through unchanged</span></td>
    </tr>
    <tr>
      <td label="Port name"><span>Angle 2</span></td>
      <td label="Port function">
        <span>Takes the input value as the angle to be subtracted.<br />Measured in degrees (°).</span>
      </td>
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
      <td label="Port name"><span>Difference</span></td>
      <td label="Port function">
        <span>Outputs the difference between angle 1 and angle 2.<br />This isn't a simple subtraction, but a calculation of the difference only within a single lap of a circle.<br />For example, inputting 10.00 and 380.00 results in not -370.00, but -10.00.<br />Measured in degrees (°).</span>
      </td>
      <td label="Output value"><span>Between -180.00 and 180.00</span></td>
    </tr>
  </tbody>
</table>
<h2>Connection</h2>
<p>None</p>
<h1>Settings</h1>
<p>None</p>