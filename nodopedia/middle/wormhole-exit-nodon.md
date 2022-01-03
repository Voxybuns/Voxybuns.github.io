---
layout: entry
title:  "Wormhole-Exit Nodon"
category: gray
order: 2
quote: This is Exit, waiting for the good<br />news from Entrance, over!
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
      <td label="Port name"><span>Exit</span></td>
      <td label="Port function">
        <p>When a value is transmitted to this Nodon from a Wormhole-Entrance Nodon with the same Wormhole ID, the value will be sent as directly as output.<br />If there are no Wormhole-Entrance Nodon with the same ID, then the output will be 0.00.<br />If there are multiple Wormhole-Exit Nodon with the same ID, they will all receive the value.</p>
      </td>
      <td label="Output value"><span>Accepts any number</span></td>
    </tr>
  </tbody>
</table>
<h2>Connection</h2>
<p>None</p>
<h1>Settings</h1>
<h2>Wormhole ID</h2>
<p>Sets which Wormhole-Entrance Nodon the input will be received from.<br />You can choose from A to Z.</p>