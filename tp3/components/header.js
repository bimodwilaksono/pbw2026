class HeaderComponent extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <header>
        <h1>Daily Journal</h1>
        <p>Ini adalah buku catatan online milik <strong id="owner-name">Bimo Laksono</strong> yang sekarang
          sedang menempuh pendidikan untuk mendapatkan gelar sarjana pada program studi PJJ Informatika, Universitas
          Dian Nuswantoro.</p>
      </header>
    `;
  }
}

customElements.define('header-component', HeaderComponent);
