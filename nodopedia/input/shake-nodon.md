---
layout: entry
title:  "Shake Nodon"
category: input
order: 6
quote: Shake it, baby! Shake the console and the Joy-Con controllers!<br />Ooh yeeeah! I'll let you know just how much you shook!
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
      <td label="Port name"><span>Momentum</span></td>
      <td label="Port function"><span>
        <p>Checks the acceleration of the specified target, then converts it to output according to the Output and Range settings.</p>
      </span></td>
      <td label="Output value"><span>
        <p>Between 0.00 and 1.00</p>
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
      <th>Setting value</th>
      <th>Description</th>
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
<p>For the console, 2g (g-force) converts to 1.00.<br />For the Joy-Con, 4g converts to 1.00.</p>
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
<h2>Direction</h2>
<p>Checks which direction the swing was made in.</p>
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
      <td label="Setting value"><span>Up/Down/Left/Right/Forward/Backward</span></td>
      <td label="Description"><span>Outputs a positive number if it detects a swing in the indicated direction.</span></td>
    </tr>
    <tr>
      <td label="Setting value"><span>Any direction</span></td>
      <td label="Description"><span>Ignores the direction of the swing and only measures its strength.</span></td>
    </tr>
  </tbody>
</table>
<h1>Other</h1>
<p>When you call up a Shake Nodon or play games that include Shake Nodon, a tip will be displayed recommending that players use the Joy-Con strap.</p>