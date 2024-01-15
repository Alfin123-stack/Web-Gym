class Section3 extends HTMLElement{
    connectedCallback(){
        this.render();
    }

    render(){
        this.innerHTML = `
        <section class="sct-3">
        <h1>Join Base and Transform Your <br> Body and Mind</h1>
        <!-- awal sct-1 -->
        <section class="wrap-sct">
            <div class="img-sct-1">
            </div>
            <article class="art-joinnow">
                <h3>Community</h3>
                <p>
                    I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.
                </p>
            </article>
        </section>
        <!-- akhir sct-1 -->

        <!-- awal sct-2 -->
        <section class="wrap-sct">

            <!-- awal gambar di section 2 mobile -->
            <div class="img-sct-middle img-sct2-mobile"></div>
            <!-- akhir gambar di section 2 mobile -->

            <article class="art-joinnow">
                <h3>Motivation</h3>
                <p>
                    I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.
                </p>
            </article>
            <div class="img-sct-middle">
        </section>
        <!-- akhir sct-2 -->

        <!-- awal sct-3 -->
        <section class="wrap-sct">
            <div class="img-sct-2">
            </div>
            <article class="art-joinnow">
                <h3>Result</h3>
                <p>
                    I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.
                </p>
            </article>
        </section>
        <!-- akhir sct-3 -->

    </section>
        `;
    }
}

customElements.define("section-3", Section3);
export default Section3;