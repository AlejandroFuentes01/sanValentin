let noClickCount = 0;

function handleNoClick() {
    noClickCount++;
    const yesBtn = document.getElementById('yesBtn');
    const noBtn = document.getElementById('noBtn');

    // Cambia el texto y escala el botón "Sí"
    switch(noClickCount) {
        case 1:
            yesBtn.textContent = '¿Estás segura?';
            break;
        case 2:
            yesBtn.textContent = 'De verdad, ¿estás segura?';
            break;
        case 3:
            yesBtn.textContent = 'Absolutamente segura';
            break;
        case 4:
            yesBtn.textContent = 'Infinitamente segura';
            break;
        case 5:
            yesBtn.textContent = 'Última oportunidad';
            break;
        case 6:
            yesBtn.textContent = 'Última última oportunidad';
            break;
        default:
            yesBtn.textContent = 'Sí';
    }

    yesBtn.style.transform = `scale(${1 + noClickCount * 0.15})`;

    // Ajusta el margen izquierdo del botón "No" para desplazarlo a la derecha
    noBtn.style.marginLeft = `${noClickCount * 50}px`; // Ajusta este valor según sea necesario
}

document.getElementById('noBtn').addEventListener('click', handleNoClick);
