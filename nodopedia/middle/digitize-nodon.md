---
layout: entry
title:  "Digitize Nodon"
category: middle
order: 3
quote: Nice and neat, neat and nice.
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
      <td label="Port name"><span>Input</span></td>
      <td label="Port function"><span>The Nodon will convert the value going into this port.</span></td>
      <td label="Input operation"><span>Signal passes through unchanged</span></td>
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
      <td label="Port name"><span>Output</span></td>
      <td label="Port function">
        <span>Outputs the value received as input after converting it into neat portions.</span>
      </td>
      <td label="Output value"><span>Accepts any number</span></td>
    </tr>
  </tbody>
</table>
<h2>Connection</h2>
<p>None</p>
<h1>Settings</h1>
<h2>Number of Stages</h2>
<p>Sets the number of stages that values in the range of 0.00 to 1.00 can be divided into.<br />You can choose between two to fifty stages.<br /><br />For example, if you set it to six, the output will be sent in one of the following six, neat portions.<br /><br />0.00 and up, but below 0.10 → 0.00<br />0.10 and up, but below 0.30 → 0.20<br />0.30 and up, but below 0.50 → 0.40<br />0.50 and up, but below 0.70 → 0.60<br />0.70 and up, but below 0.90 → 0.80<br />0.90 and up, but below 1.00 → 1.00<br /><br />For values that are not 0.00 or are 1.00 and up, the same intervals will be applied, giving the same output.</p>
