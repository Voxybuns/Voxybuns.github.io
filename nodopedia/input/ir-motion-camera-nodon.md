---
layout: entry
title:  "IR Motion Camera Nodon"
category: input
order: 10
quote: If there are any jobs related to the IR Motion Camera,<br />you have to go through me.
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
      <td label="Port name"><span>Captured portions</span></td>
      <td label="Port function"><span>Outputs the number of bright portions captured by the IR Motion Camera.</span></td>
      <td label="Output value"><span>Between 0.00 and 16.00</span></td>
    </tr>
  </tbody>
</table>
<h2>Connection</h2>
<p>None</p>
<h1>Settings</h1>
<h2>Controller Number</h2>
<p>Select which controller to check.</p>
<p>If another IR Motion Camera Nodon with a different Distance to Recognize property is used in the same program, you won't be able to select the controller number used by that Nodon.<br />When a Nodon that illuminates the IR light is placed in the same program, you won't be able to select that controller number.</p>
<h2>Distance to Recognize</h2>
<p>Settings that affect the recognition processes used by the IR Motion Camera.<br /><br />Only the Distance to Recognize setting can be changed on the IR Motion Camera Nodon with the same controller number. When the Distance to Recognize setting is changed on one Nodon, all other Nodon with the same controller number setting will be automatically changed.</p>
<table class="wrapped">
  <colgroup>
    <col />
    <col />
  </colgroup>
  <tbody>
    <tr>
      <th>
        <p>Setting value</p>
      </th>
      <th>
        <p>Description</p>
      </th>
    </tr>
    <tr>
      <td label="Setting value"><span>IR off</span></td>
      <td label="Description"><span>Prevents the IR Motion Camera from emitting infrared light.<br />However, the camera will continue to recognize infrared light from other sources.</span></td>
    </tr>
    <tr>
      <td label="Setting value"><span>Near<br />Normal<br />Near and Far</span></td>
      <td label="Description"><span>Depending on the setting, the brightness of the infrared light and the recognition threshold used in the recognition process will change.</span></td>
    </tr>
  </tbody>
</table>
<h2 id="Anchor_804928088_h2_6">
  &harr;
</h2>
<p>If this is set to on, the marker display will flip horizontally.</p>
<h1>Other</h1>
<p>The bright portions captured by the IR Motion Camera will be displayed as markers within the Nodon.</p>
<p>Markers will only be displayed on the program screen.<br />You can use a Bull's-Eye Nodon to detect whether the marker displays or not.</p>
<p>You can place only up to 10 IR Motion Camera Nodon at the same time.<br />When attempting to call a new IR Motion Camera Nodon, the call will be blocked if it clashes with settings on already-present IR Motion Camera Nodon or other Nodon that cause IR light to be emitted.</p>
<p>This Nodon cannot be used with Joy-Con controllers connected to the Nintendo&nbsp;Switch console.<br />The IR Motion Camera is unavailable on the Nintendo&nbsp;Switch Lite system, the Nintendo&nbsp;Switch Pro Controller, Joy-Con (L), or Joy-Con controllers attached to the Nintendo&nbsp;Switch console.<br />It's possible to use with a Joy-Con (R) wirelessly connected to a Nintendo&nbsp;Switch Lite system, however.</p>
<p>If you call two or more instances of either IR Motion Camera Nodon or IR-Light Nodon with each set to different controller numbers, you won't be able to wirelessly connect more than four Joy-Con controllers.<br />Also, if you have five or more Joy-Con controllers wirelessly connected and then call a second instance of either of the Nodon mentioned above, which is then set to a controller number that's different to the first one, the latest-assigned Nodon will be inactive.</p>
<p>