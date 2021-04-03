window.addEventListener("DOMContentLoaded", () => {
    setInterval(() => {
        var x = document.createElement("div");
        x.style.width = '3px';
        x.style.height = '6px';
        x.style.borderRadius = '0 0 50px 50px';
        x.style.background = 'rgba(200,200,255, 0.5)';
    }, 1000);
});