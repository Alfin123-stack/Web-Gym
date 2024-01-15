class NavTrial extends HTMLElement{
    connectedCallback(){
        this.render();
    }

    render(){
        this.innerHTML = `
        <div class="nav-trial">
        <div class="fit-studio">
            <a href="">
                <p><span>Fit</span> / Studio</p>
            </a>
        </div>
        <div class="book-trial">
            <a href="">
                <p>Book a trial Class Now</p>
            </a>
            <a class="hamburger-menu">
                <i class="fa-solid fa-bars"></i>
            </a>
        </div>

        <!-- awal btn mobile -->
        <div class="btn-mobile">
            <button class="btn">Membership</button>
        </div>
        <!-- akhir btn mobile -->
    </div>
        `
    }
}

customElements.define("nav-trial",NavTrial);
export default NavTrial;