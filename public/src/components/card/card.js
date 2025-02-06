class Card extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"});
    }

    static get observedAttributes(){
        return ["title","subtitle","text"]
    }

    attributeChangedCallback(propName,oldValue,newValue){
        this[propName] = newValue;
        this.render();
    }

    connectedCallback(){
        this.render();
    }

    render(){
        this.shadowRoot.innerHTML = `
        <div>
            <h1>${this.title}</h1>
            <h5>${this.subtitle}</h5>
            <p>${this.text}</p>
        </div>
        `
    }
}

export default Card;
customElements.define('my-card',Card);