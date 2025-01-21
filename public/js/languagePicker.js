document.addEventListener('DOMContentLoaded', () => {
    const languagePicker = document.getElementById('language-picker');
  
    if (languagePicker) {
      languagePicker.addEventListener('change', (event) => {
        const selectedLocale = event.target.value;
  
        // Get the current path and strip out the locale prefix
        const currentPath = window.location.pathname;
        const pathWithoutLocale = currentPath.replace(/^\/[^/]+/, '');
  
        // Construct the new path with the selected locale
        const newPath = `/${selectedLocale}${pathWithoutLocale}`;
  
        // Navigate to the new path
        window.location.href = newPath;
      });
    }
    console.log("languagePicker.js loaded");

  });
  