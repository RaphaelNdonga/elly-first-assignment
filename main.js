document.addEventListener("DOMContentLoaded", function () {
    let label = document.querySelector("label[for='cbx']");
    label.addEventListener("click", function () {
        if (!cbx.checked) {
            label.style.animation = 'checky 1s ease';
            label.style.backgroundColor = '#2469F6';
        }
        if (cbx.checked) {
            label.style.animation = 'checkyReverse 1s ease';
            label.style.backgroundColor = 'white';
            document.documentElement.style.setProperty('--uncheck-animation', 'tickReverse 1s ease');
        }
    });
});