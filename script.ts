function clickButton(secId: string) {
    const sections = document.querySelectorAll('.section');
    const targetSection = document.getElementById(secId);
    if (targetSection) {
        if (targetSection.classList.contains('active')) {
            targetSection.classList.remove('active');
        } else {
            sections.forEach((sec) => {
                sec.classList.remove(secId);
            });
            targetSection.classList.add('active');
        }
    } else {
        console.error(`No section found with ID ${secId}`);
    }
}

document.getElementById('edu-btn')?.addEventListener('click', () => clickButton('edu-id'));
document.getElementById('sk-btn')?.addEventListener('click', () => clickButton('sk-id'));
document.getElementById('exp-btn')?.addEventListener('click', () => clickButton('exp-id'));
