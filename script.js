// Sayfa yüklendiğinde çalışacak
document.addEventListener('DOMContentLoaded', () => {
    // Tüm kategori başlıklarını seç
    const categories = document.querySelectorAll('.category h2');
    
    categories.forEach(category => {
        // Başlığa tıklanınca menüyü aç/kapat
        category.addEventListener('click', () => {
            const menuItems = category.nextElementSibling;

            // Eğer menü açık ise kapat, kapalı ise aç
            if (menuItems.style.display === 'block') {
                menuItems.style.display = 'none';  // Menü kapat
            } else {
                menuItems.style.display = 'block';  // Menü aç
            }
        });
    });
});

