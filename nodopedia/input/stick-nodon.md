---
layout: entry
title:  "Stick Nodon"
category: input
order: 3
quote: Wahoo! I'll let you know what<br />the control stick is up to!
---

<h1>Port</h1>
<h2>Input</h2>
<p>None</p>
<h2>Output</h2>
<table class="wrapped">
  <colgroup> <col /> <col /> <col /> </colgroup>

  <tbody>
    <tr>
      <th>Port name</th>
      <th>Port function</th>
      <th>Output value</th>
    </tr>
    <tr>
      <td label="Port name" rowspan="2"><span>Amount tilted</span></td>
      <td label="Port function" rowspan="2"><span>The amount of control stick tilt is converted according to the Output and Range settings, then sent as output.</span></td>
      <td label="Output value"><span><p>When Direction is Left/Right or Up/Down: Between -1.00 to 1.00</p><p>In other cases: Between 0.00 to 1.00</p></span></td>
    </tr>
  </tbody>
</table>
<h2>Connection</h2>
<p>None</p>
<h1>Settings</h1>
<h2>Controller Number</h2>
<p>Select which controller to check.</p>
<table class="wrapped">
  <colgroup> <col /> <col /> </colgroup>
  <tbody>
    <tr>
      <th>Setting value</th>
      <th>Description</th>
    </tr>
    <tr>
      <td label="Setting value"><span>1 to 4</span></td>
      <td label="Description"><span>Checks the controller with the selected number.</span></td>
    </tr>
    <tr>
      <td label="Setting value"><span></span></td>
      <td label="Description"><span>Checks the Joy-Con controllers attached to the console.</span></td>
    </tr>
    <tr>
      <td label="Setting value"><span>Auto</span></td>
      <td label="Description"><span>
        <p>Changes the controller to be automatically checked, depending on connection status.</p>
        <p>See also: <a href="/nodopedia/tips/automatic-controllers">Automatic Switching between Controllers</a></p>
      </span></td>
    </tr>
  </tbody>
</table>
<h2>Output and Range</h2>
<p>Sets how the raw input will be converted before being sent as output.</p>
<p>See also: <a href="/nodopedia/tips/output-conversion-settings">Output Conversion Settings</a></p>
<table class="wrapped">
  <colgroup> <col /> <col /> </colgroup>
  <tbody>
    <tr>
      <th>Setting value</th>
      <th>Description</th>
    </tr>
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
<h2>Direction</h2>
<p>Sets which direction of control stick tilt to check for.</p>
<table class="wrapped" style="letter-spacing: 0.0px;">
  <colgroup> <col /> <col /> </colgroup>
  <tbody>
    <tr>
      <th>Setting value</th>
      <th>Description</th>
    </tr>
    <tr>
      <td label="Setting value"><span>Any</span></td>
      <td label="Description"><span>Outputs a positive value when the control stick is tilted in any direction.</span></td>
    </tr>
    <tr>
      <td label="Setting value"><span>Up/Down</span></td>
      <td label="Description"><span>Outputs a positive value if the control stick is tilted up and a negative value if it is tilted down.</span></td>
    </tr>
    <tr>
      <td label="Setting value"><span>Left/Right</span></td>
      <td label="Description"><span>Outputs a negative value if the control stick is tilted left and a positive value if it is tilted right.</span></td>
    </tr>
  </tbody>
</table>
<h2>Which Stick?</h2>
<p>Sets the control stick to check.</p>