class AppHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = /* html */ `
            <header>This is the header dsaöf</header>
        `
    }
}

customElements.define('app-header', AppHeader)
