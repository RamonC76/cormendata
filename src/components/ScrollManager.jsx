import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Al cambiar de ruta:
 * - si la URL trae un hash (ej. /#services), hace scroll a ese elemento.
 * - si no, sube al inicio de la página (comportamiento normal de una
 *   navegación a una página nueva, en vez de quedarse en el scroll
 *   donde estaba la página anterior).
 */
export default function ScrollManager() {
    const { pathname, hash } = useLocation();

    useEffect(() => {
        if (hash) {
            // Pequeño delay para que el elemento ya exista en el DOM
            // (por ejemplo, si navegamos de otra página hacia "/#contact").
            const id = hash.replace("#", "");
            const timeout = setTimeout(() => {
                const el = document.getElementById(id);
                if (el) {
                    el.scrollIntoView({ behavior: "smooth" });
                } else {
                    window.scrollTo({ top: 0 });
                }
            }, 50);
            return () => clearTimeout(timeout);
        }

        window.scrollTo({ top: 0 });
    }, [pathname, hash]);

    return null;
}
