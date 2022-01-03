---
layout: entry
title:  "Tilt Nodon"
category: input
order: 7
quote: I'll let everybody know if the<br />Nintendo Switch console or<br />Joy-Con is being tilted!
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
      <td label="Port name"><span>
        <p>Y reset</p>
      </span></td>
      <td label="Port function"><span>
        <p>When a value other than 0.00 is received at this port, the y-axis angle will reset to a standard value.<br />The standard value will be remembered independently by each Nodon.</p>
      </span></td>
      <td label="Output value"><span>Determines whether a signal is or is not equal to 0.00</span></td>
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
      <td label="Port name" rowspan="2">
        <span><p>Tilt angle</p>
      </span></td>
      <td label="Port function" rowspan="2">
        <span><p>Information about the change in tilt from the console or Joy-Con will be collected as tilt data and then converted according to the Output and Range settings, or be output as an angle.</p>
      </span></td>
      <td label="Output value"><span>
        <p>Tilt mode: Between -1.00 and 1.00<br />(The default Output Range is between -0.50 and 0.50)</p><p>Angle of Rotation mode: Between -180.00 and 180.00<br />Measured in degrees (°).</p>
      </span></td>
    </tr>
  </tbody>
</table>
<h2>Connection</h2>
<p>None</p>
<h1>Settings</h1>
<h2>Check What?</h2>
<p>Determines which controller will be checked.</p>
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
      <td label="Description"><span>
        <p>Automatically switches the target to be checked, depending on which controller is connected.</p>
        <p>See also: <a href="/nodopedia/tips/automatic-controllers">Automatic Switching between Controllers</a></p>
      </span></td>
    </tr>
    <tr>
      <td label="Setting value"><span><br />Joy&#8209;Con&nbsp;(L)<br />Joy&#8209;Con&nbsp;(R)</span></td>
      <td label="Description"><span>Checks the specified target.</span></td>
    </tr>
  </tbody>
</table>
<h2>Controller Number</h2>
<p>Select which controller to check.</p>
<p>This setting is only available when Check What? is set to Joy-Con.</p>
<h2>Output and Range</h2>
<p>Sets how the raw input will be converted before being sent as output.</p>
<p>Only effective in Tilt mode.</p>
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
<h2>Axis of Rotation</h2>
<p>Sets the axis that the Nodon checks.</p>
<h2>Mode</h2>
<p>Sets how to interpret tilt data from the controller and how to output it.</p>
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
      <td label="Setting value"><span>Tilt</span></td>
      <td label="Description"><span>Converts the tilt data from the console or the Joy-Con and outputs it according to the Output and Range settings.<br />Tilting left or down creates a negative value, and tilting right or up creates a positive value.</span></td>
    </tr>
    <tr>
      <td label="Setting value"><span>Angle of rotation</span></td>
      <td label="Description"><span>Outputs the tilt data of the console or the Joy-Con as an angle.<br />The output is measured in degrees (°).<br />Note: For the z-axis, the number is the reverse of that in tilt mode.</span></td>
    </tr>
  </tbody>
</table>
