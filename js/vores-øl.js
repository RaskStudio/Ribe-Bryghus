document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.øludvalg-kort-btn');
    
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const info = this.parentElement.querySelector('.øludvalg-information');
            const h3 = this.querySelector('h3');
            
            if (info.style.display === 'none' || info.style.display === '') {
                info.style.display = 'block';
                h3.textContent = 'Se mindre';
            } else {
                info.style.display = 'none';
                h3.textContent = 'Se mere';
            }
        });
    });
});