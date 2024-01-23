class Section2 extends HTMLElement {
  connectedCallback () {
    this.render()
  }

  render () {
    this.innerHTML = `
        <section class="sct-2">
        <h1>Our Classes</h1>
        <!-- awal classes 1 -->
        <div class="category-class">
            <a href="#"><h3>Base HIIT</h3></a>
            <div class="timebutton-class">
                <p>45 min</p>
                <button class="btn-classes">Book Now</button>
            </div>
        </div>
        <!-- akhir classes 1 -->
        <!-- awal classes 2 -->
        <div class="category-class middle-class">
            <a href="#"><h3>Base Strength</h3></a>
            <div class="timebutton-class">
                <p>45 min</p>
                <button class="btn-classes">Book Now</button>
            </div>
        </div>
        <!-- akhir classes 2 -->
        <!-- awal classes 3 -->
        <div class="category-class">
            <a href="#"><h3>Base Endurance</h3></a>
            <div class="timebutton-class">
                <p>45 min</p>
                <button class="btn-classes">Book Now</button>
            </div>
        </div>
        <!-- akhir classes 3 -->
    </section>
        `
  }
}

customElements.define('section-2', Section2)
export default Section2
