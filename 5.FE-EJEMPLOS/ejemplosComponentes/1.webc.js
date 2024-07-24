class MiElemento extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    this.render();
  }

  //que quiero renderizar
  render() {
    this.shadowRoot.innerHTML = /*html*/ `
        <style>
          p {
            color: blue;
          }
        </style>
        <p>curso de full stack 2024</p>
      `;
  }
}

//donde quiero renderizar
customElements.define("mi-elemento", MiElemento);
