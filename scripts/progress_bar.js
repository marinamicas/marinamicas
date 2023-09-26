class ProgressBar extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
    }

    static get observedAttributes() {
        return ['value', 'max'];
    }

    attributeChangedCallback() {
        this.render();
    }

    render() {
        const value = parseFloat(this.getAttribute('value')) || 0;
        const max = parseFloat(this.getAttribute('max')) || 100;
        const percentage = Math.min((value / max) * 100, 100);

        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: flex;
                    width: 100%;
                    height: 0.375rem;
                    align-items: center;
                    flex-shrink: 0;
                    background: var(--m-3-sys-light-surface-container-highest, #D1CAE4);
                }
                #progress {
                    width: ${percentage}%;
                    height: 100%;
                    background-color: rgba(103, 80, 164, 1);
                }
            </style>
            <div id="progress"></div>
        `;
    }
}

customElements.define('progress-bar', ProgressBar);