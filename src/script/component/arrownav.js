class ArrowNav extends HTMLElement {
  connectedCallback () {
    this.render()
  }

  render () {
    this.innerHTML = `
        <div class="arrow-nav">
            <a href="#home">
                <i class="fa-solid fa-chevron-up"></i>
            </a>
        </div>
        `
  }
}

customElements.define('arrow-nav', ArrowNav)
export default ArrowNav
