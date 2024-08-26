function toggleAllCheckboxes(checkbox) {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(cb => {
        if (cb.id !== 'cbx-all') {
            cb.checked = checkbox.checked;
        }
    });
}