class AppMission extends HTMLElement {
    connectedCallback() {
        this.innerHTML = /* html */ `
            <section id='mission' class="mission">
                <h1>Vision</h1>
                <div>to fight the dropping out of the children in school and have a developed area  through education Mission</div>
            </section>
        `
    }
}

customElements.define('app-mission', AppMission)
