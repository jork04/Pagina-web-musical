document.querySelectorAll('.boton-conoceme, .card-productor').forEach(boton => {
    boton.addEventListener('click', () => {
        let modalID = boton.getAttribute('data-modal');
        document.getElementById(modalID).style.display = 'flex';
    });
});

// Cerrar modal
document.querySelectorAll('.close').forEach(btn => {
    btn.addEventListener('click', () => {
        btn.closest('.modal').style.display = 'none';
    });
});


document.querySelectorAll('.modal').forEach(modal => {
    modal.addEventListener('click', (e) => {
        if(e.target === modal){
            modal.style.display = 'none';
        }
        
    });
});

