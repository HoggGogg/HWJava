const items = Array.from({ length: 100 }, (_, i) => ({ id: i + 1, name: `Object ${i + 1}` }));
const pageSize = 10;
let currentPage = 0;

const listElement = document.getElementById('list');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

function renderPage() {
    listElement.innerHTML = '';

    const start = currentPage * pageSize;
    const end = start + pageSize;
    const pageItems = items.slice(start, end);

    pageItems.forEach(item => {
        const div = document.createElement('div');
        div.className = 'item';
        div.textContent = `${item.id}: ${item.name}`;
        listElement.appendChild(div);
    });

    prevBtn.disabled = currentPage === 0;
    nextBtn.disabled = end >= items.length;
}

prevBtn.addEventListener('click', () => {
    if (currentPage > 0) {
        currentPage--;
        renderPage();
    }
});

nextBtn.addEventListener('click', () => {
    if ((currentPage + 1) * pageSize < items.length) {
        currentPage++;
        renderPage();
    }
});

renderPage();