---
layout: entry
title:  "Swap-Game Nodon"
category: output
order: 8
quote: Nothing like a change of scene<br />to freshen things up!
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
      <td label="Port name"><span>Swap</span></td>
      <td label="Port function"><span>When a value other than 0.00 is received at this port, the current game will end and another game will start up, selected according to the Swap Type settings.<br />When the new game starts up, the received signal will be sent as output from the Swap-Game Nodon in the new game.</span></td>
      <td label="Input operation">
        <p>Determines whether a signal is or is not equal to 0.00</p>
      </td>
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
      <td label="Port name"><span>Swap from value</span></td>
      <td label="Port function"><span>When transferring from another game, the signal received at the Swap port of the Swap-Game Nodon in the original game will be sent as output from this port.<br />At all other times, it'll output 0.00.</span></td>
      <td label="Output value"><span>Accepts any number</span></td>
    </tr>
  </tbody>
</table>
<h2>Connection</h2>
<p>None</p>
<h1>Settings</h1>
<h2>Swap Type</h2>
<p>Specifies the method used to determine which game to swap to.</p>
<table class="wrapped">
  <colgroup>
    <col />
    <col />
  </colgroup>
  <thead>
    <tr>
      <th>
        <p>Setting value</p>
      </th>
      <th>
        <p>Description</p>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td label="Setting value"><span>Keyword</span></td>
      <td label="Description"><span>Use the swap-target keyword to indicate the game you want to swap to.</span></td>
    </tr>
    <tr>
      <td label="Setting value"><span>Back to previous</span></td>
      <td label="Description"><span>If a game has been swapped to with the Swap-Game Nodon, this will swap back one previous game.<br />At other times, this will have no effect.<br />You can go back to a maximum of 64 previous games. If you swap to a new game 64 or more times, previous games will be forgotten, starting with the earliest.</span></td>
    </tr>
  </tbody>
</table>
<h2>Swap-Target Keyword</h2>
<p>Use the keyboard to enter a keyword for the swap target. You can use a maximum of 32 characters.<br /><br />The Game Keyword option in the target game's Swap-Game Nodon should match the Swap-Target Keyword option in the current game.<br /><br />If a game with a matching keyword is found, it will swap to that game.<br />If multiple games with matching keywords are found, it will prioritize games created by the same programmer, starting with the oldest.<br />If no games with matching keywords are found, then the swap will not occur.</p>
<h2>Game Keyword</h2>
<p>Use the keyboard to enter a keyword for the current game. You can use a maximum of 32 characters.<br /><br />Multiple Swap-Game Nodon in the same program must share the same keyword. Changing the settings of one Swap-Game Nodon will automatically change the settings in the others.</p>
<h2>Transition Appearance</h2>
<p>Specifies the appearance of the game transition.</p>
<table class="wrapped">
  <colgroup>
    <col />
    <col />
  </colgroup>
  <thead>
    <tr>
      <th>
        <p>Setting value</p>
      </th>
      <th>
        <p>Description</p>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td label="Setting value"><span>With title</span></td>
      <td label="Description"><span>Displays the new game's title when swapping.</span></td>
    </tr>
    <tr>
      <td label="Setting value"><span>Without title</span></td>
      <td label="Description"><span>Doesn't display the game's title when swapping,<br />instead displaying only a black background.</span></td>
    </tr>
  </tbody>
</table>
<h1>Other</h1>
<p>You can call up to eight Swap-Game Nodon per game.</p>