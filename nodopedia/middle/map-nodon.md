---
layout: entry
title:  "Map Nodon"
category: middle
order: 2
quote: How crazy would it be if 1 was 2? Or if 10 was 100?<br />Or the other way around?! Ohh, the possibilities! ❤
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
      <td label="Port name"><span>Input</span></td>
      <td label="Port function"><span>The value received as input is used in the conversion calculation.</span></td>
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
      <td label="Port name"><span>Output</span></td>
      <td label="Port function"><span>Outputs the result of the conversion, according to the specified input range and output range.</span></td>
      <td label="Output value"><span>Accepts any number</span></td>
    </tr>
  </tbody>
</table>
<h2>Connection</h2>
<p>None</p>
<h1>Settings</h1>
<h2>Input Range</h2>
<p>Sets the scale of the input value, relative to the output value that it will be converted to.</p>
<h2>Output Range</h2>
<p>Sets the scale of the output value, relative to the input value that it will be converted from.</p>
<h2>&harr;</h2>
<p>Sets whether to invert the conversion between the input range and the output range.</p>
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
      <td label="Setting value"><span>Off</span></td>
      <td label="Description"><span>The lower limit of the input range will be scaled to the lower limit of the output range, and the upper limit of the input range will be scaled to the upper limit of the output range.</span></td>
    </tr>
    <tr>
      <td label="Setting value"><span>On</span></td>
      <td label="Description"><span>The lower limit of the input range will be scaled to the upper limit of the output range, and the upper limit of the input range will be scaled to the lower limit of the output range.</span></td>
    </tr>
  </tbody>
</table>
<h2>Range Restriction</h2>
<p>Sets whether the output value will be limited by the output range or not.</p>