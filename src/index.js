$(document).ready(function () {
    const STORAGE_KEY = 'site_cookie_consent_v1';
    const banner = document.getElementById('cookie-consent');
    const btnAgree = document.getElementById('cookie-agree');
    const btnReject = document.getElementById('cookie-reject');

    function setConsent(choice) {
        const data = {
            choice: choice,
            ts: new Date().toISOString()
        };
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
        } 
        catch (e) {
            document.cookie = "site_cookie_consent=" + encodeURIComponent(JSON.stringify(data)) + ";path=/;max-age=" + (60*60*24*365);
        }
        hideBanner();
        window.dispatchEvent(new CustomEvent('cookieConsentChanged', { detail: data }));
    }

    function getConsent() {
        try {
            const raw = localStorage.getItem(STORAGE_KEY);
            if (raw) return JSON.parse(raw);
        } 
        catch (e) {
            const match = document.cookie.match(/(?:^|; )site_cookie_consent=([^;]+)/);
            if (match) {
                try { return JSON.parse(decodeURIComponent(match[1])); } catch (_) {}
            }
        }
        return null;
    }

    function hideBanner() {
        if (!banner) return;
        banner.classList.add('hidden');
        setTimeout(() => banner.remove(), 350);
    }

    function showBanner() {
        if (!banner) return;
        banner.classList.remove('hidden');
    }

    if (btnAgree) btnAgree.addEventListener('click', () => {
        setConsent('agree');
    });
    if (btnReject) btnReject.addEventListener('click', () => {
        setConsent('reject');
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') hideBanner();
    });

    const existing = getConsent();
    if (!existing) {
        window.addEventListener('load', () => {
            showBanner();
        });
    } 
    else window.dispatchEvent(new CustomEvent('cookieConsentRestored', { detail: existing }));

    window.CookieConsent = {
        get: getConsent,
        set: setConsent,
        clear: function() {
        try { localStorage.removeItem(STORAGE_KEY); } catch(e){}
            document.cookie = "site_cookie_consent=;path=/;max-age=0";
        }
    };
});
	