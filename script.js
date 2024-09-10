var _a, _b, _c;
function clickButton(secId) {
    var sections = document.querySelectorAll('.section');
    var targetSection = document.getElementById(secId);
    if (targetSection) {
        if (targetSection.classList.contains('active')) {
            targetSection.classList.remove('active');
        }
        else {
            sections.forEach(function (sec) {
                sec.classList.remove(secId);
            });
            targetSection.classList.add('active');
        }
    }
    else {
        console.error("No section found with ID ".concat(secId));
    }
}
(_a = document.getElementById('edu-btn')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () { return clickButton('edu-id'); });
(_b = document.getElementById('sk-btn')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', function () { return clickButton('sk-id'); });
(_c = document.getElementById('exp-btn')) === null || _c === void 0 ? void 0 : _c.addEventListener('click', function () { return clickButton('exp-id'); });
