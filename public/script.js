let clickCount = 0;

document.getElementById('longerBox1').addEventListener('click', () => adjustBox(1, 'longer'));
document.getElementById('shorterBox1').addEventListener('click', () => adjustBox(1, 'shorter'));
document.getElementById('longerBox2').addEventListener('click', () => adjustBox(2, 'longer'));
document.getElementById('shorterBox2').addEventListener('click', () => adjustBox(2, 'shorter'));

function adjustBox(boxNumber, action) {
    const box = document.getElementById(`box${boxNumber}`);
    let currentWidth = parseInt(box.style.width) || (boxNumber === 1 ? 100 : 150);

    // Juster etter endring
    if (action === 'longer') {
        currentWidth += 50;
    } else if (action === 'shorter') {
        if (currentWidth > 50) {
            currentWidth -= 50;
        } else {
            alert('Boksen kan ikke bli kortere enn 50px!');
            return;
        }
    }

    // Endre breddene
    box.style.width = currentWidth + 'px';
    box.textContent = `Boks ${boxNumber}: ${currentWidth}px`;

    // Endre farger
    if (currentWidth < 200) {
        box.style.backgroundColor = 'white';
        box.style.color = 'black';
    } else if (currentWidth < 300) {
        box.style.backgroundColor = 'orange';
        box.style.color = 'black';
    } else {
        box.style.backgroundColor = 'red';
        box.style.color = 'white';
    }

    // Oppdatere antall klikk
    clickCount++;
    document.getElementById('clickCount').textContent = clickCount;
}