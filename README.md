# 💠 morph-icons

**morph-icons** is a high-performance, framework-agnostic Web Component designed to bring Google Material Symbols to life. It transforms static icons into dynamic, interactive UI elements using a sophisticated "morphing" duotone effect that adapts to your design system automatically.

---

## ✨ Key Features

* **Adaptive Duotone Engine:** Automatically calculates and applies a perfectly contrasted secondary fill color based on your primary hover theme.
* **Fluid Morphing Animation:** Seamlessly transitions from a minimal outline to a scaled, filled state using hardware-accelerated transitions.
* **Plug-and-Play:** Zero dependencies. Simply import the script and use the custom HTML tag anywhere in your project—from Shopify Liquid to React.
* **Style Versatility:** Full support for both **Rounded** and **Sharp** Material Symbol variants.
* **Full Customization:** Control every aspect of the icon—size, colors, and animation speed—using standard HTML attributes or CSS variables.

---

## 🛠 Usage Guide

### 1. Integration
Add the library to your project by including the JavaScript file:
```html
<script src="morph-icons.js"></script>
2. ImplementationUse the <morph-icon> tag with the name of any Google Material Symbol.HTML<morph-icon name="home"></morph-icon>

<morph-icon name="dashboard" shape="sharp"></morph-icon>

<morph-icon name="rocket_launch" size="64px"></morph-icon>
⚙️ Full API Reference1. HTML AttributesAttributes allow you to configure the icon directly in your markup. These values override global CSS defaults.AttributeTypeDefaultDescriptionnameString""Required. The specific Material Symbol name (e.g., settings, favorite).shapeStringroundedDefines the font-family style. Options: rounded or sharp.sizeString96pxSets the width and height. Accepts any CSS unit (e.g., 40px, 2rem).2. CSS Custom Properties (Variables)Use these variables in your stylesheet for global branding or specific component overrides.VariableDefaultDescription--base-color#000000The color of the icon in its default (outlined) state.--hover-color#000000The primary color applied when the user hovers.--fill-colorunsetThe secondary duotone color. Calculated automatically if left unset.--size96pxThe font-size/dimensions of the icon.--hover-duration0.3sThe speed of the transition for weight and morphing.--animationnoneAttach custom CSS keyframe animations to the container.🧠 Smart Color EngineThe component features an automated logic gate for the duotone effect. When --fill-color is not manually defined, it calculates the Perceptual Brightness of your --hover-color to ensure accessibility:Dark Themes: Automatically lightens the fill for visibility.Light Themes: Automatically darkens the fill for depth.🚀 JavaScript IntegrationSince it is a standard Web Component, you can interact with it using vanilla JS. The component uses observedAttributes, so updates are reflected instantly without a refresh.JavaScriptconst myIcon = document.querySelector('morph-icon');

// Change icon on the fly
myIcon.setAttribute('name', 'verified');

// Switch style
myIcon.setAttribute('shape', 'sharp');
📄 LicenseThis library is released under the MIT License.Third-Party Attribution:This project utilizes Material Symbols by Google, provided under the Apache License, Version 2.0.

Developed by EnsuiviDev
