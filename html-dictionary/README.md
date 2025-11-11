# ✨ Dictionary for Life — HTML Project

A semantic HTML project that demonstrates how to build a simple, accessible dictionary with phonetic transcriptions and audio pronunciation. This exercise highlights the use of modern HTML5 elements to structure content clearly, without relying on CSS or JavaScript.

---

## 🎯 Purpose

This project is designed to:
- Practice semantic HTML for structured content.
- Explore the `<dl>`, `<dt>`, and `<dd>` elements for dictionary-style layouts.
- Integrate phonetic transcriptions with audio playback using `<audio>`.
- Use `<hr>` as a thematic separator to improve readability between entries without CSS.
- Reinforce accessibility and UX principles by keeping markup clean and meaningful.

---

## 🧱 Structure

The dictionary is built using:
- **`<header>`** → Introduces the project title and description.
- **`<main>`** → Contains the dictionary entries.
- **`<dl>`** → Definition list, ideal for word + description pairs.
- **`<dt>`** → Defines the term (the word).
- **`<dd>`** → Provides details such as phonetics, origin, and meaning.
- **`<figure>` + `<figcaption>`** → Groups phonetic transcription with its audio player.
- **`<audio controls>`** → Allows users to listen to the pronunciation.
- **`<hr>`** → Creates a thematic break between dictionary entries, improving visual separation without CSS.

---

## 📚 Example Entry

```html
<dt>Upekkha</dt>
<dd>
  <figure>
    <figcaption><strong>Phonetics:</strong> /uˈpɛk.kʰa/</figcaption>
    <audio controls src="static/audio/upekkha.m4a">
      Your browser does not support the audio element.
    </audio>
  </figure>
</dd>
<dd><strong>Origin:</strong> Pali</dd>
<dd><strong>Meaning:</strong> Equanimity, the ability to maintain calm and serenity in the midst of difficulties.</dd>
<hr>
```

---

## 🔑 Key HTML Elements & Attributes

| Element / Attribute | Purpose | UX/UI Benefit |
|---------------------|---------|---------------|
| `<dl>`, `<dt>`, `<dd>` | Semantic dictionary structure | Clear hierarchy for readers and screen readers |
| `<figure>` + `<figcaption>` | Groups phonetics with audio | Improves accessibility and context |
| `<audio controls>` | Plays pronunciation | Native browser UI, no extra scripts |
| `lang="en"` | Declares document language | Better accessibility and SEO |
| Fallback text in `<audio>` | `"Your browser does not support the audio element."` | Ensures graceful degradation |
| `<hr>` | Thematic break between entries | Adds visual separation and improves readability |

---

## 🔐 Accessibility & UX Features

- Semantic grouping ensures screen readers announce words and definitions correctly.
- `<figcaption>` ties phonetic transcription directly to its audio.
- Fallback text inside `<audio>` supports older browsers.
- `<hr>` provides clear separation between entries, aiding both visual users and assistive technologies.
- Clean markup without inline styles or deprecated attributes.

---

## 🚀 How to Use

1. Open `index.html` in your browser.
2. Browse the dictionary entries.
3. Click the play button in each `<audio>` control to hear the pronunciation.
4. Extend the dictionary by adding new `<dt>` terms with `<dd>` details and audio files.
5. Insert `<hr>` after each entry to maintain clear separation.

---

## 🧠 Author Notes

This project is part of the [`frontend-foundations`](https://github.com/MariferVL/frontend-foundations) repo — a curated collection of microprojects for revisiting core frontend concepts. It demonstrates how semantic HTML alone can deliver excellent UX/UI for educational resources, using `<hr>` for separation and `.m4a` for maximum audio compatibility.


