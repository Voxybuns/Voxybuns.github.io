---
title: Swap-Game Nodon
layout: nodopedia/entry
category: output
quote: Nothing like a change of scene to freshen things up!
---

# Port
## Input
<div class="table-wrapper"><table><thead><tr><th>Port name</th><th>Port function</th><th>Input operation</th></tr></thead><tbody><tr><td>Swap</td><td>When a value other than 0.00 is received at this port, the current game will end and another game will start up, selected according to the Swap Type settings.<br>When the new game starts up, the received signal will be sent as output from the Swap-Game Nodon in the new game.</td><td>Determines whether a signal is or is not equal to 0.00</td></tr></tbody></table></div>

## Output
<div class="table-wrapper"><table><thead><tr><th>Port name</th><th>Port function</th><th>Output value</th></tr></thead><tbody><tr><td>Swap from value</td><td>When transferring from another game, the signal received at the Swap port of the Swap-Game Nodon in the original game will be sent as output from this port.<br>At all other times, it'll output 0.00.</td><td>Accepts any number</td></tr></tbody></table></div>

## Connection
None

# Settings
## Swap Type
Specifies the method used to determine which game to swap to.

<div class="table-wrapper"><table><thead><tr><th>Setting value</th><th>Description</th></tr></thead><tbody><tr><td>Keyword</td><td>Use the swap-target keyword to indicate the game you want to swap to.</td></tr><tr><td>Back to previous</td><td>If a game has been swapped to with the Swap-Game Nodon, this will swap back one previous game.<br>At other times, this will have no effect.<br>You can go back to a maximum of 64 previous games. If you swap to a new game 64 or more times, previous games will be forgotten, starting with the earliest.</td></tr></tbody></table></div>

## Swap-Target Keyword
Use the keyboard to enter a keyword for the swap target. You can use a maximum of 32 characters.

The Game Keyword option in the target game's Swap-Game Nodon should match the Swap-Target Keyword option in the current game.

If a game with a matching keyword is found, it will swap to that game.<br>
If multiple games with matching keywords are found, it will prioritize games created by the same programmer, starting with the oldest.<br>
If no games with matching keywords are found, then the swap will not occur.

## Game Keyword
Use the keyboard to enter a keyword for the current game. You can use a maximum of 32 characters.

Multiple Swap-Game Nodon in the same program must share the same keyword. Changing the settings of one Swap-Game Nodon will automatically change the settings in the others.

## Transition Appearance
Specifies the appearance of the game transition.

<div class="table-wrapper"><table><thead><tr><th>Setting value</th><th>Description</th></tr></thead><tbody><tr><td>With title</td><td>Displays the new game's title when swapping.</td></tr><tr><td>Without title</td><td>Doesn't display the game's title when swapping,<br>instead displaying only a black background.</td></tr></tbody></table></div>

# Other
You can call up to eight Swap-Game Nodon per game.