document.addEventListener('DOMContentLoaded', () => {
    const themeBtn = document.getElementById('themeBtn');
    const searchInput = document.getElementById('searchInput');
    const filterButtons = document.querySelectorAll('.nav-rect');
    const blocks = document.querySelectorAll('.searchable');
    const langItems = document.querySelectorAll('.lang-item');
    const slider = document.querySelector('.lang-bg-slider');
    const drawer = document.getElementById('aboutDrawer');
    const overlay = document.getElementById('overlay');
    const closeDrawer = document.getElementById('closeDrawer');
    const menuToggle = document.getElementById('menuToggle');
    const sidebar = document.getElementById('sidebar');

    const drawerTitle = document.getElementById('drawerDisplayTitle');
    const drawerText = document.getElementById('drawerDisplayText');

    // 1. ПЕРЕКЛАД
    const i18n = {
        ua: {
            "nav-title": "МЕНЮ",
            "nav-all": "ВСІ",
            "home-title": "ГОЛОВНА",
            "latest": "ОСТАННЄ",
            "btn-see": "ДИВИТИСЬ",
            "btn-dow": "СКАЧАТИ",
            "btn-about": "ПРО НАС",
            "about-title": "ІНФО",
            "about-text": "Завантаження...",
            "proj1-title": "ПРОЄКТ: АРТИКУЛ 55021",
            "proj1-desc": "Це детальний опис першого проєкту. Тут інформація про архітектуру та дизайн.",
            "proj2-title": "JS ЗАСТОСУНОК",
            "proj2-desc": "Опис другого проєкту. Тут розповідається про скрипти та функціонал JavaScript."
        },
        en: {
            "nav-title": "MENU",
            "nav-all": "ALL",
            "home-title": "HOME",
            "latest": "LATEST",
            "btn-see": "VIEW",
            "btn-dow": "DOWNLOAD",
            "btn-about": "ABOUT",
            "about-title": "INFO",
            "about-text": "Loading...",
            "proj1-title": "PROJECT: ARTICLE 55021",
            "proj1-desc": "This is a detailed description of the first project. Architecture and design info here.",
            "proj2-title": "JS APPLICATION",
            "proj2-desc": "Description of the second project. It covers JavaScript scripts and functionality."
        },
        pl: {
            "nav-title": "MENU",
            "nav-all": "WSZYSTKO",
            "home-title": "START",
            "latest": "NOWE",
            "btn-see": "ZOBACZ",
            "btn-dow": "POBIERZ",
            "btn-about": "O NAS",
            "about-title": "INFO",
            "about-text": "Ładowanie...",
            "proj1-title": "PROJEKT: ARTYKUŁ 55021",
            "proj1-desc": "To jest szczegółowy opis pierwszego projektu. Informacje o architekturze i designie.",
            "proj2-title": "APLIKACJA JS",
            "proj2-desc": "Opis drugiego projektu. Zawiera informacje o skryptach i funkcjonalności JavaScript."
        }
    };

    function updateLang(lang) {
        localStorage.setItem('user_lang', lang);
        const idx = Array.from(langItems).findIndex(i => i.dataset.lang === lang);
        if (slider) slider.style.transform = `translateX(${idx * 100}%)`;

        langItems.forEach(i => i.classList.toggle('active', i.dataset.lang === lang));
        
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.dataset.i18n;
            if (i18n[lang] && i18n[lang][key]) {
                el.textContent = i18n[lang][key];
            }
        });
    }
    
    langItems.forEach(i => i.onclick = () => updateLang(i.dataset.lang));

    // 2. ТЕМА
    function applyTheme(theme, persist = false) {
        document.body.classList.toggle('light-theme', theme === 'light');
        if (persist) localStorage.setItem('app_theme', theme);
    }

    if (themeBtn) {
        themeBtn.onclick = () => {
            const isLight = document.body.classList.contains('light-theme');
            applyTheme(isLight ? 'dark' : 'light', true);
        };
    }

    // 3. ФІЛЬТРАЦІЯ ТА ПОШУК
    function applyFilters() {
        const query = searchInput.value.toLowerCase().trim();
        const activeBtn = document.querySelector('.nav-rect.active');
        const activeCat = activeBtn ? activeBtn.getAttribute('data-filter') : 'all';

        blocks.forEach(block => {
            const text = block.textContent.toLowerCase();
            const cat = block.getAttribute('data-category') || 'all';

            const matchesSearch = query === "" || text.includes(query);
            const matchesCat = activeCat === 'all' || cat === activeCat;

            if (matchesSearch && matchesCat) {
                block.style.display = "block";
                setTimeout(() => block.style.opacity = "1", 10);
            } else {
                block.style.display = "none";
                block.style.opacity = "0";
            }
        });
    }

    searchInput.oninput = applyFilters;

    filterButtons.forEach(btn => {
        btn.onclick = (e) => {
            e.preventDefault();
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            applyFilters();
        };
    });

    // 4. ШТОРКА ТА МЕНЮ (DYNAMIC)
    document.addEventListener('click', (e) => {
        const trigger = e.target.closest('.about-trigger');
        
        if (trigger) {
            const parentBlock = trigger.closest('.searchable');
            const customContent = parentBlock.querySelector('.about-content');
            
            if (customContent) {
                drawerTitle.textContent = customContent.querySelector('.res-title').textContent;
                drawerText.textContent = customContent.querySelector('.about-text').textContent;
            }

            drawer.classList.add('open');
            overlay.classList.add('show');
        }
    });

    if (closeDrawer) {
        closeDrawer.onclick = () => {
            drawer.classList.remove('open');
            overlay.classList.remove('show');
        };
    }

    if (menuToggle) {
        menuToggle.onclick = () => {
            sidebar.classList.toggle('open');
            overlay.classList.toggle('show');
        };
    }

    overlay.onclick = () => {
        drawer.classList.remove('open');
        sidebar.classList.remove('open');
        overlay.classList.remove('show');
    };

    // 5. ІНІЦІАЛІЗАЦІЯ
    updateLang(localStorage.getItem('user_lang') || 'ua');

    const storedTheme = localStorage.getItem('app_theme');
    const prefersLight = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;

    if (storedTheme === 'light' || (!storedTheme && prefersLight)) {
        applyTheme('light', false);
    } else {
        applyTheme('dark', false);
    }

    applyFilters();
});