class AddressFooter extends HTMLElement {
  connectedCallback () {
    this.render()
  }

  render () {
    this.innerHTML = `
        <div class="address">
        <!-- awal tombol footer mobile section -->
        <a href="#" class="btn-address-mobile">
            Book A Trial Class Now
        </a>
        <!-- akhir tombol footer mobile section -->
        <h1>
            500 Terry Francine Street
            <br>San Francisco, CA 94158
            <br>Email: info@mysite.com
        </h1>
        <p>Tel: 123-456-7890   |    Fax: 123-456-7890</p>

        <a href="#" class="btn-address-dekstop">
            Book A Trial Class Now
        </a>
    </div>
        `
  }
}

customElements.define('address-footer', AddressFooter)
export default AddressFooter
