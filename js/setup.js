window.addEventListener('DOMContentLoaded', () => {
    const headerContainer = document.getElementById('header-container');
    
    if (headerContainer) {
        fetch('/common/header.html')
            .then(response => response.text())
            .then(data => {
                headerContainer.innerHTML = data;
            })
            .catch(error => console.error('ヘッダーの読み込みに失敗しました:', error));
    }

    const footerContainer = document.getElementById('footer-container');
    
    if (footerContainer) {
        fetch('/common/footer.html')
            .then(response => response.text())
            .then(data => {
                footerContainer.innerHTML = data;
            })
            .catch(error => console.error('フッターの読み込みに失敗しました:', error));
    }
});