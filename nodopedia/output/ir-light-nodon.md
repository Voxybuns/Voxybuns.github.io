---
layout: entry
title:  "IR-Light Nodon"
category: output
order: 12
quote: I've got an infrared emitter,<br />and I'm not afraid to use it!
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
      <td label="Port name"><span>Light up</span></td>
      <td label="Port function">
        <p>If this port gets an input other than 0.00,<br />the IR Motion Camera built into the Joy-Con&nbsp;(R) will emit infrared light.</p>
      </td>
      <td label="Input operation"><span>Determines whether a signal is or is not equal to 0.00</span></td>
    </tr>
  </tbody>
</table>
<h2>Output</h2>
<p>None</p>
<h2>Connection</h2>
<p>None</p>
<h1>Settings</h1>
<h2>Controller Number</h2>
<p>Specifies the number of the controller that will emit infrared light.<br />If another Nodon using the IR Motion Camera is called up in the same program, you won't be able to choose the same controller number.<br />You can select either 1 or 2.</p>
<h2>Continue Output for How Long?</h2>
<p>Sets the number of seconds that the output will continue for.<br />Can be set to between 0.00 and 100.00.</p>
<h1>Other</h1>
<p>You can only call up to ten IR Light Nodon.<br />Also, it will not be possible to call new IR Light Nodon if the settings clash with any IR Motion Camera Nodon that have already been called.</p>
<p>This Nodon cannot be used with Joy-Con controllers connected to the Nintendo&nbsp;Switch console.<br />Since Joy-Con (L) controllers, the Nintendo&nbsp;Switch Lite system, and the Nintendo&nbsp;Switch Pro Controller do not have IR Motion Cameras, this Nodon cannot be used with them. It's possible to use with a Joy-Con (R) controller wirelessly connected to a Nintendo&nbsp;Switch Lite system, however.</p>
<p>If you call two or more instances of either IR Motion Camera Nodon or IR-Light Nodon with each set to different controller numbers, you won't be able to wirelessly connect more than four Joy-Con controllers.<br />Also, if you have five or more Joy-Con controllers wirelessly connected and then call a second instance of either of the Nodon mentioned above, which is then set to a controller number that's different to the first one, the latest-assigned Nodon will be inactive.</p>