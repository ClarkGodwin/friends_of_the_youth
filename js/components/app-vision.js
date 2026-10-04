class AppVision extends HTMLElement {
    connectedCallback() {
        this.innerHTML = /* html */ `
            <section id='vision' class="vision">
                <h1>Vision</h1>
                <div>To fight the dropping out of the children in school and have a developed area  through education Mission</div>
            </section>
        `
    }
}

customElements.define('app-vision', AppVision)
