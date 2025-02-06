import * as components from './components/indexPadre.js'

class AppContainer extends HTMLElement {

    constructor(){
        super();
        this.attachShadow({mode: "open"});
    }

    connectedCallback(){
        this.render();
    }

    render(){
        this.shadowRoot.innerHTML = `
        <my-card title="Holaa" subtitle="Como estás" text="chauuu"></my-card>
        `
    }
}

customElements.define('app-container',AppContainer);