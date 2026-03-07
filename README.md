# 💠 morph-icons

A lightweight, high-performance **Web Component** for creating dynamic, "morphing" duotone Material Symbols. Built with vanilla JavaScript and CSS `clip-path`, it automatically generates adaptive secondary colors for a modern, fluid UI experience.

---

## ✨ Features

* **Zero Dependencies:** Pure vanilla JavaScript Web Component.
* **Smart Duotone Logic:** Automatically calculates a contrasting fill color based on your primary hover color.
* **Morphing Animation:** Smoothly transitions from an outlined state to a scaled, filled state.
* **Framework Agnostic:** Works perfectly in Shopify Liquid, React, Vue, or standard HTML.
* **Highly Customizable:** Control icons, shapes, and sizes via attributes or CSS variables.

---

## 🚀 Quick Start

### 1. Installation
Include the script in your project:
```html
<script src="morph-icons.js"></script>

```

### 2. Basic Usage

Simply use the `<morph-icon>` tag with the name of any [Google Material Symbol](https://fonts.google.com/icons).

```html
<morph-icon name="favorite"></morph-icon>

<morph-icon name="settings" shape="sharp"></morph-icon>

<morph-icon name="bolt" size="48px"></morph-icon>

```

---

## 🎨 Customization

### CSS Variables

You can style the component globally or individually using CSS variables:

```css
morph-icon {
  --base-color: #636e72;   /* Initial outline color */
  --hover-color: #0984e3;  /* Main color on hover */
  --size: 80px;            /* Icon size */
  --hover-duration: 0.4s;  /* Animation speed */
}

```

### Attributes Reference

| Attribute | Description | Default | Options |
| --- | --- | --- | --- |
| `name` | The Material Symbol icon name | `''` | Any Material Symbol name |
| `shape` | The font style to load | `rounded` | `rounded`, `sharp` |
| `size` | The font-size of the icon | `96px` | Any CSS unit (px, rem, etc.) |

---

## 🧠 How It Works

The library features a built-in color engine that analyzes the brightness of your `--hover-color`. It then automatically generates a secondary shade (lightening dark colors or darkening light colors) to create a perfect duotone effect without manual configuration.

---

## 📄 License

This project is licensed under the **MIT License**.

### Third-Party Assets

This library utilizes **Material Symbols** by Google, which are licensed under the [Apache License, Version 2.0](https://www.apache.org/licenses/LICENSE-2.0.txt).

---

Developed by **[EnsuiviDev](https://www.google.com/search?q=https://github.com/EnsuiviDev)**


Would you like me to also provide the **MIT License** text to include as a separate `LICENSE` file in your repository?

```
