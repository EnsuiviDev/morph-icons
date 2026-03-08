class MorphIcon extends HTMLElement {
    static get observedAttributes() {
        return ['name', 'shape', 'size'];
    }

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
          <style>
            :host {
              --hover-color: #000000;
              --base-color: #000000;
              --fill-color: unset;
              --hover-duration: 0.3s;
              --animation: none;
              --size: 96px;
              --shape: rounded;
              display: inline-block;
            }
            .icon {
              position: relative;
              font-family: 'Material Symbols Rounded';
              font-size: var(--size);
              cursor: pointer;
              user-select: none;
              display: inline-flex;
              align-items: center;
              justify-content: center;
              color: var(--base-color);
              font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 48;
              transition: color var(--hover-duration) ease, font-variation-settings var(--hover-duration) ease, transform 0.3s ease;
              animation: var(--animation);
            }
            .icon::after {
              content: attr(data-icon);
              position: absolute;
              color: var(--fill-color);
              font-variation-settings: 'FILL' 1, 'wght' 100, 'GRAD' -25, 'opsz' 48;
              z-index: -1;
              clip-path: circle(0% at 50% 50%);
              transform: scale(0.5);
              transition: clip-path var(--hover-duration) ease, transform var(--hover-duration) ease;
            }
            .icon:hover {
              color: var(--hover-color);
              font-variation-settings: 'FILL' 0, 'wght' 600, 'GRAD' 0, 'opsz' 48;
            }
            .icon:hover::after {
              clip-path: circle(75% at 50% 50%);
              transform: scale(1.05);
            }
          </style>
          <span class="icon" data-icon=""></span>
        `;
    }

    connectedCallback() {
        this.updateIcon();
    }

    attributeChangedCallback() {
        this.updateIcon();
    }

    updateIcon() {
        const iconEl = this.shadowRoot.querySelector('.icon');
        const name = this.getAttribute('name') || '';
        iconEl.textContent = name;
        iconEl.setAttribute('data-icon', name);

        // Duotone logic
        const computedStyle = getComputedStyle(this);
        const hoverColor = computedStyle.getPropertyValue('--hover-color').trim() || '#223c74';
        const manualFill = computedStyle.getPropertyValue('--fill-color').trim();

        if (!manualFill || manualFill === 'unset') {
            const rgb = this.hexToRgb(hoverColor);
            const brightness = this.getBrightness(rgb);
            let secondaryRgb;
            if (brightness < 0.25) secondaryRgb = this.adjustColor(rgb, 0.6);
            else if (brightness < 0.5) secondaryRgb = this.adjustColor(rgb, 0.3);
            else if (brightness < 0.75) secondaryRgb = this.adjustColor(rgb, -0.2);
            else secondaryRgb = this.adjustColor(rgb, -0.5);
            const fillColor = this.rgbToHex(secondaryRgb.r, secondaryRgb.g, secondaryRgb.b);
            this.style.setProperty('--fill-color', fillColor);
        }

        // Shape logic (attribute > CSS variable > default)
        const shape = this.getAttribute('shape') || computedStyle.getPropertyValue('--shape').trim() || 'rounded';
        const fontId = 'morph-icon-font-' + shape;
        if (!document.getElementById(fontId)) {
            const link = document.createElement('link');
            link.id = fontId;
            link.rel = 'stylesheet';
            link.href = shape === 'sharp'
                ? 'https://fonts.googleapis.com/css2?family=Material+Symbols+Sharp:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200'
                : 'https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200';
            document.head.appendChild(link);
        }
        iconEl.style.fontFamily = shape === 'sharp' ? "'Material Symbols Sharp'" : "'Material Symbols Rounded'";

        // Size logic (attribute > CSS variable > default)
        const size = this.getAttribute('size') || computedStyle.getPropertyValue('--size').trim() || '96px';
        iconEl.style.fontSize = size;
    }

    hexToRgb(hex) {
        let r = parseInt(hex.substr(1, 2), 16);
        let g = parseInt(hex.substr(3, 2), 16);
        let b = parseInt(hex.substr(5, 2), 16);
        return { r, g, b };
    }

    rgbToHex(r, g, b) {
        return '#' + [r, g, b].map(x => x.toString(16).padStart(2, '0')).join('');
    }

    adjustColor({ r, g, b }, percent) {
        r = Math.min(255, Math.max(0, Math.floor(r + percent * 255)));
        g = Math.min(255, Math.max(0, Math.floor(g + percent * 255)));
        b = Math.min(255, Math.max(0, Math.floor(b + percent * 255)));
        return { r, g, b };
    }

    getBrightness({ r, g, b }) {
        return (0.299 * r + 0.587 * g + 0.114 * b) / 255;
    }
}

customElements.define('morph-icon', MorphIcon);