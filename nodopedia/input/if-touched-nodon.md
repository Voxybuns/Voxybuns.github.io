---
layout: entry
title:  "If-Touched Nodon"
category: input
order: 4
quote: I'll tell you if anyone touches the screen.<br />But be gentle, OK?
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
      <td label="Port name"><span>If touched</span></td>
      <td label="Port function"><span>
        <p>Sends output depending on touches made to the screen.</p>
      </span></td>
      <td label="Output value"><span>
        <p>0.00 or 1.00</p>
      </span></td>
    </tr>
  </tbody>
</table>
<h2>Connection</h2>
<p>None</p>
<h1>Settings</h1>
<h2>Output Timing</h2>
<p>Sets when an output of 1.00 will be sent.</p>
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
      <td label="Setting value"><span>On touch</span></td>
      <td label="Description"><span>Outputs a signal of 1.00 at the moment of the touch.</span></td>
    </tr>
    <tr>
      <td label="Setting value"><span>While touched</span></td>
      <td label="Description"><span>Outputs a constant signal of 1.00 while something is being touched.</span></td>
    </tr>
  </tbody>
</table>
<h2>Touch where to output?</h2>
<p>Sets what part of the touch screen to check.</p>
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
      <td label="Setting value"><span>
        <p>This Nodon</p>
      </span></td>
      <td label="Description"><span>
        <p>Responds only when area covered by the Nodon is touched.<br />If the Game-Screen Nodon is called and the viewpoint of the Game-Screen Nodon matches that of the canvas, then the location the If-Touched Nodon responds to will change to match the Game-Screen Nodon's position when the game starts. In any other condition, the location responded to matches the location of the program screen immediately before playing the game.</p>
      </span></td>
    </tr>
    <tr>
      <td label="Setting value"><span>
        <p>Anywhere</p>
      </span></td>
      <td label="Port name"><span>
        <p>Responds when any part of the touch screen is touched.</p>
      </span></td>
    </tr>
  </tbody>
</table>
<h1>Other</h1>
<p>The touch screen can recognize a maximum of 10 separate, simultaneous touches.</p>
<p>If the If-Touched Nodon or Touch-Position Nodon are called, then pressing  or  on the game screen will activate the motion-control pointer. This is not affected by the control-method settings.<br />When the motion-control pointer is active, pressing , , , or  will be treated the same as a physical touch. The If-Touched Nodon and Touch-Position Nodon will respond in the same way.<br />The same is true when a connected USB mouse is clicked on the game screen.</p>
