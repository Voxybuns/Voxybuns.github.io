---
layout: entry-quoteless
title:  "About Properties"
category: tips
order: 4
---
<h1>What Are Properties?</h1>
<p>Properties are a group of settings that apply to Object Nodon, i.e., Nodon that produce physical objects on the game screen.<br />Properties define how an object will behave with the game's world.</p>
<h2>Visible</h2>
<p>If this property is enabled, it'll display on the game screen.<br />If it's disabled, the object won't be visible.<br />If it crashes into something or is destroyed while invisible, it won't produce the breaking effect or make a sound.</p>
<h2>Solid</h2>
<p>If this property is enabled, the object will collide with other objects and the world itself.<br />If it's disabled, then it won't collide with them.</p>
<h2>Move</h2>
<p>If this property is enabled, the object will be able to move and will be affected by the world's gravity and the force absorbed from collisions with other objects.<br />If it's disabled, then it won't be able to move.<br />Note:<br />- If "Can be grabbed" is enabled, it'll be possible to grab and move an object, even if this property is disabled.<br />- If this property is enabled, you won't be able to place it lower than the world's floor. However, if it's disabled, you will be able to place it lower.</p>
<h2>Destructible</h2>
<p>If this property is enabled, the object will break when it collides with other objects that have the Destructive property enabled.<br />If it's disabled, it won't break.<br />Note:<br />- If the object's speed exceeds the World Nodon's Object-Destruction Speed, the object will break.<br />Touch "..." to open up the detailed settings and set which objects can break this one.<br />- The Destroy Object setting determines whether or not the object can be broken by the Destroy-Object Nodon.</p>
<h2>Destructive</h2>
<p>If this property is enabled, it will break objects that it collides with if those objects have the Destructible property enabled.<br />If it's disabled, it won't break other objects.<br />Touch "..." to open up the detailed settings. You'll be able to determine which objects can be broken by this one.<br /></p>
<h2>Other </h2>
<h3>Play Sound When Hit/Destroyed?</h3>
<p>If this property is set to Play, it'll play a sound when it collides with other objects or if the object itself breaks.<br />If it's set to Don't play, it won't play a sound.</p>
<h3>Can Be Grabbed by Hand Nodon?</h3>
<p>If this property is set to Can be grabbed, it'll be possible to grab the object with the Hand Nodon.<br />If it's set to Can't be grabbed, it won't be possible to grab.</p>
<h1>Hint</h1>
<p>Each property can be enabled or disabled individually, so it's possible to have objects that are, for example, visible but not solid, or immovable but grabbable.</p>