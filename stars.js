(function() {
    "use strict";
    const init = () => {
        const config = window._ALQ_CONFIG || { color: '#fbbf24', count: 35 };
        if (window._ALQ_STARS_DONE) return;
        window._ALQ_STARS_DONE = true;
        const style = document.createElement('style');
        style.innerHTML = `.alq-p { position: fixed; width: 8px; height: 8px; background: radial-gradient(circle, ${config.color} 0%, transparent 80%); border-radius: 50%; pointer-events: none; z-index: 2147483647; animation: alq-f 800ms ease-out forwards; } @keyframes alq-f { 0% { transform: scale(1); opacity: 1; } 100% { transform: scale(0) translate(var(--x), var(--y)); opacity: 0; } }`;
        document.head.appendChild(style);
        const effect = (e) => {
            const x = e.clientX || (e.touches && e.touches[0].clientX);
            const y = e.clientY || (e.touches && e.touches[0].clientY);
            if (!x || !y) return;
            const f = document.createDocumentFragment();
            for (let i = 0; i < config.count; i++) {
                const p = document.createElement('div');
                p.className = 'alq-p';
                p.style.left = x + 'px'; p.style.top = y + 'px';
                const tx = (Math.random() - 0.5) * 400;
                const ty = (Math.random() - 0.5) * 400;
                p.style.setProperty('--x', tx + 'px');
                p.style.setProperty('--y', ty + 'px');
                f.appendChild(p);
                setTimeout(() => p.remove(), 800);
            }
            document.body.appendChild(f);
        };
        document.addEventListener('mousedown', effect);
        document.addEventListener('touchstart', effect, { passive: true });
    };
    if (document.readyState === 'complete') init();
    else window.addEventListener('load', init);
})();
