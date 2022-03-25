---
layout: entry-quoteless
title:  "Output Conversion Settings"
category: tips
order: 2
---
<h1>Handling of Raw Input Values</h1>
<p>Most input Nodon have Output and Range settings.<br />These settings determine how the raw input value should be converted and then sent as output. (In practice, the value is determined by how the input Nodon gives<br />its output.)<br />The two settings should be considered a set.</p>
<h1>Output</h1>
<p>Specifies either Digital or Analog.<br />If it's set to Digital, an output value of 1.00 will be sent if the input is within the values specified in Range. If it's outside the range, it'll send 0.00.<br />If it's set to Analog, values lower than the range's lower limit will be sent as 0.00, and values within it will be converted precisely to a value between 0.00 and 1.00. If it's higher than the range's upper limit, it'll be sent as 1.00.</p>
<h1>Range Slider</h1>
<h2>Upper/Lower Handle</h2>
<p>The two handles can be moved left or right.<br />The raw input value (for example, the amount that a control stick is tilted) is converted according to the graph shown above the slider and then sent as output.</p>
<p>
  <span class="embedded-file-wrapper ">
    <img src="/assets/nodopedia/img/handles.svg" height="124" class="embedded-image" />
  </span>
</p>
<p>The horizontal axis represents the input, and the vertical axis represents the output.</p>
<h2>Value Preview</h2>
<p>The arrow underneath the slider shows a preview of the value.<br />It moves left or right, depending on the raw input value.<br />The value that will be sent from the Nodon is shown in the square part of the mark.</p>
<table class="wrapped hide_mobile">
  <colgroup>
    <col />
    <col />
    <col />
    <col />
  </colgroup>
  <tbody>
    <tr>
      <th>Output</th>
      <td><span>0.00</span></td>
      <td><span>0.50</span></td>
      <td><span>1.00</span></td>
    </tr>
    <tr>
      <th>Display</th>
      <td>
          <p>
              <img src="/assets/nodopedia/img/indicator_empty.svg" class="embedded-image" />
          </p>
      </td>
      <td>
          <p>
              <img src="/assets/nodopedia/img/indicator_half.svg" height="48" class="embedded-image" />
          </p>
      </td>
      <td>
          <p>
              <img src="/assets/nodopedia/img/indicator_full.svg" height="48" class="embedded-image" />
          </p>
      </td>
    </tr>
  </tbody>
</table>
<table class="wrapped show_mobile">
  <tbody>
    <tr>
        <th>Output</th>
        <th>Display</th>
    </tr>
    <tr>
      <td label="Output"><span>0.00</span></td>
      <td label="Display">
          <p><img src="/assets/nodopedia/img/indicator_empty.svg" class="embedded-image" /></p>
      </td>
    </tr>
    <tr>
      <td label="Output"><span>0.50</span></td>
      <td label="Display">
          <p><img src="/assets/nodopedia/img/indicator_half.svg" height="48" class="embedded-image" /></p>
      </td>
    </tr>
    <tr>
        <td label="Output"><span>1.00</span></td>
        <td label="Display">
          <p><img src="/assets/nodopedia/img/indicator_full.svg" height="48" class="embedded-image" /></p>
        </td>
    </tr>

  </tbody>
</table>
<h1>Common Settings</h1>
<h2>Input Threshold and Analog Output</h2>
<p>This refers to analog ranges with a small deadzone—for example, 0.10 to 1.00.</p>
<p>
  <span class="embedded-file-wrapper ">
    <img src="/assets/nodopedia/img/threshold_analog.svg" height="70" class="embedded-image" />
  </span>
</p>
<p>Input values lower than 0.10 will be output as 0.00, so very small input will be disregarded. We can call 0.10 the "input threshold."<br />If the input exceeds 0.10, it'll start to output, and the output will increase along with the input. If 1.00 is received as input, it'll send 1.00 as output.<br />When called up, most input Nodon will have their ranges set like this by default. (Some Nodon may have different input thresholds for the lower margin.)<br />A Nodon like the Shake Nodon can pick up slight movement even when the player is trying to hold the Joy-Con still, so having an input threshold can ensure that output is sent only when the Joy-Con is intentionally shaken.</p>
<h2>Sensitive Analog Output</h2>
<p>Settings similar to an analog range of 0.00 to 0.50.</p>
<p>
  <span class="embedded-file-wrapper ">
    <img src="/assets/nodopedia/img/sensitive_analog.svg" height="70" class="embedded-image" />
  </span>
</p>
<p>Responds sensitively to input. Any input above a certain value will result in an output of 1.00.<br />In the example above, an input of 0.50 will result in an output of 1.00, which represents a sensitivity double that of a range like 0.00 to 1.00.<br />You can adjust the sensitivity by moving the slider on the right.</p>
<h2>Sending Raw Values as Analog Output</h2>
<p>Settings similar to an analog range of 0.00 to 1.00.</p>
<p>
  <span class="embedded-file-wrapper ">
    <img src="/assets/nodopedia/img/raw_analog.svg" height="70" class="embedded-image" />
  </span>
</p>
<p>With a range of 0.00 to 1.00, the value received as input will be sent unchanged as output.</p>
<h2>If-Style Digital Handling</h2>
<p>Settings similar to a digital range of 0.10 to 1.00.</p>
<p>
  <span class="embedded-file-wrapper ">
    <img src="/assets/nodopedia/img/ifstyle_digital.svg" height="70" class="embedded-image" />
  </span>
</p>
<p>Use this when you want to make a clear, digital judgment of a momentary occurrence—for example, the swinging of a Joy-Con.<br />Very small input won't produce any response (it'll continue to output 0.00), but if it goes over the threshold, it'll output 1.00. It won't output intermediate values like 0.50.<br />You can adjust the handle for the lower margin to change the input threshold.</p>
<h2>While-Style Digital Handling</h2>
<p>Settings similar to a digital range of 0.50 to 0.60.</p>
<p>
  <span class="embedded-file-wrapper ">
    <img src="/assets/nodopedia/img/whilestyle_digital.svg" height="70" class="embedded-image" />
  </span>
</p>
<p>Outputs 1.00 under specific input conditions. Outside of those conditions,<br />outputs 0.00.<br />For example, you might use this type of setting if you wanted to use the If-Face-Up Nodon to check whether the Joy-Con is held at a certain angle.</p>