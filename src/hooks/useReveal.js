import { useEffect, useRef } from 'react';

export function useReveal(threshold = 0.15) {
    const ref = useRef(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold }
        );

        // Observe the element itself and all reveal children
        const targets = el.querySelectorAll('.reveal, .reveal-left, .reveal-right');
        if (el.classList.contains('reveal') || el.classList.contains('reveal-left') || el.classList.contains('reveal-right')) {
            observer.observe(el);
        }
        targets.forEach((t) => observer.observe(t));

        return () => observer.disconnect();
    }, [threshold]);

    return ref;
}
