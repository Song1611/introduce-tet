function initSearch() {
    const searchInput = document.getElementById('navbar-search');
    const searchResults = document.getElementById('search-results');

    if (!searchInput || !searchResults) return;

    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase().trim();
        if (query.length < 2) {
            searchResults.classList.remove('active');
            return;
        }

        const matches = [];
        const categories = ['features', 'foods', 'activities'];
        
        categories.forEach(cat => {
            if (tetData[cat]) {
                const categoryLabel = getCategoryLabel(cat).toLowerCase();
                tetData[cat].forEach((item, index) => {
                    const title = (item.title || item.name).toLowerCase();
                    if (title.includes(query) || categoryLabel.includes(query)) {
                        matches.push({ ...item, type: cat, id: index });
                    }
                });
            }
        });

        displaySearchResults(matches.slice(0, 5));
    });

    // Close search on click outside
    document.addEventListener('click', (e) => {
        if (!searchInput.contains(e.target) && !searchResults.contains(e.target)) {
            searchResults.classList.remove('active');
        }
    });

    // Prevent search form submission if it's in a form
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') e.preventDefault();
    });
}

function displaySearchResults(matches) {
    const searchResults = document.getElementById('search-results');
    if (!searchResults) return;

    if (matches.length === 0) {
        searchResults.innerHTML = `
            <div class="search-no-results">
                <i class="fa-solid fa-magnifying-glass"></i>
                <p>Không tìm thấy kết quả nào phù hợp.</p>
            </div>`;
    } else {
        searchResults.innerHTML = matches.map(match => {
            const description = match.description || match.paragraph || match.text || '';
            const excerpt = description.length > 80 ? description.substring(0, 80) + '...' : description;
            
            return `
                <div class="search-result-item" onclick="window.location.href='detail.html?type=${match.type}&id=${match.id}'">
                    <div class="search-result-thumb">
                        <img src="${match.image || match.img}" alt="${match.title || match.name}">
                    </div>
                    <div class="search-result-info">
                        <h4>${match.title || match.name}</h4>
                        <p class="search-result-excerpt">${excerpt}</p>
                    </div>
                </div>
            `;
        }).join('');
    }
    searchResults.classList.add('active');
}

function getCategoryLabel(type) {
    const labels = {
        'features': 'Đặc sắc Tết',
        'foods': 'Ẩm thực Tết',
        'activities': 'Hoạt động Tết'
    };
    return labels[type] || type;
}
