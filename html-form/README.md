# 📝 Fintech Onboarding Form — HTML Project

This project simulates a real-world onboarding form for a fintech platform called **Luka Go💰**. It uses semantic HTML to collect personal, financial, and identity data in a structured and accessible way.

---

## 📚 HTML Elements Glossary

Each element is listed with its purpose, key attributes, and fintech-specific usage.

### `<form>`
- **Purpose**: Container for user input submission.
- **Attributes**:
  - `action="/api/v1/register"` → Defines the endpoint.
  - `method="post"` → Sends data securely.
  - `enctype="multipart/form-data"` → Allows file uploads (KYC documents).

### `<fieldset>` and `<legend>`
- **Purpose**: Group related inputs for accessibility and clarity.
- **Usage**: Divides the form into 4 logical sections:
  1. Personal Info
  2. Identity Verification
  3. Investment Profile
  4. Security & Submission

### `<input>` types
| Type        | Purpose                          | Example Use                          |
|-------------|----------------------------------|--------------------------------------|
| `text`      | Free text input                  | Full name, occupation                |
| `email`     | Validates email format           | Email address                        |
| `date`      | Date picker                      | Birthdate                            |
| `tel`       | Phone number with pattern        | Mobile number                        |
| `file`      | Upload documents                 | KYC identity file                    |
| `password`  | Secure password input            | Account creation                     |
| `number`    | Numeric input with constraints   | Initial investment amount            |
| `range`     | Slider for numeric range         | Investment horizon                   |
| `radio`     | Single choice                    | Risk tolerance                       |
| `checkbox`  | Multiple choices                 | Investment goals                     |
| `hidden`    | Security token                   | CSRF protection                      |

### `<select>` and `<optgroup>`
- **Purpose**: Dropdown for structured choices.
- **Usage**: Source of funds, grouped by income type.

### `<datalist>`
- **Purpose**: Suggests predefined values while allowing free input.
- **Usage**: Occupation/industry autocomplete.

### `<button>` types
| Type         | Behavior                         |
|--------------|----------------------------------|
| `submit`     | Sends form data                  |
| `reset`      | Clears all fields                |
| `submit` with `formaction` + `formnovalidate` | Saves draft without validation |

---

## 🔐 Accessibility & UX Features

- `required`, `minlength`, `maxlength`, `pattern`, `title` → Improve validation and clarity.
- `autocomplete="new-password"` → Prevents insecure autofill.
- `<label for="...">` → Ensures screen reader compatibility.
- `<output>` → Displays dynamic slider value.

---

## 💡 Fintech Context

This form mimics real onboarding flows used in investment platforms:
- **KYC compliance**: identity verification via file upload.
- **Risk profiling**: radio buttons and checkboxes simulate investor segmentation.
- **Security**: password rules and CSRF token reflect real-world standards.

---

## 🚀 Try It

To test the form:
1. Open `index.html` in your browser.
2. Fill out the fields and observe validations.
3. Explore the structure in DevTools to understand semantic grouping.

---

## 🧠 Author Notes

This project is part of the [`frontend-foundations`](https://github.com/MariferVL/frontend-foundations) repo — a curated collection of microprojects for reviewing core frontend concepts with fintech relevance.

