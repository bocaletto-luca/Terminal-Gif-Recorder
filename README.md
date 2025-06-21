# Terminal GIF Recorder
#### Author: Bocaletto Luca 

Terminal GIF Recorder is a fully responsive web application that simulates a terminal session to fetch live GitHub data for any entered username. The app automatically records the entire terminal session—starting from its launch until the simulated commands conclude—and generates an animated, looping GIF of the session. No backend is required; everything runs directly in your browser.

## Features

- **Live GitHub Data:** Automatically retrieves your GitHub profile data via the GitHub API.
- **Terminal Simulation:** Emulates a realistic terminal session using [xterm.js](https://xtermjs.org/).
- **Automatic GIF Recording:** Screenshots are captured throughout the session (using [html2canvas](https://html2canvas.hertzen.com/)) and compiled into a looping animated GIF with [gifshot](https://yahoo.github.io/gifshot/).
- **Responsive Design:** Fully optimized for both desktop and mobile views.
- **Downloadable Output:** Save your terminal session as a GIF with just one click.

## Live Demo

Check out the live demo on GitHub Pages:  
[https://bocaletto-luca.github.io/terminal-gif-recorder](https://bocaletto-luca.github.io/terminal-gif-recorder)  
*(Update the URL if needed.)*


![terminal-session](https://github.com/user-attachments/assets/4d55a36b-bdd8-4c2a-8bb2-40d63a6f132f)

## Installation

1. **Clone the Repository:**


       git clone https://github.com/bocaletto-luca/terminal-gif-recorder.git

       Open the App:

       Open index.html in your preferred web browser. Alternatively, deploy the project to GitHub Pages for a live    demo.

## How It Works

    Enter Your GitHub Username: When you open the app, you'll be prompted to enter your GitHub username.

    Simulated Terminal Session: Once the session starts, the app:

        Displays a welcome message.

        Executes a simulated curl command to retrieve your GitHub data.

        Outputs the real API response (formatted as JSON) in a terminal-like interface.

    Automatic Recording: The entire terminal output is recorded—from the start of the session until it ends. No start/stop mechanism is needed; the recording runs automatically during the session.

    GIF Generation: As soon as the session ends, the app compiles the captured frames into an animated, looping GIF.

    Save Your GIF: Click the "Save GIF" button to download your recorded terminal session GIF.

## Customization

    Session Simulation: You can modify or extend the terminal simulation by adjusting the scripted commands and delays within the index.html file.

    Capture Settings: Adjust the capture interval or styling details to fine-tune the GIF generation process.

## Contributing

Contributions are welcome! Please feel free to fork the repository, create a feature branch, and submit a pull request for any improvements or bug fixes.
License

This project is licensed under the GPL.
