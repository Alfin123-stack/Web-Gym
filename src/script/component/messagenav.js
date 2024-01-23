class MessageNav extends HTMLElement {
  connectedCallback () {
    this.render()
  }

  render () {
    this.innerHTML = `
        <div class="message-nav">
            <a href=""><i class="fa-solid fa-comment"></i></a>
        </div>
        `
  }
}

customElements.define('message-nav', MessageNav)
export default MessageNav
