class NavbarComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <nav class="navbar navbar-expand-lg navbar-light bg-white py-3 sticky-top">
        <div class="container">
          <a class="navbar-brand fw-bold" href="index.html">My Daily Journal</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul class="navbar-nav gap-lg-4 text-dark ms-auto">
              <li class="nav-item"><a class="nav-link" href="index.html">Home</a></li>
              <li class="nav-item"><a class="nav-link" href="article.html">Article</a></li>
              <li class="nav-item"><a class="nav-link" href="gallery.html">Gallery</a></li>
            </ul>
          </div>
        </div>
      </nav>
    `;
  }
}

customElements.define('navbar-component', NavbarComponent);
