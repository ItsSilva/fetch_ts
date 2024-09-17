(()=>{"use strict";var e;!function(e){e.name="name",e.species="species",e.gender="gender",e.house="house",e.yearofbirth="yearofbirth"}(e||(e={}));class t extends HTMLElement{static get observedAttributes(){return Object.keys(e)}attributeChangedCallback(t,n,r){t===e.yearofbirth?this.yearofbirth=r?Number(r):void 0:this[t]=r}constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){this.shadowRoot&&(this.shadowRoot.innerHTML=`\n            <section>\n            <h1>${this.name||"No Name"}</h1>\n            <p>${this.species||"No Species"}</p>\n            <p>${this.gender||"No Gender"}</p>\n            <p>${this.house||"No House"}</p>\n            <p>${this.yearofbirth||"No Year of Birth"}</p>\n            </section>`)}}customElements.define("card-character",t);class n extends HTMLElement{constructor(){super(),this.cards=[],this.dataApi=[],this.attachShadow({mode:"open"})}connectedCallback(){return e=this,t=void 0,r=function*(){var e,t,n,r;this.dataApi=yield(e=void 0,t=void 0,n=void 0,r=function*(){try{return yield fetch("https://hp-api.onrender.com/api/characters").then((e=>e.json()))}catch(e){console.log("Error fetching data: ",e)}},new(n||(n=Promise))((function(o,s){function a(e){try{c(r.next(e))}catch(e){s(e)}}function i(e){try{c(r.throw(e))}catch(e){s(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,i)}c((r=r.apply(e,t||[])).next())}))),this.createCardsHarry(),this.render()},new((n=void 0)||(n=Promise))((function(o,s){function a(e){try{c(r.next(e))}catch(e){s(e)}}function i(e){try{c(r.throw(e))}catch(e){s(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,i)}c((r=r.apply(e,t||[])).next())}));var e,t,n,r}createCardsHarry(){this.dataApi.forEach((t=>{const n=this.ownerDocument.createElement("card-character");n.setAttribute(e.name,t.name),n.setAttribute(e.species,t.species),n.setAttribute(e.gender,t.gender),n.setAttribute(e.house,t.house),n.setAttribute(e.yearofbirth,t.yearOfBirth),this.cards.push(n)}))}render(){this.shadowRoot&&(this.shadowRoot.innerHTML="\n            <section>\n            <h1>Harry Potter Characters</h1> \n            </section>",this.cards.forEach((e=>{var t;null===(t=this.shadowRoot)||void 0===t||t.appendChild(e)})))}}customElements.define("app-container",n)})();