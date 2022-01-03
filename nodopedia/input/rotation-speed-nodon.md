---
layout: entry
title:  "Rotation-Speed Nodon"
category: input
order: 9
quote: I know how fast you've been spinning your<br />console or your Joy-Con...and the axis and<br />the direction too! I know a lot about spinning!
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
      <td label="Port name"><span>Rotation speed</span></td>
      <td label="Port function"><span>
        <p>Outputs the speed that the Joy-Con or console is rotating at.<br />When the console's rotation is being checked, 2.50 rotations per second will result in an output of 1.00.<br />In the case of the Joy-Con, 5.00 rotations per second will result in an output of 1.00.</p>
      </span></td>
      <td label="Output value"><span>
        <p>When Direction is set to ＋/－: Between -1.00 and 1.00<br />When Direction is set to ＋ or －: Between 0.00 and 1.00 </p>
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
  <tbody>
    <tr>
      <th>
        <p>Setting value</p>
      </th>
      <th>
        <p>Description</p>
      </th>
    </tr>
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
<p>See also: <a href="/nodopedia/tips/output-conversion-settings">Output Conversion Settings</a></p>
<table class="wrapped">
  <colgroup>
    <col />
    <col />
  </colgroup>
  <tbody>
    <tr>
      <th>
        <p>Setting value</p>
      </th>
      <th>
        <p>Description</p>
      </th>
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
<h2>Axis of Rotation</h2>
<p>Sets which axis of rotation to check.</p>
<table class="wrapped">
  <colgroup>
    <col />
    <col />
  </colgroup>
  <tbody>
    <tr>
      <th>
        <p>Setting value</p>
      </th>
      <th>
        <p>Description</p>
      </th>
    </tr>
    <tr>
      <td label="Setting value"><span>X/Y/Z</span></td>
      <td label="Description"><span>Outputs the speed of the rotation around the specified axis.</span></td>
    </tr>
    <tr>
      <td label="Setting value"><span>Any direction</span></td>
      <td label="Description"><span>Outputs the highest speed of rotation around any axis.</span></td>
    </tr>
  </tbody>
</table>
<h2>Direction</h2>
<p>Sets which direction of rotation to check.</p>
<table class="wrapped">
  <colgroup>
    <col />
    <col />
  </colgroup>
  <tbody>
    <tr>
      <th>
        <p>Setting value</p>
      </th>
      <th>
        <p>Description</p>
      </th>
    </tr>
    <tr>
      <td label="Setting value"><span>＋</span></td>
      <td label="Description"><span>Reacts only when rotation is in a positive direction.</span></td>
    </tr>
    <tr>
      <td label="Setting value"><span>－</span></td>
      <td label="Description"><span>Reacts only when rotation is in a negative direction.</span></td>
    </tr>
    <tr>
      <td label="Setting value"><span>＋/－</span></td>
      <td label="Description"><span>Reacts when rotation is in either direction.</span></td>
    </tr>
  </tbody>
</table>