# 📝 Luka Go — Glossary Project (HTML, CSS & JS)

This project implements a **collaborative fintech glossary** for **Luka Go💰**, showcasing interactive definitions with modern UX and JavaScript `onclick` events. The design follows **mobile‑first**, **a11y**, and **premium UI/UX** principles, consistent with the Luka Go brand (navy + gold).

---

## 📚 HTML Glossary

### `<header>` and `<nav>`
- **Purpose**: Brand bar and navigation.  
- **Usage**: Luka Go logo, title, navigation links, and login toggle button.

### `<main>` and `<section>`
- **Purpose**: Semantic container for glossary content.  
- **Usage**: Glossary heading, add button, definition cards.

### `<article>`
- **Purpose**: Independent definition card.  
- **Usage**: Title, description, like button, like counter.

### `<button>` with `onclick`
- **Purpose**: Trigger interactive actions.  
- **Usage**: Login toggle, hide add button, like definitions.

### `<div>` modal
- **Purpose**: Accessible dialog for feedback.  
- **Usage**: Displays confirmation when a definition is liked.

---

## 🎨 CSS Glossary

### Brand & Header
- Flexbox layout for logo, title, nav, and login button.  
- Navy background, gold accents, pill buttons.

### Glossary Section
- White card with gold top border.  
- Shadow and rounded corners for premium look.

### Definition Cards
- Individual cards with shadow and spacing.  
- Like button styled as pill with gold background.

### Modal
- Full‑screen overlay with semi‑transparent background.  
- Centered white panel with rounded corners and shadow.  
- Hidden by default using `[hidden]`.

---

## 🧠 JavaScript Functionality

- **Login toggle**: Switches between *Sign in* and *Sign out*.  
- **Add Definition**: Hides the button when clicked.  
- **Like button**:  
  - Opens modal with definition title.  
  - Increments like counter.  
- **Modal close**:  
  - Closes on OK button, overlay click, or `Esc` key.  

---

## 🔐 Accessibility & UX

- `aria-label` and `aria-labelledby` for clear semantics.  
- `[hidden]` attribute for modal visibility control.  
- Focus states and keyboard support (`Esc` to close modal).  
- High contrast palette: navy + gold + white.  
- Mobile‑first layout with responsive spacing.

---

## 🚀 How to Test

1. Open `index.html` in your browser.  
2. Click **Sign in** → toggles to **Sign out**.  
3. Click **Add Definition** → button disappears.  
4. Click **Like** on any definition:  
   - Modal opens with definition title.  
   - Counter increments.  
5. Close modal with **OK**, overlay click, or `Esc`.  
6. Inspect with DevTools: flexbox, `[hidden]`, and event handlers.

---

## 🧠 Author Notes

This project is part of [`frontend-foundations`](https://github.com/MariferVL/frontend-foundations), a collection of microprojects to practice **HTML, CSS, accessibility, and JavaScript fundamentals** with fintech relevance.
