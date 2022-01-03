---
layout: entry
title:  "Timer Nodon"
category: middle
order: 17
quote: My only job is to wait until the scheduled time.<br />That is all.
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
      <td label="Port function">
        <p>When the value received by this port changes from 0.00 to anything else, the timer starts to count down.<br />Any further input received after the timer has started or while the Nodon is sending an output will have no effect.</p>
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
      <td label="Port name"><span>Output</span></td>
      <td label="Port function">
        <p>Outputs 1.00 when the set number of seconds passes from the start of the countdown.<br />It will continue to output 1.00 for the number of seconds determined by the Continue Output for How Long? setting.</p>
      </td>
      <td label="Output value"><span>0.00 or 1.00</span></td>
    </tr>
  </tbody>
</table>
<h2>Connection</h2>
<p>None</p>
<h1>Settings</h1>
<h2>Output after How Many Seconds?</h2>
<p>Sets the amount of seconds to wait after receiving input before outputting 1.00.<br />If set to 0.00, then output will be sent immediately, without waiting even one frame.<br />Since the time is based on frame processing, the time measurement in seconds might be slightly off.<br />You can set it between 0.00 and 100.00.</p>
<h2>Continue Output for How Long?</h2>
<p>Sets how many seconds to continue to output a value of 1.00 after the countdown<br />completes. Even when set to 0.00, it'll wait a minimum of one frame before<br />sending the output. You can set it between 0.00 and 100.00.</p>
<h1>Other</h1>
<p>Actual waiting times may lengthen slightly depending on how long the whole program takes to complete all its processes.</p>