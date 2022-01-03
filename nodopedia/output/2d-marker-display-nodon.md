---
layout: entry
title:  "2D-Marker-Display Nodon"
category: output
order: 10
quote: Great to be working with you!<br />I'll take care of moving the round markers...around!
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
      <td label="Port name"><span>X</span></td>
      <td label="Port function">
        <p>The marker displayed within the Nodon will move to the right, depending on the value received at this port.<br />With an input of 0.00, the circle will be in contact with the leftmost edge. With an input of 1.00, the circle will be in contact with the rightmost edge.</p>
      </td>
      <td label="Input operation"><span>Restricted to between 0.00 and 1.00</span></td>
    </tr>
    <tr>
      <td label="Port name"><span>Y</span></td>
      <td label="Port function">
        <p>The marker displayed within the Nodon will move upward, depending on the value received at this port.<br />With an input of 0.00, the circle will be in contact with the lowest edge. With an input of 1.00, the circle will be in contact with the uppermost edge.</p>
      </td>
      <td label="Input operation"><span>Restricted to between 0.00 and 1.00</span></td>
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
      <td label="Port name"><span>Result</span></td>
      <td label="Port function"><span>When this Nodon's round marker comes into contact with other Nodon's markers, the amount of overlap is sent as output, converted according to the Output and Range settings.</span></td>
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
<h2>Size</h2>
<p>Sets the size of the marker.<br />The size is proportional to the shortest side of the Nodon (height or length), which is counted as 1.00. The size can be set to between 0.00 and 1.00.</p>
<h2>Activates Bull's–Eye Nodon?</h2>
<p>Sets whether or not the Bull's–Eye Nodon responds to the displayed marker.</p>
<h1>Other</h1>
<p>Markers will only be displayed on the program screen.<br />You can use a Bull's-Eye Nodon to detect whether the marker displays or not.</p>