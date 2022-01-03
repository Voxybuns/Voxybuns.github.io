---
layout: entry
title:  "Flag Nodon"
category: middle
order: 14
quote: Hmmm...uh...<br />Just have to remember if the flag is on or off...
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
      <td label="Port name"><span>On</span></td>
      <td label="Port function"><span>The flag switches on when this port receives a value other than 0.00.</span></td>
      <td label="Input operation"><span>Determines whether a signal is or is not equal to 0.00</span></td>
    </tr>
    <tr>
      <td label="Port name"><span>Off</span></td>
      <td label="Port function">
        <span>The flag switches off when this port receives a value other than 0.00.<br />If a value other than 0.00 is received at both the on and off ports, off is prioritized and the flag will switch off.</span>
      </td>
      <td label="Input operation"><span>Determines whether a signal is or is not equal to 0.00</span></td>
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
      <td label="Port name"><span>Flag is on</span></td>
      <td label="Port function"><span>When the flag is on, the output will be 1.00.<br />When it's off, it'll be 0.00.</span></td>
      <td label="Output value"><span>0.00 or 1.00</span></td>
    </tr>
  </tbody>
</table>
<h2>Connection</h2>
<p>None</p>
<h1>Settings</h1>
<p>None</p>
<h1>Other</h1>
<p>When the game starts up or resets, the flag will always be in the off state.</p>