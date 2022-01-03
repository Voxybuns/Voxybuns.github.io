---
layout: entry
title:  "Random Nodon"
category: middle
order: 16
quote: Woo-hoo! I bet you can't get enough of my zany random numbers!<br />You know there's actually a method to the madness!<br />Haven't a clue what it is though!
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
      <td label="Port name"><span>?</span></td>
      <td label="Port function"><span>If this port receives any value other than 0.00, it will generate a new random number. Technically, it isn't a true random number but a pseudorandom number!</span></td>
      <td label="Input operation"><span>Determines whether a signal is or is not equal to 0.00</span></td>
    </tr>
    <tr>
      <td label="Port name"><span>Reset</span></td>
      <td label="Port function"><span>If this port receives any value other than 0.00, it will reset the generated random number to 0.00.</span></td>
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
      <td label="Port name"><span>Random number</span></td>
      <td label="Port function"><span>Outputs the generated random number.</span></td>
      <td label="Output value"><span>Between 0.00 and 1,000.00</span></td>
    </tr>
  </tbody>
</table>
<h2>Connection</h2>
<p>None</p>
<h1>Settings</h1>
<h2>Update Timing</h2>
<p>Sets when new random numbers should be generated.</p>
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
      <td label="Setting value"><span>On change from 0</span></td>
      <td label="Description"><span>Generate one new number when a value other than 0.00 is received at the ? port.</span></td>
    </tr>
    <tr>
      <td label="Setting value"><span>While not 0</span></td>
      <td label="Description"><span>Whenever a number other than 0.00 is received at the ? port, the Nodon will continue to generate random numbers.</span></td>
    </tr>
  </tbody>
</table>
<h2>Output Range</h2>
<p>Sets the range of possible random numbers.<br />The maximum is 1,000. The minimum is one.</p>