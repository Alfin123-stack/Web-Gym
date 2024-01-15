class Section1 extends HTMLElement{
    connectedCallback(){
        this.render();
    }

    render(){
        this.innerHTML = `
        <section class="sct-1">
        <div class="img-sct-1"></div>
        <article class="art-sct-1">
            <h1>About Base <br>Fit Studio</h1>
            <p>
                I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.
            </p>
            <button class="btn">Read More</button>
        </article>
        <!-- awal gambar section1 mobile -->
        <div class="img-sct-1 img-sct1-mobile"></div>
        <!-- akhir gambar section1 mobile -->
        </section>
        `;
    }
}

customElements.define("section-1", Section1);
export default Section1;