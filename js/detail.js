document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const type = urlParams.get('type');
    const id = parseInt(urlParams.get('id'));

    if (type && !isNaN(id) && tetData[type] && tetData[type][id]) {
        const item = tetData[type][id];
        populateDetailMagazine(item, type, id);
        initSearch(); // Initialize search functionality
    } else {
        window.location.href = "index.html";
    }
});

function populateDetailMagazine(item, type, currentId) {
    // 1. Populate Featured Content
    const mainImg = document.getElementById('detail-main-img');
    const title = document.getElementById('detail-title');
    const description = document.getElementById('detail-description');
    const categoryBadge = document.getElementById('detail-category');
    const typeText = document.getElementById('detail-type-text');

    mainImg.src = item.image || item.img;
    title.innerText = item.title || item.name;
    description.innerText = item.detailDescription || "Nội dung chi tiết đang được cập nhật...";
    
    // Map internal type to display text
    const typeMap = {
        'features': 'Đặc sắc Tết',
        'foods': 'Ẩm thực Tết',
        'activities': 'Hoạt động Tết'
    };
    categoryBadge.innerText = typeMap[type];
    typeText.innerHTML = `<i class="fa-solid fa-folder"></i> ${typeMap[type]}`;

    // 2. Populate Sidebar (Related items from same category)
    const sidebarList = document.getElementById('sidebar-list');
    sidebarList.innerHTML = '';
    
    const relatedItems = tetData[type].filter((_, index) => index !== currentId).slice(0, 3);
    relatedItems.forEach((rel, idx) => {
        const originalIndex = tetData[type].findIndex(i => i === rel);
        const div = document.createElement('div');
        div.className = 'sidebar-item';
        div.onclick = () => window.location.href = `detail.html?type=${type}&id=${originalIndex}`;
        div.innerHTML = `
            <div class="sidebar-thumb">
                <img src="${rel.image || rel.img}" alt="${rel.title || rel.name}">
            </div>
            <div class="sidebar-info">
                <h4>${rel.title || rel.name}</h4>
                <span><i class="fa-solid fa-clock"></i> 6 phút đọc</span>
            </div>
        `;
        sidebarList.appendChild(div);
    });

    // 3. Populate Explore More (Random items from other categories)
    const trendingGrid = document.getElementById('trending-grid');
    trendingGrid.innerHTML = '';

    const otherTypes = Object.keys(typeMap).filter(t => t !== type);
    const exploreItems = [];
    
    otherTypes.forEach(t => {
        const randomItem = tetData[t][Math.floor(Math.random() * tetData[t].length)];
        exploreItems.push({ item: randomItem, type: t });
    });

    // Fill the rest to reach 3 if possible
    if (exploreItems.length < 3) {
        const fallbackType = otherTypes[0];
        const secondItem = tetData[fallbackType].find(i => !exploreItems.some(ei => ei.item === i));
        if (secondItem) exploreItems.push({ item: secondItem, type: fallbackType });
    }

    exploreItems.slice(0, 3).forEach(expl => {
        const originalIndex = tetData[expl.type].findIndex(i => i === expl.item);
        const col = document.createElement('div');
        col.className = 'trending-item-col col-md-4'; // Added trending-item-col for flex layout
        col.innerHTML = `
            <div class="trending-card" onclick="window.location.href='detail.html?type=${expl.type}&id=${originalIndex}'">
                <div class="trending-thumb">
                    <img src="${expl.item.image || expl.item.img}" alt="${expl.item.title || expl.item.name}">
                </div>
                <div class="trending-info">
                    <h3>${expl.item.title || expl.item.name}</h3>
                    <p>${expl.item.text || "Khám phá nét đẹp văn hóa truyền thống Việt Nam..."}</p>
                </div>
            </div>
        `;
        trendingGrid.appendChild(col);
    });

    window.scrollTo(0, 0);
}
