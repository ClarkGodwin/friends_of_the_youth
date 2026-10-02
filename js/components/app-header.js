class AppHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */ `
            <header id='header' >
                <div id='logo'>
                    <img src="../../public/images/friends_of_the_youth_logo.jpeg" alt="Friends of the youth">
                    <div>Friends of the youth</div>
                </div>

                <nav id='links'>
                    <span>About me</span>
                    <span>Vision</span>
                    <span>Mission</span>
                    <span>Contact</span>
                </nav>

            </header>
        `;
  }
}

customElements.define("app-header", AppHeader);
