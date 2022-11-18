const maxlength = 320;

document.querySelectorAll('p').forEach(function (text) {
    if (text.textContent.length > maxlength) {
        text.textContent = text.textContent.slice(0, maxlength) + '…';
    }
});