/**
 * 🌌 ALQARMANI X - RADIANT STARS ULTIMATE (ONE-CORE)
 * الإصدار الشامل: (خدمة + حماية + تنبيهات) في ملف واحد
 * المستلم: 01027834695 | alqurmanix@gmail.com
 */

(function() {
    // 1. إعدادات الإدارة (بياناتك)
    const _0xAlq = {
        wa: "201027834695",
        mail: "alqurmanix@gmail.com",
        reportTime: "21:00",
        targetDomain: window.location.hostname
    };

    // 2. محرك النجوم (الخدمة)
    function launchStars() {
        const style = document.createElement('style');
        style.innerHTML = `
            .alq-s { position:absolute; width:8px; height:8px; background:radial-gradient(circle, #fbbf24 0%, transparent 80%); border-radius:50%; pointer-events:none; z-index:999999; animation:alq-f 0.8s ease-out forwards; }
            @keyframes alq-f { 0%{transform:scale(1);opacity:1;} 100%{transform:scale(0) translate(var(--x),var(--y)); opacity:0;} }
        `;
        document.head.appendChild(style);

        document.addEventListener('mousedown', (e) => {
            const frag = document.createDocumentFragment();
            for (let i = 0; i < 35; i++) {
                const s = document.createElement('div');
                s.className = 'alq-s';
                s.style.left = e.pageX + 'px'; s.style.top = e.pageY + 'px';
                const x = (Math.random() - 0.5) * 450;
                const y = (Math.random() - 0.5) * 450;
                s.style.setProperty('--x', x + 'px'); s.style.setProperty('--y', y + 'px');
                frag.appendChild(s);
                setTimeout(() => s.remove(), 800);
            }
            document.body.appendChild(frag);
        });
    }

    // 3. نظام التنبيهات والتقرير (اللسان)
    async function notifyOwner(type, msg) {
        const payload = {
            to_wa: _0xAlq.wa,
            to_mail: _0xAlq.mail,
            msg: `🚀 القرماني إكس - ${type}: ${msg}\nالموقع: ${_0xAlq.targetDomain}`
        };
        // استدعاء الجسر (سيتم الربط مع API الإرسال)
        console.log("Sending Notification:", payload);
    }

    // 4. التقرير اليومي المبرمج (9:00 مساءً)
    setInterval(() => {
        const now = new Date();
        if (now.getHours() === 21 && now.getMinutes() === 0) {
            notifyOwner("التقرير اليومي", "المنظومة تعمل بكفاءة 100% - الكود مستقر");
        }
    }, 60000);

    // التشغيل الفوري
    launchStars();
    notifyOwner("تفعيل", "تم ربط كود النجوم بالموقع الآن");

})();
