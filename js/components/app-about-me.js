class AppAboutMe extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */ `
            <section id='about' class='about'>About me</section> 
        `;
  }
}

customElements.define("app-about-me", AppAboutMe);
