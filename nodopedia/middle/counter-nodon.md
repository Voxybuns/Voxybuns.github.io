---
layout: entry
title:  "Counter Nodon"
category: middle
order: 15
quote: IF THERE ARE NUMBERS, I WILL COUNT THEM. AND<br />I WILL REMEMBER.
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
      <td label="Port name"><span>Count up</span></td>
      <td label="Port function">
        <span>Input received here is used to increase or decrease the count.</span>
      </td>
      <td label="Input operation"><span>Signal passes through unchanged</span></td>
    </tr>
    <tr>
      <td label="Port name"><span>Count down</span></td>
      <td label="Port function">
        <span>Input received here is used to increase or decrease the count.</span>
      </td>
      <td label="Input operation"><span>Signal passes through unchanged</span></td>
    </tr>
    <tr>
      <td label="Port name"><span>Reset</span></td>
      <td label="Port function">
        <span>When input other than 0.00 is received at this port, the count will be reset.<br />When reset, the count will revert to the value specified by the Starting Value property.<br />If input other than 0.00 is received at the reset port at the same time as input from another port, the reset will be executed with priority.</span>
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
      <td label="Port name"><span>Count</span></td>
      <td label="Port function"><span>Outputs the current count value.</span></td>
      <td label="Output value"><span>Accepts any number</span></td>
    </tr>
  </tbody>
</table>
<h2>Connection</h2>
<p>None</p>
<h1>Settings</h1>
<h2>Starting Value</h2>
<p>Sets the value that the counter will have at game start or after a reset.<br />You can choose between -1,000 and 1,000.</p>
<h2>Mode</h2>
<p>Sets the count mode.</p>
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
      <td label="Setting value"><span>No limit</span></td>
      <td label="Description"><span>Removes any limiting range on the count.</span></td>
    </tr>
    <tr>
      <td label="Setting value"><span>Range</span></td>
      <td label="Description"><span>The count will count up or down, but only within the Count Range. If the count goes beyond the range, input will be altered to make it fit.<br /><br />For example, if the Count Range is set to between zero and 10, input will be handled as below.<br />・If the count would have been -1.00, it'll be 0.00.<br />・If the count hits 5.00, it'll be 5.00.<br />・If the count would have been 13.00, it'll be 10.00.</span></td>
    </tr>
    <tr>
      <td label="Setting value"><span>Loop</span></td>
      <td label="Description"><span>The count will loop between the upper and lower limits of the Count Range. If the count goes beyond the range, it'll loop back round to the opposite.<br /><br />For example, if the Count Range is set to between zero and 10, input will be handled as below.<br />・If the count would have been -1.00, it'll be 9.00.<br />・If the count hits 5.00, it'll be 5.00.<br />・If the count would have been 10.00, it'll be 0.00.<br />・If the count would have been 13.00, it'll be 3.00.</span></td>
    </tr>
    <tr>
      <td label="Setting value"><span>Bounce</span></td>
      <td label="Description"><span>The count will bounce between the upper and lower limits of the Count Range.<br /><br />The direction of the count will vary depending on the current state of the Nodon.<br />You can think of counting up as the "out portion" of a round trip and counting down as the "return portion."<br />On the out portion, values received will be added to the total. On the return portion, they'll be subtracted.<br /><br />If the count goes beyond the upper limit, the count will toggle from the out portion to the return portion, or vice versa if the count goes beyond the lower portion.<br /><br />If the input is received at the reset port, the count will revert to the specified starting value and to the out portion of the count.</span></td>
    </tr>
  </tbody>
</table>
<h2>Count Range</h2>
<p>Sets the range of values that the Nodon will track.<br />If the mode is set to No Limit, this setting will have no effect.<br />You can choose between -1,000 and 1,000.</p>
<h2>Count Timing</h2>
<p>Sets the timing for when counting takes place.</p>
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
      <td label="Description"><span>When a value other than 0.00 is received at the count up or count down ports, one of the following values will be applied to the count only once, at the moment the value is received.<br /><br />If a value equal or greater than -1.00 but less than 0.00 is received: -1.00<br />If a value higher than 0.00 but lower or equal to 1.00 is received: 1.00<br />If a value lower than -1.00 or higher than 1.00 is received, values after the decimal point will be rounded down.</span></td>
    </tr>
    <tr>
      <td label="Setting value"><span>While Not 0</span></td>
      <td label="Description"><span>The value of the received input will be either added to or subtracted from the total, depending whether it was received at the count up or count down port.</span></td>
    </tr>
  </tbody>
</table>