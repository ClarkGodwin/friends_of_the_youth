class AppHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = /* html */ `
            <header id='header' >
                <img src="../../public/images/friends_of_the_youth_logo.jpeg" alt="Friends of the youth">
                <div>Friends of the youth</div>
                <div>
                </div>

            </header>
        `
    }
}

customElements.define('app-header', AppHeader)
