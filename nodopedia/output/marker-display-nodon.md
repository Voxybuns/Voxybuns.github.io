---
layout: entry
title:  "Marker-Display Nodon"
category: output
order: 9
quote: Yes, displaying markers. That's my job.<br />Just tell me what you want displayed!
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
      <td label="Port name" rowspan="2"><span>Input</span></td>
      <td label="Port function" rowspan="2">
        <p>The input received determines the marker's display.<br />When Rotate or Pie chart is selected, the unit will be degrees (°).</p>
      </td>
      <td label="Input operation">
        <p>The input for the Move, Extend, Line, Opacity, and Flash properties is restricted to between 0.00 and 1.00.<br><br>Rotate and Pie chart loop between 0.00 and 360.00.</p>
      </td>
    </tr>
  </tbody>
</table>
<h2>Output</h2>
<p>None</p>
<h2>Connection</h2>
<p>None</p>
<h1>Settings</h1>
<h2>Light Up How?</h2>
<p>Sets how the marker should be displayed.</p>
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
      <td label="Setting value"><span>Move</span></td>
      <td label="Description"><span>Displays a square marker with the same height as the Nodon. The larger the input, the further the marker moves to the right. An input of 0.00 represents the far left of the marker, and an input of 1.00 represents the far right.</span></td>
    </tr>
    <tr>
      <td label="Setting value"><span>Extend</span></td>
      <td label="Description"><span>The higher the input, the further the marker will extend. A value of 0.00 represents the far left of the Nodon, while 1.00 represents the far right.</span></td>
    </tr>
    <tr>
      <td label="Setting value"><span>Line</span></td>
      <td label="Description"><span>Displays a marker that moves in a line from left to right based on the input value. The left edge of the Nodon is 0.00 and the right edge is 1.00.<br />The marker will not display if the input value is 0.00.</span></td>
    </tr>
    <tr>
      <td label="Setting value"><span>Rotate</span></td>
      <td label="Description"><span>The marker will fill the whole area of the Nodon. The marker will rotate in degrees by the number received at this input port.</span></td>
    </tr>
    <tr>
      <td label="Setting value"><span>Pie chart</span></td>
      <td label="Description"><span>The larger the number received at this input, the larger the slice of pie on the Pie chart.</span></td>
    </tr>
    <tr>
      <td label="Setting value"><span>Opacity</span></td>
      <td label="Description"><span>The marker will be displayed over the whole of the Nodon. The higher the input, the more opaque the marker will be.</span></td>
    </tr>
    <tr>
      <td label="Setting value"><span>Flash</span></td>
      <td label="Description"><span>Displays the marker over the whole of the Nodon. When inputs other than 0.00 are received, the marker will flash. The higher the input, the more opaque the marker will be.</span></td>
    </tr>
  </tbody>
</table>
<h2>Activates Bull's–Eye Nodon?</h2>
<p>Sets whether or not the Bull's–Eye Nodon responds to the displayed marker.</p>
<h1>Other</h1>
<p>Markers will only be displayed on the program screen.<br />You can use a Bull's-Eye Nodon to detect whether the marker displays or not.</p>