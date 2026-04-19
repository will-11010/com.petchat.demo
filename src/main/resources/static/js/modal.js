document.getElementById('modalClose').addEventListener('click', function () {
    document.getElementById('modalOverlay').classList.remove('show');
});

document.getElementById('modalOverlay').addEventListener('click', function (e) {
    if (e.target === this) {
        this.classList.remove('show');
    }
});

window.addEventListener('DOMContentLoaded', function () {
    document.getElementById('modalOverlay').classList.add('show');
});
