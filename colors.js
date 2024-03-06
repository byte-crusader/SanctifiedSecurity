const changeButton = document.getElementById("changeColors")
let isColorsSet1 = localStorage.getItem("isColorsSet1") === "true";

function toggleColors() {

    let root = document.documentElement;

    if (isColorsSet1) {
// Original Colors
        root.style.setProperty('--border-type', '2px double #00FF00');
        root.style.setProperty('--color-type', '#00FF00');
        root.style.setProperty('--background-color', 'black');
        root.style.setProperty('--primary-text-color', 'var(--color-type)');
        root.style.setProperty('--secondary-text-color', 'white');
        root.style.setProperty('--link-color', '#00FF00');
        root.style.setProperty('--link-hover-color', 'greenyellow');
    } else {
        root.style.setProperty('--border-type', '2px double #CCCCCC');
        root.style.setProperty('--color-type', '#0078D4'); // Modern blue
        root.style.setProperty('--background-color', '#F3F2F1'); // Light grey
        root.style.setProperty('--primary-text-color', 'var(--color-type)');
        root.style.setProperty('--secondary-text-color', '#333333'); // Dark grey
        root.style.setProperty('--link-color', '#0078D4'); // Modern blue
        root.style.setProperty('--link-hover-color', '#004578'); // Darker blue
        root.style.setProperty('--shadow-effect', 'rgba(173, 216, 230, 0.5)'); // Darker blue --light-grey: #1a1a1a;
        root.style.setProperty('--light-grey', 'rgba(173, 216, 230, 0.8)');
}
}
toggleColors()


changeButton.addEventListener('click', function() {
    isColorsSet1 = !isColorsSet1;
    toggleColors()

    localStorage.setItem("isColorsSet1", isColorsSet1);
});


