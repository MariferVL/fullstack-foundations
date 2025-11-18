# 📝 Profile Page — HTML & CSS Project

Este proyecto implementa una **página de perfil fintech** para **Luka Go💰**, mostrando información del cliente, productos contratados y estado de cuenta. El diseño sigue principios de **mobile‑first**, **a11y** y **UX/UI premium**.

---

## 📚 Glosario de HTML

### `<header>` y `<nav>`
- **Propósito**: Barra de marca y navegación principal.  
- **Uso**: Logo Luka Go + enlaces a secciones.

### `<main>`
- **Propósito**: Contenedor semántico para contenido principal.  
- **Uso**: Perfil, productos, estado de cuenta.

### `<section>`
- **Propósito**: Agrupar bloques relacionados.  
- **Uso**: Perfil del cliente, lista de productos, estado de cuenta.

### `<ul>` y `<li>`
- **Propósito**: Listas semánticas.  
- **Uso**: Productos activos y detalles financieros.

---

## 🎨 Glosario de CSS

### Selectores
- `.profile-card`, `.section`, `.profile img` → clases para modularidad.  
- `header nav a:hover` → interacción visual.

### Box Model
- `padding`, `border-radius`, `box-shadow` → tarjetas con aspecto premium.  
- `border-top: 4px solid var(--gold)` → acento visual fintech.

### Display / Flex / Grid
- `display: flex` en header → logo + nav equilibrados.  
- `display: grid` en main → layout responsivo con `gap`.  
- `place-items: center` en profile hero → centrado moderno.

### Posiciones
- `@media (max-width: 600px)` → reorganiza perfil en mobile.  
- `justify-content: space-between` → balance en header.

### Extras
- `clamp()` → tipografía fluida.  
- `color-scheme: light dark` → soporte para modo oscuro.  
- `transition` en nav links → micro‑interacciones.

---

## 🔐 Accesibilidad & UX

- `aria-label` y `aria-labelledby` → describen secciones para lectores de pantalla.  
- Contraste alto: navy + gold.  
- Navegación con hover claro → mejora usabilidad.  
- Layout mobile‑first → experiencia consistente en todos los dispositivos.

---

## 🚀 Prueba

1. Abrir `index.html` en el navegador.  
2. Revisar la barra de navegación y hover en enlaces.  
3. Observar cómo se adaptan las secciones en pantallas pequeñas.  
4. Explorar en DevTools el uso de `grid`, `flex` y `clamp()`.

---

## 🧠 Notas de Autor

Este proyecto forma parte de [`frontend-foundations`](https://github.com/MariferVL/frontend-foundations), colección de microproyectos para repasar fundamentos de frontend con relevancia fintech.

