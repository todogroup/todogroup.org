(function () {
    const initialize = () => {
        const hamburger = document.querySelector('.hamburger');
        const navigation = document.querySelector('.main-menu');
        if (!navigation || !hamburger) return;
        const desktop = window.matchMedia('(min-width: 1000px)');
        const items = [...navigation.querySelectorAll('.top-menu-item.menu-item-has-children')];
        const setExpanded = (item, expanded) => {
            item.classList.toggle('is-open', expanded);
            item.querySelector('.menu-toggle').setAttribute('aria-expanded', String(expanded));
            item.querySelector('.sub-menu').hidden = !expanded;
        };
        const closePanels = () => items.forEach(item => setExpanded(item, false));
        const setMobileOpen = open => {
            hamburger.classList.toggle('is-active', open);
            hamburger.setAttribute('aria-expanded', String(open));
            navigation.classList.toggle('is-active', open);
            document.body.classList.toggle('has-menu-active', open);
            navigation.inert = !desktop.matches && !open;
            if (!open) closePanels();
        };
        hamburger.addEventListener('click', () => {
            setMobileOpen(hamburger.getAttribute('aria-expanded') !== 'true');
        });
        items.forEach(item => {
            const toggle = item.querySelector('.menu-toggle');
            toggle.addEventListener('click', () => {
                const open = toggle.getAttribute('aria-expanded') !== 'true';
                closePanels();
                setExpanded(item, open);
            });
            item.addEventListener('mouseenter', () => {
                if (!desktop.matches || !window.matchMedia('(hover: hover)').matches) return;
                closePanels();
                setExpanded(item, true);
            });
            item.addEventListener('mouseleave', () => {
                if (desktop.matches && !item.contains(document.activeElement)) setExpanded(item, false);
            });
            item.addEventListener('focusout', event => {
                if (!item.contains(event.relatedTarget)) setExpanded(item, false);
            });
        });
        document.addEventListener('click', event => {
            if (!navigation.contains(event.target) && !hamburger.contains(event.target)) setMobileOpen(false);
        });
        document.addEventListener('keydown', event => {
            if (event.key !== 'Escape') return;
            const openItem = items.find(item => item.classList.contains('is-open'));
            if (openItem) {
                setExpanded(openItem, false);
                openItem.querySelector('.menu-toggle').focus();
            } else if (navigation.classList.contains('is-active')) {
                setMobileOpen(false);
                hamburger.focus();
            }
        });
        desktop.addEventListener('change', () => setMobileOpen(false));
        setMobileOpen(false);

        // Preserve the theme's language selector behavior.
        document.querySelectorAll('.dropdown').forEach(dropdown => {
            dropdown.addEventListener('click', () => dropdown.classList.toggle('is-expanded'));
            dropdown.addEventListener('mouseenter', () => {
                if (desktop.matches) dropdown.classList.add('is-expanded');
            });
            dropdown.addEventListener('mouseleave', () => {
                if (desktop.matches) dropdown.classList.remove('is-expanded');
            });
            dropdown.addEventListener('focusout', event => {
                if (!dropdown.contains(event.relatedTarget)) dropdown.classList.remove('is-expanded');
            });
            document.addEventListener('keydown', event => {
                if (event.key === 'Escape') dropdown.classList.remove('is-expanded');
            });
        });
    };
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', initialize);
    else initialize();
}());
