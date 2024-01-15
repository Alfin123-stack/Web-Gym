class AsidenavFooter extends HTMLElement{
    connectedCallback(){
        this.render();
    }


    render(){
        this.innerHTML = `
        <aside>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Classes</li>
            <li>Challanges</li>
            <li>Plans</li>
            <li>Contact</li>
        </ul>
        <div class="socialmedia">
            <i class="fa-brands fa-youtube"></i>
            <i class="fa-brands fa-square-instagram"></i>
            <i class="fa-brands fa-facebook"></i>
        </div>
    </aside>
        `
    }
}

customElements.define("asidenav-footer",AsidenavFooter);
export default AsidenavFooter;