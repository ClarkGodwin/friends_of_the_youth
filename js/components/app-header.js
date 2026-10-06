class AppHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */ `
            <header class='header' >
                <div class='logo'>
                    <img src="public/images/friends_of_the_youth_logo.jpeg" alt="Friends of the youth">
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
const linksElement = document.querySelector(".links");
const hamburgerElement = document.querySelector(".hamburger");
const chevronDownElement = document.querySelector(".chevron_down");
const chevronUpElement = document.querySelector(".chevron_up");

//in the case where this variable is true, the links are not visible because the user hasn't clicked yet the chevron down icon since it's the one shown by default when the screen is under 500px
let isChevronDownVisible = true;
let isChevronUpVisible = false;

const deviceScreenSize = window.matchMedia("(min-width: 500px)");

function HamburgerVisibilitySwitch() {
    if(!deviceScreenSize.matches){
        isChevronUpVisible = isChevronDownVisible ? false : true;
      
        chevronDownElement.style.display = isChevronDownVisible ? "block" : "none";
        chevronUpElement.style.display = isChevronDownVisible ? "none" : "block";
        linksElement.style.display = isChevronDownVisible ? "none" : "flex";
    }
    else {
        chevronDownElement.style.display = 'none';
        chevronUpElement.style.display = 'none';
        linksElement.style.display = "flex";
    }
}

//this has to be executed so that at the first load, whatever has to be displayed will be displayed
HamburgerVisibilitySwitch()

//because there's no default resize listener for the media variable, this event listener had to be added
window.addEventListener('resize', HamburgerVisibilitySwitch)

//when the user click to see the links
chevronDownElement.addEventListener("click", () => {
  isChevronDownVisible = false;
  isChevronUpVisible = true;
  HamburgerVisibilitySwitch();
});

chevronUpElement.addEventListener("click", () => {
  isChevronDownVisible = true;
  isChevronUpVisible = false;
  HamburgerVisibilitySwitch();
});
