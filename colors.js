const changeButton = document.getElementById("changeColors");

// Set default to green if nothing in localStorage
let isColorsSet1 = localStorage.getItem("isColorsSet1");
if (isColorsSet1 === null) {
    isColorsSet1 = true;
    localStorage.setItem("isColorsSet1", "true");
} else {
    isColorsSet1 = isColorsSet1 === "true";
}

function toggleColors() {
    let root = document.documentElement;

    if (isColorsSet1) {
        // Green theme
        root.style.setProperty('--border-type', '2px double #00FF00');
        root.style.setProperty('--color-type', '#00FF00');
        root.style.setProperty('--background-color', 'black');
        root.style.setProperty('--primary-text-color', 'var(--color-type)');
        root.style.setProperty('--secondary-text-color', 'white');
        root.style.setProperty('--link-color', '#00FF00');
        root.style.setProperty('--link-hover-color', 'greenyellow');
    } else {
        // Modern blue theme
        root.style.setProperty('--border-type', '2px double #CCCCCC');
        root.style.setProperty('--color-type', '#0078D4');
        root.style.setProperty('--background-color', '#F3F2F1');
        root.style.setProperty('--primary-text-color', 'var(--color-type)');
        root.style.setProperty('--secondary-text-color', '#333333');
        root.style.setProperty('--link-color', '#0078D4');
        root.style.setProperty('--link-hover-color', '#004578');
        root.style.setProperty('--shadow-effect', 'rgba(173, 216, 230, 0.5)');
        root.style.setProperty('--light-grey', 'rgba(173, 216, 230, 0.8)');
    }
}

toggleColors();

changeButton.addEventListener('click', function() {
    isColorsSet1 = !isColorsSet1;
    toggleColors();
    localStorage.setItem("isColorsSet1", isColorsSet1);
});
