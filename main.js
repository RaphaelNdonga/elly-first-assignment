document.addEventListener("DOMContentLoaded", function () {
    let labels = document.querySelectorAll("label[for^='cbx-']");
    labels.forEach(label => {
        label.addEventListener("click", function () {
            let checkbox = document.getElementById(this.getAttribute('for'));
            if (!checkbox.checked) {
                this.style.animation = 'checky 1s ease';
                this.style.backgroundColor = '#2469F6';
                console.log("checked");
            }
            if (checkbox.checked) {
                this.style.animation = 'checkyReverse 1s ease';
                this.style.backgroundColor = 'white';
            }
        });
    });
});