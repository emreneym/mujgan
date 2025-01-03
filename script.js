document.addEventListener('DOMContentLoaded', () => {
    const categories = document.querySelectorAll('.category');
    const contentColumn = document.getElementById('content-column');
    const imageColumn = document.getElementById('image-column');

    // Menü kategorileri ve içerikleri
    const contents = {
        icecekler: ['Çay', 'Türk Kahvesi', 'Limonata', 'Kola', 'Portakal Suyu'],
        tatlilar: ['Baklava', 'Sütlaç', 'Profiterol', 'Cheesecake', 'Pasta'],
        anaYemekler: ['İskender', 'Et Döner', 'Tavuk Şiş', 'Karnıyarık', 'Mantı'],
        salatalar: ['Çoban Salata', 'Sezar Salata', 'Mevsim Salata', 'Patates Salatası', 'Yoğurtlu Semizotu'],
        corbalar: ['Mercimek Çorbası', 'Ezogelin Çorbası', 'Tavuk Suyu Çorbası', 'Domates Çorbası', 'Brokoli Çorbası'],
        atistirmaliklar: ['Cips', 'Çerez', 'Mozzarella Stick', 'Soğan Halkası', 'Mini Sandviç']
    };

    // Kategoriye tıklama işlemi
    categories.forEach(category => {
        category.addEventListener('click', () => {
            const categoryName = category.dataset.category;
            const items = contents[categoryName];

            // Orta sütunda içerikleri göster
            contentColumn.innerHTML = `<h2>${category.textContent}</h2>`;
            items.forEach(item => {
                const contentItem = document.createElement('div');
                contentItem.className = 'content-item';
                contentItem.textContent = item;
                contentColumn.appendChild(contentItem);

                // İçeriğe tıklayınca sağ sütunda placeholder kutusu güncelle
                contentItem.addEventListener('click', () => {
                    imageColumn.innerHTML = `
                        <h2>${item} Resmi</h2>
                        <div class="image-placeholder">
                            <p>Burada "${item}" resmi olacak</p>
                        </div>
                    `;
                });
            });
        });
    });
});
