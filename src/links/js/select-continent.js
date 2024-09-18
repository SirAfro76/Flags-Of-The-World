function scriptload() {
    console.log('map.js loaded successfully');
} scriptload();

function redirectToMain() {
    const selectedTables = Array.from(document.querySelectorAll('input[type=checkbox]:checked')).map(cb => cb.value);
    const queryString = new URLSearchParams({ tables: selectedTables }).toString();
    window.location.href = `main.html?${queryString}`;
}