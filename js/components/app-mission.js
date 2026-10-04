class AppMission extends HTMLElement {
    connectedCallback() {
        this.innerHTML = /* html */ `
            <section id='mission' class="mission">
                <h1>Mission</h1>
                <div>To be the leading foundation in Africa</div>
            </section>
        `
    }
}

customElements.define('app-mission', AppMission)
