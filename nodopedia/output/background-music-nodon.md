---
layout: entry
title:  "Background-Music Nodon"
category: output
order: 2
quote: Oh yeah, got a Nodopedia to reference, gather some intelligence, raise your experience, get this down to a science!
---
<h1>Port</h1>
<h2>Input</h2>
<table class="wrapped">
  <colgroup> <col /> <col /> <col /> </colgroup>
  <tbody>
    <tr>
      <th>Port name</th>
      <th>Port function</th>
      <th>Input operation</th>
    </tr>
    <tr>
      <td label="Port name"><span>Play</span></td>
      <td label="Port function">
        <p>While this port receives anything but 0.00 as an input, the background music will continue to play.<br />If a value of 0.00 is received, the music will stop. When a value other than 0.00 is received again, the music will start again from the beginning.</p>
      </td>
      <td label="Input operation"><span>Determines whether a signal is or is not equal to 0.00</span></td>
    </tr>
    <tr>
      <td label="Port name"><span>Volume</span></td>
      <td label="Port function">
        <p>Modifies the volume of the music according to the value received at this port.<br />The starting volume is equivalent to a value of 1.00. If 2.00 is received, the volume will double.<br />If nothing is connected to this port, an input value of 1.00 will be assumed.</p>
      </td>
      <td label="Input operation"><span>Restricted to between 0.00 and 2.00</span></td>
    </tr>
    <tr>
      <td label="Port name"><span>Speed</span></td>
      <td label="Port function">
        <p>Changes the speed of the music according to the value received at this port.<br />Values above 0.00 and below 0.25 will be treated as 0.25. If 0.00 is received, the music will stop.<br />If nothing is connected to this port, an input value of 1.00 will be assumed.</p>
      </td>
      <td label="Input operation"><span>Restricted to between 0.00 and 2.00</span></td>
    </tr>
  </tbody>
</table>
<h2>Output</h2>
<p>None</p>
<h2>Connection</h2>
<p>None</p>
<h1>Settings</h1>
<h2>Theme</h2>
<p>Sets the music you want to play.</p>
<h2>Melody</h2>
<p>Choose the melody, from four options.</p>
<h2>Main Accompaniment</h2>
<p>Choose the main accompaniment, from four options.</p>
<h2>Sub Accompaniment</h2>
<p>Choose the sub accompaniment, from four options.</p>
<h2>Rhythm</h2>
<p>Choose the rhythm, from four options.</p>
<h1>BGM List</h1>
<h2>Strolling</h2>
<table class="wrapped bgmnumber">
  <colgroup> <col /> <col /> <col /> <col /> </colgroup>
  <tbody>
    <tr>
      <th>Melody</th>
      <th>Main Accompaniment</th>
      <th>Sub Accompaniment</th>
      <th>Rhythm</th>
    </tr>
    <tr>
      <td label="Melody"><span>Violin</span></td>
      <td label="Main accompaniment"><span>Piano</span></td>
      <td label="Sub accompaniment"><span>Glockenspiel</span></td>
      <td label="Rhythm"><span>Pop</span></td>
    </tr>
    <tr>
      <td label="Melody"><span>Recorder</span></td>
      <td label="Main accompaniment"><span>Acoustic guitar</span></td>
      <td label="Sub accompaniment"><span>Echo synth</span></td>
      <td label="Rhythm"><span>March</span></td>
    </tr>
    <tr>
      <td label="Melody"><span>Bouncing synth</span></td>
      <td label="Main accompaniment"><span>Bell synth</span></td>
      <td label="Sub accompaniment"><span>Retro synth</span></td>
      <td label="Rhythm"><span>Jazz</span></td>
    </tr>
    <tr>
      <td label="Melody"><span>Silent</span></td>
      <td label="Main accompaniment"><span>Silent</span></td>
      <td label="Sub accompaniment"><span>Silent</span></td>
      <td label="Rhythm"><span>Silent</span></td>
    </tr>
  </tbody>
</table>
<h2>Skipping</h2>
<table class="wrapped bgmnumber">
  <colgroup> <col /> <col /> <col /> <col /> </colgroup>
  <tbody>
    <tr>
      <th>Melody</th>
      <th>Main Accompaniment</th>
      <th>Sub Accompaniment</th>
      <th>Rhythm</th>
    </tr>
    <tr>
      <td label="Melody"><span>Clarinet</span></td>
      <td label="Main accompaniment"><span>Banjo</span></td>
      <td label="Sub accompaniment"><span>Playful synth</span></td>
      <td label="Rhythm"><span>Swing</span></td>
    </tr>
    <tr>
      <td label="Melody"><span>Trombone</span></td>
      <td label="Main accompaniment"><span>Guitar and organ</span></td>
      <td label="Sub accompaniment"><span>Synth chime</span></td>
      <td label="Rhythm"><span>Reggae</span></td>
    </tr>
    <tr>
      <td label="Melody"><span>Xylophone</span></td>
      <td label="Main accompaniment"><span>Synth organ</span></td>
      <td label="Sub accompaniment"><span>Toy trumpet</span></td>
      <td label="Rhythm"><span>6/8 march</span></td>
    </tr>
    <tr>
      <td label="Melody"><span>Silent</span></td>
      <td label="Main accompaniment"><span>Silent</span></td>
      <td label="Sub accompaniment"><span>Silent</span></td>
      <td label="Rhythm"><span>Silent</span></td>
    </tr>
  </tbody>
</table>
<h2>Steady</h2>
<table class="wrapped bgmnumber">
  <colgroup> <col /> <col /> <col /> <col /> </colgroup>
  <tbody>
    <tr>
      <th>Melody</th>
      <th>Main Accompaniment</th>
      <th>Sub Accompaniment</th>
      <th>Rhythm</th>
    </tr>
    <tr>
      <td label="Melody"><span>Retro synth</span></td>
      <td label="Main accompaniment"><span>Calypso</span></td>
      <td label="Sub accompaniment"><span>Comical synth</span></td>
      <td label="Rhythm"><span>Chiptune</span></td>
    </tr>
    <tr>
      <td label="Melody"><span>Piano</span></td>
      <td label="Main accompaniment"><span>Acoustic guitar</span></td>
      <td label="Sub accompaniment"><span>Synth pad</span></td>
      <td label="Rhythm"><span>Bossa nova</span></td>
    </tr>
    <tr>
      <td label="Melody"><span>Organ</span></td>
      <td label="Main accompaniment"><span>Wah-wah guitar</span></td>
      <td label="Sub accompaniment"><span>Brass</span></td>
      <td label="Rhythm"><span>Funk</span></td>
    </tr>
    <tr>
      <td label="Melody"><span>Silent</span></td>
      <td label="Main accompaniment"><span>Silent</span></td>
      <td label="Sub accompaniment"><span>Silent</span></td>
      <td label="Rhythm"><span>Silent</span></td>
    </tr>
  </tbody>
</table>
<h2>Sunshine</h2>
<table class="wrapped bgmnumber">
  <colgroup> <col /> <col /> <col /> <col /> </colgroup>
  <tbody>
    <tr>
      <th>Melody</th>
      <th>Main Accompaniment</th>
      <th>Sub Accompaniment</th>
      <th>Rhythm</th>
    </tr>
    <tr>
      <td label="Melody"><span>Pop synth</span></td>
      <td label="Main accompaniment"><span>Reverse organ</span></td>
      <td label="Sub accompaniment"><span>Synth choir</span></td>
      <td label="Rhythm"><span>Pulsing synth</span></td>
    </tr>
    <tr>
      <td label="Melody"><span>Melodica</span></td>
      <td label="Main accompaniment"><span>Acoustic guitar</span></td>
      <td label="Sub accompaniment"><span>Doop-doop</span></td>
      <td label="Rhythm"><span>Country</span></td>
    </tr>
    <tr>
      <td label="Melody"><span>Violin</span></td>
      <td label="Main accompaniment"><span>Lo-fi strings</span></td>
      <td label="Sub accompaniment"><span>Operatic voice</span></td>
      <td label="Rhythm"><span>Cello</span></td>
    </tr>
    <tr>
      <td label="Melody"><span>Silent</span></td>
      <td label="Main accompaniment"><span>Silent</span></td>
      <td label="Sub accompaniment"><span>Silent</span></td>
      <td label="Rhythm"><span>Silent</span></td>
    </tr>
  </tbody>
</table>
<h2>Valor</h2>
<table class="wrapped bgmnumber">
  <colgroup> <col /> <col /> <col /> <col /> </colgroup>
  <tbody>
    <tr>
      <th>Melody</th>
      <th>Main Accompaniment</th>
      <th>Sub Accompaniment</th>
      <th>Rhythm</th>
    </tr>
    <tr>
      <td label="Melody"><span>Trumpet and horn</span></td>
      <td label="Main accompaniment"><span>Trombone</span></td>
      <td label="Sub accompaniment"><span>Strings</span></td>
      <td label="Rhythm"><span>Tuba and percussion</span></td>
    </tr>
    <tr>
      <td label="Melody"><span>Lead guitar</span></td>
      <td label="Main accompaniment"><span>Rhythm guitar</span></td>
      <td label="Sub accompaniment"><span>Organ</span></td>
      <td label="Rhythm"><span>Rock</span></td>
    </tr>
    <tr>
      <td label="Melody"><span>Sine wave</span></td>
      <td label="Main accompaniment"><span>Saw wave</span></td>
      <td label="Sub accompaniment"><span>Triangle wave</span></td>
      <td label="Rhythm"><span>Noise</span></td>
    </tr>
    <tr>
      <td label="Melody"><span>Silent</span></td>
      <td label="Main accompaniment"><span>Silent</span></td>
      <td label="Sub accompaniment"><span>Silent</span></td>
      <td label="Rhythm"><span>Silent</span></td>
    </tr>
  </tbody>
</table>
<h2>Tension</h2>
<table class="wrapped bgmnumber">
  <colgroup> <col /> <col /> <col /> <col /> </colgroup>
  <tbody>
    <tr>
      <th>Melody</th>
      <th>Main Accompaniment</th>
      <th>Sub Accompaniment</th>
      <th>Rhythm</th>
    </tr>
    <tr>
      <td label="Melody"><span>Creepy synth</span></td>
      <td label="Main accompaniment"><span>Pizzicato</span></td>
      <td label="Sub accompaniment"><span>Creepy chorus</span></td>
      <td label="Rhythm"><span>Techno</span></td>
    </tr>
    <tr>
      <td label="Melody"><span>Wind and xylophone</span></td>
      <td label="Main accompaniment"><span>Strings</span></td>
      <td label="Sub accompaniment"><span>Reverse synth</span></td>
      <td label="Rhythm"><span>Percussion</span></td>
    </tr>
    <tr>
      <td label="Melody"><span>Brass melody</span></td>
      <td label="Main accompaniment"><span>Chaotic strings</span></td>
      <td label="Sub accompaniment"><span>Chaotic brass</span></td>
      <td label="Rhythm"><span>Chaotic percussion</span></td>
    </tr>
    <tr>
      <td label="Melody"><span>Silent</span></td>
      <td label="Main accompaniment"><span>Silent</span></td>
      <td label="Sub accompaniment"><span>Silent</span></td>
      <td label="Rhythm"><span>Silent</span></td>
    </tr>
  </tbody>
</table>
<h2>Excited</h2>
<table class="wrapped bgmnumber">
  <colgroup> <col /> <col /> <col /> <col /> </colgroup>
  <tbody>
    <tr>
      <th>Melody</th>
      <th>Main Accompaniment</th>
      <th>Sub Accompaniment</th>
      <th>Rhythm</th>
    </tr>
    <tr>
      <td label="Melody"><span>Saw wave</span></td>
      <td label="Main accompaniment"><span>Sine lead</span></td>
      <td label="Sub accompaniment"><span>Synth Brass</span></td>
      <td label="Rhythm"><span>Funk</span></td>
    </tr>
    <tr>
      <td label="Melody"><span>Square wave</span></td>
      <td label="Main accompaniment"><span>Synth and bells</span></td>
      <td label="Sub accompaniment"><span>Arpeggiator</span></td>
      <td label="Rhythm"><span>Techno</span></td>
    </tr>
    <tr>
      <td label="Melody"><span>Accordion</span></td>
      <td label="Main accompaniment"><span>Piano</span></td>
      <td label="Sub accompaniment"><span>Delay guitar</span></td>
      <td label="Rhythm"><span>Soft rock</span></td>
    </tr>
    <tr>
      <td label="Melody"><span>Silent</span></td>
      <td label="Main accompaniment"><span>Silent</span></td>
      <td label="Sub accompaniment"><span>Silent</span></td>
      <td label="Rhythm"><span>Silent</span></td>
    </tr>
  </tbody>
</table>
<h2>Mad dash</h2>
<table class="wrapped bgmnumber">
  <colgroup> <col /> <col /> <col /> <col /> </colgroup>
  <tbody>
    <tr>
      <th>Melody</th>
      <th>Main Accompaniment</th>
      <th>Sub Accompaniment</th>
      <th>Rhythm</th>
    </tr>
    <tr>
      <td label="Melody"><span>Strings and glock</span></td>
      <td label="Main accompaniment"><span>Comical synth</span></td>
      <td label="Sub accompaniment"><span>Military bugle</span></td>
      <td label="Rhythm"><span>Timpani</span></td>
    </tr>
    <tr>
      <td label="Melody"><span>Lead synth</span></td>
      <td label="Main accompaniment"><span>Electric piano</span></td>
      <td label="Sub accompaniment"><span>Acoustic guitar</span></td>
      <td label="Rhythm"><span>Drum and bass</span></td>
    </tr>
    <tr>
      <td label="Melody"><span>Odd voice synth</span></td>
      <td label="Main accompaniment"><span>Banjo</span></td>
      <td label="Sub accompaniment"><span>Orchestra hit</span></td>
      <td label="Rhythm"><span>Hard drum and bass</span></td>
    </tr>
    <tr>
      <td label="Melody"><span>Silent</span></td>
      <td label="Main accompaniment"><span>Silent</span></td>
      <td label="Sub accompaniment"><span>Silent</span></td>
      <td label="Rhythm"><span>Silent</span></td>
    </tr>
  </tbody>
</table>
<h2>Party time</h2>
<table class="wrapped bgmnumber">
  <colgroup> <col /> <col /> <col /> <col /> </colgroup>
  <tbody>
    <tr>
      <th>Melody</th>
      <th>Main Accompaniment</th>
      <th>Sub Accompaniment</th>
      <th>Rhythm</th>
    </tr>
    <tr>
      <td label="Melody"><span>Accordion</span></td>
      <td label="Main accompaniment"><span>Electric guitar</span></td>
      <td label="Sub accompaniment"><span>Clarinet</span></td>
      <td label="Rhythm"><span>Polka</span></td>
    </tr>
    <tr>
      <td label="Melody"><span>Flute and violin</span></td>
      <td label="Main accompaniment"><span>Acoustic guitar</span></td>
      <td label="Sub accompaniment"><span>Piano</span></td>
      <td label="Rhythm"><span>Irish</span></td>
    </tr>
    <tr>
      <td label="Melody"><span>Shinobue</span></td>
      <td label="Main accompaniment"><span>Shamisen</span></td>
      <td label="Sub accompaniment"><span>Whistle</span></td>
      <td label="Rhythm"><span>Taiko</span></td>
    </tr>
    <tr>
      <td label="Melody"><span>Silent</span></td>
      <td label="Main accompaniment"><span>Silent</span></td>
      <td label="Sub accompaniment"><span>Silent</span></td>
      <td label="Rhythm"><span>Silent</span></td>
    </tr>
  </tbody>
</table>
<h2>Rivalry</h2>
<table class="wrapped bgmnumber">
  <colgroup> <col /> <col /> <col /> <col /> </colgroup>
  <tbody>
    <tr>
      <th>Melody</th>
      <th>Main Accompaniment</th>
      <th>Sub Accompaniment</th>
      <th>Rhythm</th>
    </tr>
    <tr>
      <td label="Melody"><span>Lead synth</span></td>
      <td label="Main accompaniment"><span>Organ</span></td>
      <td label="Sub accompaniment"><span>Trance synth</span></td>
      <td label="Rhythm"><span>Eurobeat</span></td>
    </tr>
    <tr>
      <td label="Melody"><span>16-bit brass</span></td>
      <td label="Main accompaniment"><span>16-bit guitar</span></td>
      <td label="Sub accompaniment"><span>16-bit orchestra hit</span></td>
      <td label="Rhythm"><span>16-bit rock</span></td>
    </tr>
    <tr>
      <td label="Melody"><span>Melodic brass</span></td>
      <td label="Main accompaniment"><span>Horn</span></td>
      <td label="Sub accompaniment"><span>Clarinet</span></td>
      <td label="Rhythm"><span>March</span></td>
    </tr>
    <tr>
      <td label="Melody"><span>Silent</span></td>
      <td label="Main accompaniment"><span>Silent</span></td>
      <td label="Sub accompaniment"><span>Silent</span></td>
      <td label="Rhythm"><span>Silent</span></td>
    </tr>
  </tbody>
</table>
<h2>Ambient</h2>
<table class="wrapped bgmnumber">
  <colgroup> <col /> <col /> <col /> <col /> </colgroup>
  <tbody>
    <tr>
      <th>Melody</th>
      <th>Main Accompaniment</th>
      <th>Sub Accompaniment</th>
      <th>Rhythm</th>
    </tr>
    <tr>
      <td label="Melody"><span>Birds</span></td>
      <td label="Main accompaniment"><span>Gentle breeze</span></td>
      <td label="Sub accompaniment"><span>Labo</span></td>
      <td label="Rhythm"><span>Dripping water</span></td>
    </tr>
    <tr>
      <td label="Melody"><span>Insects</span></td>
      <td label="Main accompaniment"><span>Strong wind</span></td>
      <td label="Sub accompaniment"><span>City</span></td>
      <td label="Rhythm"><span>Horror</span></td>
    </tr>
    <tr>
      <td label="Melody"><span>Crowd</span></td>
      <td label="Main accompaniment"><span>Rain and thunder</span></td>
      <td label="Sub accompaniment"><span>Ocean</span></td>
      <td label="Rhythm"><span>Outer space</span></td>
    </tr>
    <tr>
      <td label="Melody"><span>Silent</span></td>
      <td label="Main accompaniment"><span>Silent</span></td>
      <td label="Sub accompaniment"><span>Silent</span></td>
      <td label="Rhythm"><span>Silent</span></td>
    </tr>
  </tbody>
</table>
<h1>Other</h1>
<p>You can call up to four Background-Music Nodon per game.</p>