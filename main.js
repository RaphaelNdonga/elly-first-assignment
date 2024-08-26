function toggleAllCheckboxes(checkbox) {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(cb => {
        if (cb.id !== 'cbx-all') {
            cb.checked = checkbox.checked;
        }
    });
}

function toggleAllCheckbox(checkbox) {
    if (!checkbox.checked) {
        const allCheckbox = document.getElementById('cbx-all');
        allCheckbox.checked = false;
    }
}