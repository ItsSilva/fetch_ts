// import * as components from './components/index';
import Card, { Attribute } from './components/Card/Card';
import { getHarryData } from './services/fetchHarryAPI'
import { getPokeData } from './services/fetchPokeAPI'

class AppContainer extends HTMLElement {
    cards: Card[] = [];
    dataApi: any[] = [];
    pokeData: any = {};

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    async connectedCallback() {
        // We obtain the data from the Harry Potter API and save it in the dataApi variable
        this.dataApi = await getHarryData();
        this.pokeData = await getPokeData();
        // Create the cards with the dataApi
        this.createCardsHarry();  // Make sure the function to create the cards is called
        this.createCardsPoke();
        this.render();
    }

    createCardsHarry(){
        this.dataApi.forEach((e) => {
            const card = this.ownerDocument.createElement('card-character') as Card;
            card.setAttribute(Attribute.name, e.name);
            card.setAttribute(Attribute.species, e.species);
            card.setAttribute(Attribute.gender, e.gender);
            card.setAttribute(Attribute.house, e.house);
            card.setAttribute(Attribute.yearofbirth, e.yearOfBirth); // This must match the correct name
            this.cards.push(card);
        });
    }

    createCardsPoke(){
        console.log(this.pokeData);
    }

    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = `
            <section>
            <h1>Harry Potter Characters</h1> 
            </section>`;
        
        // Make sure you render the cards correctly0
        this.cards.forEach((card) => {
            this.shadowRoot?.appendChild(card);
        });
        }
    }
}

customElements.define('app-container', AppContainer);