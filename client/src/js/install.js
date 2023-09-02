const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    // Prevent the default browser prompt
    event.preventDefault();
    // Store the event for later use
    deferredPrompt = event;

  // Show your custom install button (e.g., butInstall)
  butInstall.style.display = 'block';
});

butInstall.addEventListener('click', async () => {
    if (deferredPrompt) {
        // Show the browser's install prompt
        deferredPrompt.prompt();
  
        // Wait for the user to respond to the prompt
        const choiceResult = await deferredPrompt.userChoice;
  
        // Check if the user accepted the installation
        if (choiceResult.outcome === 'accepted') {
            console.log('User accepted the PWA installation');
        } else {
            console.log('User declined the PWA installation');
        }
    
        // Clear the deferredPrompt variable
        deferredPrompt = null;
    
        // Hiding custom install button
        butInstall.style.display = 'none';
    }
});

// Add an event handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    console.log('App installed:', event);
  });
