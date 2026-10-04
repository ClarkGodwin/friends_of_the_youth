class AppAbout extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */ `
            <section id='about' class="about">
                <h1>About me</h1>

                <div class="content">
                    <div>
                        <div class="intro">
                            <span>Igiraneza Aimé Clovis</span> is a Burundian youth leader, activist and founder of the organization Friends of the Youth. His work focuses on promoting children and young people, as well as building peace and leadership skills.
                        </div>

                        <div class="activities">
                            <h2>Key activities and commitment : </h2>

                            <div>
                                <span>Founder of Friends of the Youth:</span> He founded this organization with the vision of uniting children under 18 in Burundi, helping them achieve their life goals, and training them in leadership skills. His guiding principle is that no one but the local people themselves can build their own homeland.
                            </div>

                            <div>
                                <span>Community involvement and awards:</span> He is actively involved in international networks such as the Rotary Club , where he has publicly acknowledged the organization's support of educational programs. He also shares platforms for young peacemakers, such as the Billion Acts of Peace Changemaker Fellowship
                            </div>
                        </div>
                    </div>

                    <img src="../../public/images/clovis_picture.jpeg" alt="Igiraneza Aimé Clovis">
                </div>
            </section> 
        `;
  }
}

customElements.define("app-about", AppAbout);
