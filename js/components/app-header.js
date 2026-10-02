class AppHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */ `
            <header class='header' >
                <div class='logo'>
                    <img src="../../public/images/friends_of_the_youth_logo.jpeg" alt="Friends of the youth">
                    <div>Friends of the youth</div>
                </div>

                <nav class='nav'>
                    <!-- normal links -->
                    <div class='links'>
                        <a href="#">About me</a>
                        <a href="#">Vision</a>
                        <a href="#">Mission</a>
                        <a href="#">Contact</a>
                    </div>


                    <!-- hamburger display under 500px -->
                    <div class='hamburger'>
                        <div class='chevron_up'></div>
                        <div class='chevron_down'></div>
                    </div>
                </nav>

            </header>
        `;
  }
}

customElements.define("app-header", AppHeader);

/*declaration of variables that links to the corresponding html tag */
const linksElement = document.querySelector('.links');
const hamburgerElement = document.querySelector('.hamburger');
const chevronDownElement = document.querySelector('.chevron_down');
const chevronUpElement = document.querySelector('.chevron_up');
