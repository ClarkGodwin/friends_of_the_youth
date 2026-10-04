class AppContact extends HTMLElement {
    connectedCallback() {
        this.innerHTML = /* html */ `
            <section id='contact' class="contact">
                <h1>mission</h1>
                <div>to be the leading foundation in Africa</div>
            </section>
        `
    }
}

customElements.define('app-contact', AppContact)
