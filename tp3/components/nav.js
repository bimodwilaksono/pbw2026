class NavComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <nav>
        <ul id="nav-list">
          <li><a href="home.html" id="nav-home">Home</a></li>
          <li><a href="gallery.html" id="nav-gallery">Gallery</a></li>
          <li><a href="article.html" id="nav-article">Article</a></li>
        </ul>
      </nav>
    `;
  }
}

customElements.define('nav-component', NavComponent);