---
title: Advanced Cameras
layout: nodopedia/entry
category: tips
---

# Advanced Camera Nodon
There are four types of advanced camera Nodon. You can combine them to program some distinctive camera effects.

- <a href="/tools/nodopedia/object/camera-position-nodon">Camera-Position Nodon</a>
- <a href="/tools/nodopedia/object/camera-target-nodon">Camera-Target Nodon</a>
- <a href="/tools/nodopedia/object/camera-direction-nodon">Camera-Direction Nodon</a>
- <a href="/tools/nodopedia/object/camera-angle-nodon">Camera-Angle Nodon</a>

# Uncalled Advanced Camera Nodon
If one advanced camera Nodon is called, the ones that haven't been called will have the following settings by default:

- Camera Position: Set at the center (0, 0, 0)
- Camera Target: Set at the center (0, 0, 0)
- Camera Angle: Set to 90° horizontal
- Camera Direction: Follows camera position and camera target

Please note, when neither the Camera-Position Nodon nor the Camera-Target Nodon are called, the camera position and target will be determined based on whatever was in view on the program screen before program execution. If both Nodon have the same value, the camera direction will point toward Z+.

## All Advanced Camera Nodon

<table class="even"><thead><tr><th>Position</th><th>Target</th><th>Direction</th><th>Angle</th><th style="width: 40%;">Movement</th></tr></thead><tbody><tr><td></td><td>-</td><td>-</td><td>-</td><td>Points toward the center (0,0,0) from the specified camera position.<br>The field of view is set to 90°.</td></tr><tr><td>-</td><td></td><td>-</td><td>-</td><td>Points toward the specified target from the center (0,0,0).<br>The field of view is set to 90°.</td></tr><tr><td></td><td></td><td>-</td><td>-</td><td>Points toward the specified target from the specified camera position.<br>The field of view is set to 90°.</td></tr><tr><td>-</td><td>-</td><td></td><td>-</td><td>The camera target and camera position are determined by the position last viewed on the program screen.<br>The camera turns from that point in response to input received by the Camera-Direction Nodon.<br>The field of view is set to 90°.</td></tr><tr><td></td><td>-</td><td></td><td>-</td><td>Targets the center (0,0,0) from the specified camera position.<br>The camera turns from that point in response to input received by the Camera-Direction Nodon.<br>The field of view is set to 90°.</td></tr><tr><td>-</td><td></td><td></td><td>-</td><td>Targets the specified target from the center (0,0,0).<br>The camera turns from that point in response to input received by the Camera-Direction Nodon.<br>The field of view is set to 90°.</td></tr><tr><td></td><td></td><td></td><td>-</td><td>Targets the specified target point from the specified camera position.<br>The camera turns from that point in response to input received by the Camera-Direction Nodon.<br>The field of view is set to 90°.</td></tr><tr><td>-</td><td>-</td><td>-</td><td></td><td>The camera position and target are determined based on the camera's position on the program screen. However, at the time of calculation, specified field of view will be used.</td></tr><tr><td></td><td>-</td><td>-</td><td></td><td>Targets the center (0, 0, 0) from the specified camera position.<br>Uses the specified field of view.</td></tr><tr><td>-</td><td></td><td>-</td><td></td><td>Looks toward the specified target from the center (0,0,0).<br>Uses the specified field of view.</td></tr><tr><td></td><td></td><td>-</td><td></td><td>Looks toward the specified target from the specified position.<br>Uses the specified field of view.</td></tr><tr><td>-</td><td>-</td><td></td><td></td><td>The camera position and target are determined based on the camera's position on the program screen. However, at the time of calculation, specified field of view will be used.<br>The camera turns from that point in response to input received by the Camera-Direction Nodon.</td></tr><tr><td></td><td>-</td><td></td><td></td><td>Targets the center (0,0,0) from the specified camera position.<br>The camera turns from that point in response to input received by the Camera-Direction Nodon.<br>Uses the specified field of view.</td></tr><tr><td>-</td><td></td><td></td><td></td><td>Targets the specified target from the center (0,0,0).<br>The camera turns from that point in response to input received by the Camera-Direction Nodon.<br>Uses the specified field of view.</td></tr><tr><td></td><td></td><td></td><td></td><td>Targets the specified target point from the specified camera position.<br>The camera turns from that point in response to input received by the Camera-Direction Nodon.<br>Uses the specified field of view.</td></tr></tbody></table>