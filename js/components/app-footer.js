class AppFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = /* html */ `
            <footer>This is the footer</footer>
        `
    }
}

customElements.define('app-footer', AppFooter)
