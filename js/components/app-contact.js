class AppContact extends HTMLElement {
    connectedCallback() {
        this.innerHTML = /* html */ `
            <section id='contact' class="contact">
                <h1>Contact</h1>
                <div>
                    <div>If you would like to contact me :</div>
                    <ul>
                        <li>
                            <img src="../../public/images/whatsapp.png" alt="whatsapp contact of Aimé Clovis">
                            <span>: +256769763678</span>
                        </li>

                        <li>
                            <img src="../../public/images/gmail.png" alt="email of Aimé Clovis">
                            <a href="mailto:aimearcadearakaza@gmail.com">: aimearcadearakaza@gmail.com</a>
                        </li>

                        <li>
                            <img src="../../public/images/facebook.png" alt="Facebook page of Aimé Clovis">
                            <a href="https://www.facebook.com/share/1F2y6NvEon/">: https://www.facebook.com/share/1F2y6NvEon/</a>
                        </li>

                        <li>
                            <img src="../../public/images/instagram.png" alt="instagram page of Aimé Clovis">
                            <a href="https://www.instagram.com/igiraneza_aime_clovis?stkn=MW1vZWE2NmQ3cWMyMQ==">: https://www.instagram.com/igiraneza_aime_clovis?stkn=MW1vZWE2NmQ3cWMyMQ==</a>
                        </li>

                        <li>
                            <img src="../../public/images/twitter" alt="x page of Aimé Clovis">
                            <a href="https://x.com/Aimeclovis3">: https://x.com/Aimeclovis3</a>
                        </li>

                        <li>
                            <img src="../../public/images/linkedin.png" alt="linkedin page of Aimé Clovis">
                            <a href="https://www.linkedin.com/in/aim%C3%A9-clovis-igiraneza-b330a6335">: https://www.linkedin.com/in/aim%C3%A9-clovis-igiraneza-b330a6335</a>
                        </li>

                        <li>
                            <img src="../../public/images/youtube.png" alt="youtube page of Aimé Clovis">
                            <a href="https://youtube.com/@igiranezaaimeclovis">: https://youtube.com/@igiranezaaimeclovis</a>
                        </li>

                    </ul>
                </div>
            </section>
        `
    }
}

customElements.define('app-contact', AppContact)
