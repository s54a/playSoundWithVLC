# Play Sound With VLC Media PLayer

## Why I Built this ?

I was building another package called [cliclock](https://www.npmjs.com/package/@s54a/cliclock) and I needed to play sound when the timer ends. So tried to play sound then I played sound but then I failed to stop it.

Then I spent a few days asking ChatGPT for solution and it gave this solution.

I just prompted it.

## Installation

```bash
npm install playsoundwithvlc
```

## How to Use

```js
import { playSound, stopSound } from "playsoundwithvlc";

const filePaths = {
  vlcExePath: "C:\\Program Files\\VideoLAN\\VLC\\vlc.exe",
  audioPath: "C:\\Users\\Sooraj\\Desktop\\audio.mp3",
};

playSound(filePaths.vlcExePath, filePaths.audioPath);

setTimeout(() => {
  stopSound();
}, 5000);
```

## Source Code

```js
import { spawn } from "child_process";

let playerProcess;

// Function to play sound
function playSound(vlcExePath, audioPath) {
  // Spawn the VLC player process
  playerProcess = spawn(vlcExePath, ["--intf", "dummy", audioPath]);
}

// Function to stop sound playback
function stopSound() {
  if (playerProcess) {
    // Send a SIGTERM signal to terminate the process
    playerProcess.kill("SIGTERM");
  }
}

export { playSound, stopSound };
```

## LICENSE

#### MIT

Made By Sooraj Gupta
[Email](soorajgupta00@gmail.com)
[Github](https://github.com/s54a)
