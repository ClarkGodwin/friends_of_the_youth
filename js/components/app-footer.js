class AppFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = /* html */ `
            <footer>
                <h3>Licence du contenu :</h3> 
                Sauf mention contraire, les textes et contenus de ce site sont publiés sous licence Creative Commons CC BY-NC-ND 4.0. 
                Vous êtes libre de partager le contenu en citant la source, sans usage commercial ni modification.
            </footer>
        `
    }
}

customElements.define('app-footer', AppFooter)
