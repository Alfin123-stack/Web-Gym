class FormFooter extends HTMLElement{
    connectedCallback(){
        this.render();
    }

    render(){
        this.innerHTML = `<div class="form">
        <h1>Let's Get Moving</h1>
        <p>Sign Up For Updates</p>
        <form action="">
            <div class="fullname">
                <label for="fullname">Full Name</label>
                <input type="text" id="fullname">
            </div>

            <div class="information">
                <div class="email">
                    <label for="email">Email</label>
                    <input type="email" id="email">
                </div>
                <div class="phone">
                    <label for="phone">Phone</label>
                    <input type="text" id="phone">
                </div>
            </div>

            <div class="message">
                <label for="textarea">
                    Type your message here...
                </label>
                <textarea id="textarea" rows="4"></textarea>
            </div>

            <div class="submit">
                <span>Thanks For Submitting!</span>
                <button type="submit">Submit</button>
            </div>
        </form>
    </div>`
    }
}

customElements.define("form-footer", FormFooter);
export default FormFooter;