---
layout: entry-quoteless
title:  "Advanced Cameras"
category: tips
order: 12
---
<h1>Advanced Camera Nodon</h1>
<p>There are four types of advanced camera Nodon. You can combine them to program some distinctive camera effects.</p>
<ul class="bullet" style="margin-bottom: 1rem">
  <li>
    <a href="/nodopedia/object/camera-position-nodon">Camera-Position Nodon</a>
  </li>
  <li>
    <a href="/nodopedia/object/camera-target-nodon">Camera-Target Nodon</a>
  </li>
  <li>
    <a href="/nodopedia/object/camera-directopn-nodon">Camera-Direction Nodon</a>
  </li>
  <li>
    <a href="/nodopedia/object/camera-angle-nodon">Camera-Angle Nodon</a>
  </li>
</ul>
<h1>Uncalled Advanced Camera Nodon</h1>
<p>If one advanced camera Nodon is called, the ones that haven't been called will have the following settings by default:<br /><br />Camera Position: Set at the center (0, 0, 0)<br />Camera Target: Set at the center (0, 0, 0)<br />Camera Angle: Set to 90° horizontal<br />Camera Direction: Follows camera position and camera target<br /><br />Please note, when neither the Camera-Position Nodon nor the Camera-Target Nodon are called, the camera position and target will be determined based on whatever was in view on the program screen before program execution. If both Nodon have the same value, the camera direction will point toward Z+.</p>
<h2>All Advanced Camera Nodon</h2>
<table class="wrapped cameradetail">
  <colgroup> <col /> <col /> <col /> <col /> <col /> </colgroup>
  <tbody>
    <tr>
      <th>Position</th>
      <th>Target</th>
      <th>Direction</th>
      <th>Angle</th>
      <th>Movement</th>
    </tr>
    <tr>
      <td label="Position"><span></span></td>
      <td label="Target"><span>-</span></td>
      <td label="Direction"><span>-</span></td>
      <td label="Angle"><span>-</span></td>
      <td label="Movement"><span>Points toward the center (0,0,0) from the specified camera position.<br />The field of view is set to 90°.</span></td>
    </tr>
    <tr>
      <td label="Position"><span>-</span></td>
      <td label="Target"><span></span></td>
      <td label="Direction"><span>-</span></td>
      <td label="Angle"><span>-</span></td>
      <td label="Movement"><span>Points toward the specified target from the center (0,0,0).<br />The field of view is set to 90°.</span></td>
    </tr>
    <tr>
      <td label="Position"><span></span></td>
      <td label="Target"><span></span></td>
      <td label="Direction"><span>-</span></td>
      <td label="Angle"><span>-</span></td>
      <td label="Movement"><span>Points toward the specified target from the specified camera position.<br />The field of view is set to 90°.</span></td>
    </tr>
    <tr>
      <td label="Position"><span>-</span></td>
      <td label="Target"><span>-</span></td>
      <td label="Direction"><span></span></td>
      <td label="Angle"><span>-</span></td>
      <td label="Movement"><span>The camera target and camera position are determined by the position last viewed on the program screen.<br />The camera turns from that point in response to input received by the Camera-Direction Nodon.<br />The field of view is set to 90°.</span></td>
    </tr>
    <tr>
      <td label="Position"><span></span></td>
      <td label="Target"><span>-</span></td>
      <td label="Direction"><span></span></td>
      <td label="Angle"><span>-</span></td>
      <td label="Movement"><span>Targets the center (0,0,0) from the specified camera position.<br />The camera turns from that point in response to input received by the Camera-Direction Nodon.<br />The field of view is set to 90°.</span></td>
    </tr>
    <tr>
      <td label="Position"><span>-</span></td>
      <td label="Target"><span></span></td>
      <td label="Direction"><span></span></td>
      <td label="Angle"><span>-</span></td>
      <td label="Movement"><span>Targets the specified target from the center (0,0,0).<br />The camera turns from that point in response to input received by the Camera-Direction Nodon.<br />The field of view is set to 90°.</span></td>
    </tr>
    <tr>
      <td label="Position"><span></span></td>
      <td label="Target"><span></span></td>
      <td label="Direction"><span></span></td>
      <td label="Angle"><span>-</span></td>
      <td label="Movement"><span>Targets the specified target point from the specified camera position.<br />The camera turns from that point in response to input received by the Camera-Direction Nodon.<br />The field of view is set to 90°.</span></td>
    </tr>
    <tr>
      <td label="Position"><span>-</span></td>
      <td label="Target"><span>-</span></td>
      <td label="Direction"><span>-</span></td>
      <td label="Angle"><span></span></td>
      <td label="Movement"><span>The camera position and target are determined based on the camera's position on the program screen. However, at the time of calculation, specified field of view will be used.</span></td>
    </tr>
    <tr>
      <td label="Position"><span></span></td>
      <td label="Target"><span>-</span></td>
      <td label="Direction"><span>-</span></td>
      <td label="Angle"><span></span></td>
      <td label="Movement"><span>Targets the center (0, 0, 0) from the specified camera position.<br />Uses the specified field of view.</span></td>
    </tr>
    <tr>
      <td label="Position"><span>-</span></td>
      <td label="Target"><span></span></td>
      <td label="Direction"><span>-</span></td>
      <td label="Angle"><span></span></td>
      <td label="Movement"><span>Looks toward the specified target from the center (0,0,0).<br />Uses the specified field of view.</span></td>
    </tr>
    <tr>
      <td label="Position"><span></span></td>
      <td label="Target"><span></span></td>
      <td label="Direction"><span>-</span></td>
      <td label="Angle"><span></span></td>
      <td label="Movement"><span>Looks toward the specified target from the specified position.<br />Uses the specified field of view.</span></td>
    </tr>
    <tr>
      <td label="Position"><span>-</span></td>
      <td label="Target"><span>-</span></td>
      <td label="Direction"><span></span></td>
      <td label="Angle"><span></span></td>
      <td label="Movement"><span>The camera position and target are determined based on the camera's position on the program screen. However, at the time of calculation, specified field of view will be used.<br />The camera turns from that point in response to input received by the Camera-Direction Nodon.</span></td>
    </tr>
    <tr>
      <td label="Position"><span></span></td>
      <td label="Target"><span>-</span></td>
      <td label="Direction"><span></span></td>
      <td label="Angle"><span></span></td>
      <td label="Movement"><span>Targets the center (0,0,0) from the specified camera position.<br />The camera turns from that point in response to input received by the Camera-Direction Nodon.<br />Uses the specified field of view.</span></td>
    </tr>
    <tr>
      <td label="Position"><span>-</span></td>
      <td label="Target"><span></span></td>
      <td label="Direction"><span></span></td>
      <td label="Angle"><span></span></td>
      <td label="Movement"><span>Targets the specified target from the center (0,0,0).<br />The camera turns from that point in response to input received by the Camera-Direction Nodon.<br />Uses the specified field of view.</span></td>
    </tr>
    <tr>
      <td label="Position"><span></span></td>
      <td label="Target"><span></span></td>
      <td label="Direction"><span></span></td>
      <td label="Angle"><span></span></td>
      <td label="Movement"><span>Targets the specified target point from the specified camera position.<br />The camera turns from that point in response to input received by the Camera-Direction Nodon.<br />Uses the specified field of view.</span></td>
    </tr>
  </tbody>
</table>