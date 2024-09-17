export enum Attribute {
    'name' = 'name',
    'species' = 'species',
    'gender' = 'gender',
    'house' = 'house',
    'yearofbirth' = 'yearofbirth',
}

class Card extends HTMLElement {
    name?: string;
    species?: string;
    gender?: string;
    house?: string;
    yearofbirth?: number;

    static get observedAttributes() {
        return Object.keys(Attribute);
    };

    attributeChangedCallback(
        propName: Attribute, 
        oldValue: string | undefined, 
        newValue: string | undefined){
            switch (propName) {
                case Attribute.yearofbirth:
                    this.yearofbirth = newValue ? Number(newValue) : undefined;
                    break;
                
                default:
                    this[propName] = newValue;
                    break;
            }
        }

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    };

    connectedCallback() {
        this.render();
    };

    render(){
        if(this.shadowRoot){
            this.shadowRoot.innerHTML = `
            <section>
            <h1>${this.name || 'No Name'}</h1>
            <p>${this.species || 'No Species'}</p>
            <p>${this.gender || 'No Gender'}</p>
            <p>${this.house || 'No House'}</p>
            <p>${this.yearofbirth || 'No Year of Birth'}</p>
            </section>`;
        }
    }
}

customElements.define('card-character', Card);
export default Card;