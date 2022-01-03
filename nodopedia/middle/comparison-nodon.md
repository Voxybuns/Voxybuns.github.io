---
layout: entry
title:  "Comparison Nodon"
category: middle
order: 11
quote: I compare two numbers according to the conditions you give me.<br />But what will they beeee?
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
      <td label="Port name"><span>Input 1</span></td>
      <td label="Port function"><span>The value received at this port is used as the first number in the comparison.</span></td>
      <td label="Input operation"><span>Signal passes through unchanged</span></td>
    </tr>
    <tr>
      <td label="Port name"><span>Input 2</span></td>
      <td label="Port function"><span>The value received at this port is used as the second number in the comparison.</span></td>
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
      <td label="Port name"><span>Result</span></td>
      <td label="Port function"><span>Compares input 1 and input 2 according to the specified conditions, then outputs 1.00 if the condition is met.</span></td>
      <td label="Output value"><span>0.00 or 1.00</span></td>
    </tr>
  </tbody>
</table>
<h2>Connection</h2>
<p>None</p>
<h1>Settings</h1>
<h2>Comparison Method</h2>
<p>Specifies how to compare the two input values.</p>
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
      <td label="Setting value"><span>=</span></td>
      <td label="Description"><span>Outputs 1.00 when input 1 and input 2 have the same value.<br />If they aren't the same, the output will be 0.00.</span></td>
    </tr>
    <tr>
      <td label="Setting value"><span>></span></td>
      <td label="Description"><span>Outputs 1.00 when input 1 is greater than input 2.<br />If it isn't greater, the output will be 0.00.</span></td>
    </tr>
    <tr>
      <td label="Setting value"><span><</span></td>
      <td label="Description"><span>Outputs 1.00 when input 1 is less than input 2.<br />If it isn't less, the output will be 0.00.</span></td>
    </tr>
    <tr>
      <td label="Setting value"><span>≥</span></td>
      <td label="Description"><span>Outputs 1.00 when input 1 is greater than or equal to input 2.<br />If it isn't greater or equal, the output will be 0.00.</span></td>
    </tr>
    <tr>
      <td label="Setting value"><span>≤</span></td>
      <td label="Description"><span>Outputs 1.00 when input 1 is less than or equal to input 2.<br />If it isn't less or equal, the output will be 0.00.</span></td>
    </tr>
  </tbody>
</table>