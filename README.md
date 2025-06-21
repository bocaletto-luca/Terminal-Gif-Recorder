# Terminal GIF Recorder

Terminal GIF Recorder is a fully responsive web application that simulates a terminal session to fetch live GitHub data for any entered username. The app automatically records the entire terminal session—starting from its launch until the simulated commands conclude—and generates an animated, looping GIF of the session. No backend is required; everything runs directly in your browser.

## Features

- **Live GitHub Data:** Automatically retrieves your GitHub profile data via the GitHub API.
- **Terminal Simulation:** Emulates a realistic terminal session using [xterm.js](https://xtermjs.org/).
- **Automatic GIF Recording:** Screenshots are captured throughout the session (using [html2canvas](https://html2canvas.hertzen.com/)) and compiled into a looping animated GIF with [gifshot](https://yahoo.github.io/gifshot/).
- **Responsive Design:** Fully optimized for both desktop and mobile views.
- **Downloadable Output:** Save your terminal session as a GIF with just one click.

## Demo

Check out the live demo on GitHub Pages:  
[https://bocaletto-luca.github.io/terminal-gif-recorder](https://bocaletto-luca.github.io/terminal-gif-recorder)  
*(Update the URL if needed.)*


![terminal-session](https://github.com/user-attachments/assets/4d55a36b-bdd8-4c2a-8bb2-40d63a6f132f)

## Installation

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/bocaletto-luca/terminal-gif-recorder.git
