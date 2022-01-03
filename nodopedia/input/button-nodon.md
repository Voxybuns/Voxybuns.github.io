---
layout: entry
title:  "Button Nodon"
category: input
order: 2
quote: Heyo! I'll tell you what's going on with the buttons!<br>Mash mash mash!
---

<h1>Port</h1>
<h2>Input</h2>
<p>None</p>
<h2>Output</h2>
<table>
  <tbody>
    <tr>
      <th>Port name</th>
      <th>Port function</th>
      <th>Output value</th>
    </tr>
    <tr>
      <td label="Port name"><span>If pressed</span></td>
      <td label="Port function"><span>Outputs whether or not specific controller buttons have been pressed.</span></td>
      <td label="Output value"><span>0.00 or 1.00</span></td>
    </tr>
  </tbody>
</table>
<h2>Connection</h2>
<p>None</p>
<h1>Settings</h1>
<h2>Output Timing</h2>
<p>Choose when the Nodon will output 1.00.</p>
<table>
  <tbody>
    <tr>
      <th>Setting value</th>
      <th>Description</th>
    </tr>
    <tr>
      <td label="Setting value"><span>On press</span></td>
      <td label="Description"><span>Outputs 1.00 within one frame of the button being pressed.</span></td>
    </tr>
    <tr>
      <td label="Setting value"><span>While pressed</span></td>
      <td label="Description"><span>While the button is held down, the Nodon outputs 1.00 continuously.</span></td>
    </tr>
  </tbody>
</table>
<h2>Controller Number</h2>
<p>Select which controller to check.</p>
<table>
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
        Changes the controller to be automatically checked, depending on connection status.<br>
        <br>See also: <a href="/nodopedia/tips/automatic-controllers">Automatic Switching between Controllers</a>
      </span></td>
    </tr>
  </tbody>
</table>
<h2>Button</h2>
<p>The button that you want the Nodon to watch out for.</p>
<table>
  <tbody>
    <tr>
      <th>Setting value</th>
      <th>Description</th>
    </tr>
    <tr>
      <td label="Setting value"><span><br /></span></td>
      <td label="Description"><span>Checks all of the buttons that are enabled. If any one is pressed, the Nodon will output 1.00.</span></td>
    </tr>
  </tbody>
</table>
<h1>Other</h1>
<p> and  aren't used for Nintendo Switch Pro Controllers, Nintendo Switch Lite systems, or Joy-Con controllers attached to the Nintendo Switch console.</p>