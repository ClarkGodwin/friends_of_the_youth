class AppMission extends HTMLElement {
    connectedCallback() {
        this.innerHTML = /* html */ `
            <section id='mission' class="mission">
                <h1>mission</h1>
                <div>to be the leading foundation in Africa</div>
            </section>
        `
    }
}

customElements.define('app-mission', AppMission)
