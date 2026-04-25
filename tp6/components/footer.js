class FooterComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer class="py-5 bg-white border-top mt-5">
        <div class="container text-center">
          <div class="d-flex justify-content-center gap-4 mb-3 fs-2">
            <a href="#" class="text-dark"><i class="bi bi-instagram"></i></a>
            <a href="#" class="text-dark"><i class="bi bi-twitter-x"></i></a>
            <a href="#" class="text-dark"><i class="bi bi-whatsapp"></i></a>
          </div>
          <p class="text-secondary fw-medium mb-0">Bimo Dwi Laksono &copy; 2026</p>
        </div>
      </footer>
    `;
  }
}

customElements.define('footer-component', FooterComponent);
