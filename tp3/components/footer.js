class Footer extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
            <footer id="main-footer">
                <p>Semarang 2023</p>
            </footer>
        `;
  }
}

customElements.define('footer-component', Footer);