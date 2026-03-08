# 💠 morph-icons

**morph-icons** is a high-performance, framework-agnostic Web Component designed to bring Google Material Symbols to life. It transforms static icons into dynamic, interactive UI elements using a sophisticated "morphing" duotone effect that adapts to your design system automatically.

## Live Demo

Check out the interactive Morph Icon web component in action:

[**View Morph Icon Demo**](demo.html)

The demo showcases:
- Interactive duotone morphing effect on hover
- Live controls for icon name, shape, size, and hover color
- Automatic fill color generation based on hover color brightness
- Support for both rounded and sharp Material Symbols
- CSS animation integration

---

## ✨ Key Features

* **Adaptive Duotone Engine:** Automatically calculates and applies a perfectly contrasted secondary fill color based on your primary hover theme.
* **Fluid Morphing Animation:** Seamlessly transitions from a minimal outline to a scaled, filled state using hardware-accelerated transitions.
* **Plug-and-Play:** Zero dependencies; simply import the script and use the custom HTML tag anywhere in your project—from Shopify Liquid to React.
* **Style Versatility:** Full support for both **Rounded** and **Sharp** Material Symbol variants.
* **Full Customization:** Control every aspect of the icon—size, colors, and animation speed—using standard HTML attributes or CSS variables.

---

## ⚙️ Full API Reference

### 1. HTML Attributes

Attributes allow you to configure the icon directly in your markup. These values override global CSS defaults.

| Attribute | Type | Default | Description |
| --- | --- | --- | --- |
| `name` | `String` | `""` | **Required.** The specific Material Symbol name (e.g., `settings`, `favorite`). |
| `shape` | `String` | `rounded` | Defines the font-family style. Options: `rounded` or `sharp`. |
| `size` | `String` | `96px` | Sets the width and height. Accepts any CSS unit (e.g., `40px`, `2rem`). |

### 2. CSS Custom Properties (Variables)

Use these variables in your stylesheet for global branding or specific component overrides.

| Variable | Default | Description |
| --- | --- | --- |
| `--base-color` | `#000000` | The color of the icon in its default (outlined) state. |
| `--hover-color` | `#000000` | The primary color applied when the user hovers. |
| `--fill-color` | `unset` | The secondary duotone color. Calculated automatically if left `unset`. |
| `--size` | `96px` | The font-size/dimensions of the icon. |
| `--hover-duration` | `0.3s` | The speed of the transition for weight and morphing. |
| `--animation` | `none` | Attach custom CSS keyframe animations to the container. |

---

## 🧠 Smart Color Engine

The component features an automated logic gate for the duotone effect. When `--fill-color` is not manually defined, it calculates the **Perceptual Brightness** of your `--hover-color` to ensure accessibility:

* **Dark Themes:** Automatically lightens the fill for visibility.
* **Light Themes:** Automatically darkens the fill for depth.

---

## 🚀 JavaScript Integration

Since it is a standard Web Component, you can interact with it using vanilla JS. The component uses `observedAttributes`, so updates are reflected instantly without a refresh.

```javascript
const myIcon = document.querySelector('morph-icon');

// Change icon on the fly
myIcon.setAttribute('name', 'verified');

// Switch style
myIcon.setAttribute('shape', 'sharp');

```

---

Developed by **[EnsuiviDev](https://www.google.com/search?q=https://github.com/EnsuiviDev)**
