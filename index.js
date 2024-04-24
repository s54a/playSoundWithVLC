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
