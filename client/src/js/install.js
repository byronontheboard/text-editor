const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    // Prevent the default browser install prompt
    event.preventDefault();
    
    // Store the event for later use
    let deferredPrompt = event;

    // Show your custom install button or element (e.g., `butInstall`)
    butInstall.style.display = 'block';

    // TODO: Implement a click event handler on the `butInstall` element
    butInstall.addEventListener('click', () => {
    // Show the browser's install prompt when the custom button is clicked
    deferredPrompt.prompt();

    // This waits for the user's choice
    deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
            // Tracking the installation here if needed
            console.log('User accepted the PWA installation');
        } else {
            // Handles cases where the user declined the installation
            console.log('User dismissed the PWA installation');
        }

      // Reset the deferredPrompt variable
      deferredPrompt = null;
    });

    // Hide the custom install button
    butInstall.style.display = 'none';
    });
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    console.log('PWA was installed');
});