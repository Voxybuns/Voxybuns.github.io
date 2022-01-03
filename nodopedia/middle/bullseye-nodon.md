---
layout: entry
title:  "Bull's-Eye Nodon"
category: middle
order: 18
quote: Dearest guest, thank you truly<br />for making use of our humble markers.
---
<h1>Port</h1>
<h2>Input</h2>
<p>None</p>
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
      <td label="Port name"><span>Marker amount</span></td>
      <td label="Port function">
        <p>When the bull's-eye overlaps with other Nodon's markers, the amount of overlap will be sent as output, according to the Output and Range settings. </p>
      </td>
      <td label="Output value"><span>Between 0.00 and 1.00</span></td>
    </tr>
  </tbody>
</table>
<h2>Connection</h2>
<p>None</p>
<h1>Settings</h1>
<h2>Output and Range</h2>
<p>Sets how the raw input will be converted before being sent as output.</p>
<p>See also: <a href="/nodopedia/tips/output-conversion-settings">Output Conversion Settings</a></p>
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
      <td label="Setting value"><span>Digital</span></td>
      <td label="Description"><span>Outputs either 1.00 if the value is within the specified range or 0.00 if it's outside the range. It's judged to be within range if it's equal or less than the upper value of the range and equal or more than the lower value.</span></td>
    </tr>
    <tr>
      <td label="Setting value"><span>Analog</span></td>
      <td label="Description"><span>Passes on any input that falls within the specified range, converted to a value between 0.00 and 1.00 (as opposed to either 0.00 or 1.00).</span></td>
    </tr>
  </tbody>
</table>
<h2>Bull's–Eye Shape</h2>
<p>Sets the shape of the bull's–eye.</p>
<table class="wrapped">
  <colgroup>
    <col />
    <col />
  </colgroup>
  <tbody>
    <tr>
      <th>Setting value</th>
      <th>Description</th>
    </tr>
    <tr>
      <td label="Setting value"><span>Circle</span></td>
      <td label="Description"><span>Checks for contact between the target displayed as a circle within the Bull's–Eye Nodon and other Nodon's markers.</span></td>
    </tr>
    <tr>
      <td label="Setting value"><span>Rectangle</span></td>
      <td label="Description"><span>Checks for contact between the shape of the Bull's–Eye Nodon itself and other Nodon's markers.</span></td>
    </tr>
  </tbody>
</table>