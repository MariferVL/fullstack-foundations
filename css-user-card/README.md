# 📝 User Card — HTML & CSS Project

Este proyecto implementa una **tarjeta de usuario fintech** para la plataforma ficticia **Luka Go💰**. La tarjeta muestra avatar, nombre, nivel de cuenta y un botón de acción, con un diseño moderno y accesible.

---

## 📚 Glosario de HTML

### `<article>`
- **Propósito**: Contenedor semántico para un bloque independiente de contenido.  
- **Uso**: Representa la tarjeta de cliente como unidad reutilizable.

### `<img>`
- **Propósito**: Mostrar el avatar del cliente.  
- **Atributos clave**:  
  - `alt="Profile photo of Luka Go client"` → accesibilidad.  
  - `class="avatar"` → estilo consistente.

### `<h2>` y `<p>`
- **Propósito**: Jerarquía tipográfica clara.  
- **Uso**: Nombre del cliente y nivel de cuenta.

### `<div class="status">`
- **Propósito**: Badge informativo, no interactivo.  
- **Uso**: Estado de cliente activo.

### `<button class="cta">`
- **Propósito**: Acción principal.  
- **Uso**: Navegar al perfil completo.

---

## 🎨 Glosario de CSS

### Selectores
- `.user-card`, `.avatar`, `.status`, `.cta` → selectores de clase para modularidad.  
- `:root` → variables CSS para paleta fintech (navy + gold).

### Box Model
- `padding`, `border-radius`, `box-shadow` → definen el aspecto de la tarjeta.  
- `border` en avatar → resalta con color oro.

### Display / Flex / Grid
- `display: grid` + `place-items: center` → centra contenido de forma moderna.  
- `gap` → separación uniforme entre elementos.

### Posiciones
- `transition: transform` + `:hover` → micro‑interacción al elevar la tarjeta.  
- `margin: auto` en badge → centrado horizontal.

### Extras
- `clamp()` → tipografía fluida.  
- `accent-color` → preparado para inputs interactivos.  
- `color-scheme: light dark` → soporte para modo oscuro.

---

## 🔐 Accesibilidad & UX

- `aria-label="Luka Go client card"` → describe el propósito del bloque.  
- `alt` descriptivo en imagen.  
- Contraste alto: navy + gold.  
- Botón con hover claro → distingue acción de información.

---

## 🚀 Prueba

1. Abrir `index.html` en el navegador.  
2. Pasar el cursor sobre la tarjeta para ver la animación.  
3. Revisar en DevTools cómo se aplican `grid` y variables CSS.

---

## 🧠 Notas de Autor

Este proyecto forma parte de [`frontend-foundations`](https://github.com/MariferVL/frontend-foundations), colección de microproyectos para repasar fundamentos de frontend con relevancia fintech.

