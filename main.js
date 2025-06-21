  // Inizializza xterm.js
    const term = new Terminal({
      cursorBlink: true,
      cols: 80,
      rows: 20,
      theme: { background: "#1e1e1e", foreground: "#fff" }
    });
    const terminalElement = document.getElementById('terminal');
    const terminalContainer = document.getElementById('terminalContainer');
    const saveGifBtn = document.getElementById('saveGifBtn');
    
    // Funzione di delay
    const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
    
    // Variabili per la registrazione dei frame
    let frames = [];
    let captureInterval;
    
    // Avvia la registrazione: catturiamo uno screenshot dell'elemento terminal ogni 500ms
    function startRecording() {
      frames = [];
      captureInterval = setInterval(() => {
        html2canvas(terminalElement).then(canvas => {
          frames.push(canvas.toDataURL());
        }).catch(err => console.error(err));
      }, 500);
    }
    
    // Ferma la registrazione
    function stopRecording() {
      clearInterval(captureInterval);
    }
    
    // Genera la GIF (con loop infinito) alla fine della sessione
    function generateGIF() {
      gifshot.createGIF({
        images: frames,
        interval: 0.5, // intervallo (in secondi) fra i frame
        gifWidth: terminalElement.clientWidth,
        gifHeight: terminalElement.clientHeight,
        numFrames: frames.length,
        repeat: 0 // ripete in loop
      }, function(obj) {
        if (!obj.error) {
          const image = obj.image;
          document.getElementById('gifPreview').innerHTML = `<h3>GIF Generata (Loop):</h3><img src="${image}" alt="Terminal GIF">`;
          // Mostra il bottone per salvare la GIF e implementa il download
          saveGifBtn.style.display = 'inline-block';
          saveGifBtn.onclick = function() {
            const a = document.createElement('a');
            a.href = image;
            a.download = 'terminal-session.gif';
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
          };
        } else {
          alert("Errore nella generazione della GIF");
        }
      });
    }
    
    // Simula la sessione terminale con dati reali da GitHub
    async function runSession(username) {
      term.clear();
      // Avvia la registrazione al momento dell'inizio della sessione
      startRecording();
      
      term.write(`$ echo "Benvenuto, ${username}"\r\n`);
      await delay(700);
      term.write(`Benvenuto, ${username}\r\n\r\n`);
      
      term.write(`$ curl https://api.github.com/users/${username}\r\n`);
      await delay(900);
      
      // Richiama l'API di GitHub per ottenere i dati reali
      try {
        const response = await fetch(`https://api.github.com/users/${username}`);
        if (!response.ok) throw new Error("Errore nel recupero dati");
        const data = await response.json();
        // Format JSON "pretty"
        const jsonData = JSON.stringify(data, null, 2);
        const lines = jsonData.split('\n');
        for (let line of lines) {
          term.write(line + "\r\n");
          await delay(300);
        }
      } catch (e) {
        term.write("Errore: impossibile recuperare i dati da GitHub\r\n");
      }
      
      term.write(`\r\n$ exit\r\n`);
      await delay(500);
      term.write("Sessione terminata.\r\n");
      
      // Termina la registrazione e genera la GIF automaticamente
      stopRecording();
      generateGIF();
    }
    
    // Avvia la sessione al click del bottone
    document.getElementById('startSessionBtn').addEventListener('click', () => {
      const username = document.getElementById('githubUser').value.trim();
      if (!username) {
        alert("Inserisci un username GitHub valido.");
        return;
      }
      // Nascondi il form e mostra il terminale
      document.getElementById('userInput').style.display = 'none';
      terminalContainer.style.display = 'block';
      term.open(terminalElement);
      runSession(username);
    });
