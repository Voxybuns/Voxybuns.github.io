---
layout: entry
title:  "Touch-Position Nodon"
category: input
order: 5
quote: Are you touching somewhere on the screen?<br />Whatever it is, I can feel it!
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
      <td label="Port name"><span>
        <p>X</p>
      </span></td>
      <td label="Port function"><span>
        <p>Outputs the X coordinate of the last touched location.<br />The far left of the touch screen is -640, the center is 0, and the far right is 640.<br />However, in practice, the output is limited to within a certain area of the screen.<br />The output will be 0.00 from game start if the screen hasn't been touched.<br />Measured in pixels.</p>
      </span></td>
      <td label="Output value"><span>Between -625.00 to 624.00</span></td>
    </tr>
    <tr>
      <td label="Port name"><span>Y</span></td>
      <td label="Port function"><span>
        <p>Outputs the Y coordinate of the last touched location.<br />The lower edge of the touch screen is -360, the center is 0.00, and the upper edge is 360.<br />However, in practice, the output is limited to within a certain area of the screen.<br />The output will be 0.00 from game start if the screen hasn't been touched.<br />Measured in pixels.</p>
      </span></td>
      <td label="Output value"><span>Between -344.00 to 345.00</span></td>
    </tr>
  </tbody>
</table>
<h2>Connection</h2>
<p>None</p>
<h1>Settings</h1>
<p>None</p>
<h1>Other</h1>
<p>When this Nodon is called, then pressing  or  will activate the motion-control pointer. This is not affected by the control-method settings.<br />When the motion-control pointer is active, pressing , , , or  on the game screen will be treated the same as a physical touch. The If-Touched Nodon and Touch-Position Nodon will respond in the same way.<br />The same is true when clicking with a USB mouse.<br /></p>