class AppHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */ `
            <header id='header' >
                <div id='logo'>
                    <img src="../../public/images/friends_of_the_youth_logo.jpeg" alt="Friends of the youth">
                    <div>Friends of the youth</div>
                </div>

                <nav id='links'>
                    <a href="#">About me</a>
                    <a href="#">Vision</a>
                    <a href="#">Mission</a>
                    <a href="#">Contact</a>
                </nav>

            </header>
        `;
  }
}

customElements.define("app-header", AppHeader);
