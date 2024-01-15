class Section4 extends HTMLElement{
    connectedCallback(){
        this.render();
    }

    render(){
        this.innerHTML = `
        <section class="sct-4">
        <h1>Join us on <br>mobile!</h1>
        <p>The Spaces by Wix app lets you easily <br>stay in touch and updated with us on the <br>go. Just add your phone number and <br>we’ll text you a link to download the app.</p>

        <form action="">
            <input type="text" id="prefix" placeholder="+1">
            <input type="text" id="phone-form" placeholder="Phone Number">

            <button type="submit" class="btn">Send</button>
        </form>

        <div class="img-download">
            <a href="#">
                <div class = "img-playstore"></div>
            </a>
            <a href="#">
                <div class = "img-appstore"></div>
            </a>
        </div>

    </section>
        `;
    }
}

customElements.define("section-4", Section4);
export default Section4;