class Section5 extends HTMLElement {
  connectedCallback () {
    this.render()
  }

  render () {
    this.innerHTML = `
        <section class="sct-5">
            <h1>Follow Us @BaseFitStudio</h1>
            <div class="wrap-sct5">
                <div data-tilt class="img-sct5 foto-1">
                    <div class="text">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates modi quaerat quas </p>
                    </div>
                </div>
                <div data-tilt class="img-sct5 foto-2">
                    <div class="text">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates modi quaerat quas </p>
                    </div>
                </div>
                <div data-tilt class="img-sct5 foto-3">
                    <div class="text">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates modi quaerat quas </p>
                    </div>
                </div>
                <div data-tilt class="img-sct5 foto-4">
                    <div class="text">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates modi quaerat quas </p>
                    </div>
                </div>
                <div data-tilt class="img-sct5 foto-5">
                    <div class="text">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates modi quaerat quas </p>
                    </div>
                </div>
            </div>
        </section>`
  }
}

customElements.define('section-5', Section5)
export default Section5
