class LandingPage extends HTMLElement {
  connectedCallback () {
    this.render()
  }

  render () {
    this.innerHTML = `
        <header class="landingpage">

        <p class="p-dekstop">Base Fit- Functional Fitness Studio</p>
        <h1 data-tilt>Where Fitness <br> Become Your <br> LifeStyle</h1>
        <!-- paragraf mobile -->
        <div class="p-mobile">
            <p>Base Fit- Functional <br>Fitness Studio</p>
        </div>
        <!-- akhir paragraf mobile -->
        <button class="btn-landingpage btn">Book Now</button>
    </header>
        `
  }
}

customElements.define('landing-page', LandingPage)
export default LandingPage
