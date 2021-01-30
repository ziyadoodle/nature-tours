// Function Select Items
const selectElement = (s) => document.querySelector(s);

// Function Open Menu
selectElement('.open').addEventListener('click', () => {
    selectElement('.nav-list').classList.add('active');
});
// Function Close Menu
selectElement('.close').addEventListener('click', () => {
    selectElement('.nav-list').classList.remove('active');
});
