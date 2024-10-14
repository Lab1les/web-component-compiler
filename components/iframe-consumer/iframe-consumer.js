//web component scoped dom
// DO NOT TOUCH THIS
let shadocx;

//component name
const componentName = "iframe-consumer";
//reactive props
let propx = {

}
//reactive var
let rex = {
    showModifyButton: true,
    showAssociationButton: false,
    showClubId: false,
    clubId: null,
    inputError: false,
    loading: false
}
//component logic
const logix = () => {
    const modifyAssociationBtn = $("#modify-assocaition");
    const setAssociationBtn = $("#set-assocaition");
    const deleteAssociationBtn = $("#delete-associtaion");
    const inputCardId = $("#input-card-id");

    const showSetAssociation = () => {
        rex.showModifyButton = false;
        rex.showAssociationButton = true;
    }

    const showAssociation = () => {
        rex.inputError = false;
        rex.showAssociationButton = false;
        rex.showClubId = true,
        rex.loading = false;
    }

    const showNoAssociation = () => {
        rex.clubId = null;
        rex.showClubId = false,
        rex.showAssociationButton = false;
        rex.showModifyButton = true;
        rex.loading = false;
    }

    //modifyAssociationBtn.onclick = () => {
    //    showSetAssociation();
    //};
    setAssociationBtn.onclick = () => {
        if (!inputCardId.value) {
            rex.inputError = true;
        }
        else {
            rex.loading = true;
            rex.clubId = inputCardId.value;
            inputCardId.value = "";
            setTimeout(() => {
                showAssociation();
            }, 2000)
        }
    }
    deleteAssociationBtn.onclick = () => {
        rex.loading = true;
        setTimeout(() => {
            showNoAssociation();
        }, 2000)
    }
}
//component html
const html = //html
    `
<div class="card-container">
    <div id="loading-overlay" ifx="rex.loading">
        <div>
            <div id="loading-icon"></div>
        </div>
    </div>
    <h1>Associazione carta club</h1>
    <!--show association-->
    <div ifx="rex.showModifyButton">
        <p>Associa la tua Carta Fedeltà a quella del tuo club o della tua scuola.
        Riceveranno un credito virtuale pari al 50% dei tuoi punti.
        Fai sentire da subito il tuo supporto!</p>
        <div class="image"></div>
        <iframe id="iframe" src="http://127.0.0.1:5500/components/iframe/iframe.html"></iframe>
    </div>
    <!--modify association-->
    <div ifx="rex.showAssociationButton">
        <p>Carta Club / Carta scuola</p>
        <input id="input-card-id" type="text">
        <p ifx="rex.inputError" class="text-error">Inserisci un cardId</p>
        <button class="cta-button" id="set-assocaition">Associa</button>
    </div>
    <!--show association-->
    <div ifx="rex.showClubId">
        <p>Hai associato con successo la tua Carta Fedeltà con quella di:<br><span class="club-id">$rex.clubId<span></p>
        <div class="image"></div>
        <button class="cta-button" id="delete-associtaion">Interrompi associazione</button>
    </div>    
</div>
`
//component style
const style = //css
`
iframe{
    border: none;
    width: 100%;
    margin-top: 12px;
}
#iframe{
    height: 36px;
}
#loading-overlay{
    position: absolute;
    width: 100%;
    height: 100%;
    transform: translateX(-50%) translateY(-50%);
    left: 50%;
    top: 50%;
    background-color: white;
    border-radius: 6px;
}
#loading-overlay > div{
    display: flex !important;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
}
#loading-icon{
    border-radius: 0px;
    width: 30px;
    height: 30px;
    background-color: #3e60d7;
    border: 4px solid #3e60d7;
    animation: loading-rotation 1s linear infinite;
}
button{
    border: 0px;
    margin: 12px 0px;
    padding: 8px 0px;
    background-color: #3e60d7;
    border-radius: 6px;
    color: white;
    cursor: pointer;
}
.card-container{
    position: relative;
    box-shadow: 0px 0px 5px 0px #00000030;
    padding: 12px 16px;
    border-radius: 6px;
    width: 300px;
    min-height: 300px;
    background-color: white;
}
h1{
    font-size: 16px;
    text-align: center;
}
p{
    font-size: 14px;
}
.image{
    width: 100%;
    background-color: #80808066;
    border-radius: 6px;
    height: 120px;
    background-image: url("https://plus.unsplash.com/premium_photo-1663050844860-548dbfcc79a9?q=80&w=3538&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
    background-size: cover;
    background-position: center;
}
.cta-button{
    width: 100%;
}
.club-id{
    font-weight: bold;
    font-size: 18px;
    margin: 10px 0px;
    display: block;
}
.text-error{
    font-size: 12px;
    color: red;
    margin: 2px 0px;
}
#input-card-id{
    width: 100%;
    box-sizing: border-box;
    padding: 6px;
}
@keyframes loading-rotation {
    0% {
        border-radius: 0px;
        transform: rotateZ(0deg);
    }
    50% {
        border-radius: 20px;
        transform: rotateZ(180deg);
    }
    100% {
        border-radius: 0px;
        transform: rotateZ(360deg);
    }
  }
  
`

// library functions
export class WebComponent extends HTMLElement {
    static observedAttributes = Object.keys(propx);
    shadowDom = this.attachShadow({ mode: "open" });

    //init component
    constructor() {
        super();
        shadocx = this.shadowDom;
    }

    //element is loaded
    connectedCallback() {
        //inject first html
        initHtml();
        //rex proxy observer
        rex = new Proxy(rex, {
            set(target, property, value) {
                target[property] = value;
                updateReactiveText("rex", property, value);
                updateIfRender();
                return true;
            }
        });
        //propx proxy observer
        propx = new Proxy(propx, {
            set(target, property, value) {
                target[property] = value;
                updateReactiveText("porpx", property, value)
                updateIfRender();
                return true;
            }
        });
        logix();
    }

    //listen for props change, update html text
    attributeChangedCallback(propName, oldValue, newValue) {
        propx[propName] = newValue;
    }
}
//bind propx to text element, add style element, add js
const initHtml = () => {
    let compiledHtml = html;
    Object.keys(propx).forEach(key => { compiledHtml = compiledHtml.replace(`$propx.${key}`, `<span propx-${key}>${propx[key]}</span>`) });
    Object.keys(rex).forEach(key => { compiledHtml = compiledHtml.replace(`$rex.${key}`, `<span rex-${key}>${rex[key]}</span>`) });
    shadocx.innerHTML = compiledHtml + `<style>${style}</style>`;
    updateIfRender();
}
//update text
const updateReactiveText = (type, id, value) => {
    shadocx.querySelectorAll(`[${type}-${id}]`).forEach(el => { el.textContent = value })
}
//if render
const updateIfRender = () => {
    const ifElements = shadocx.querySelectorAll("[ifx]");
    ifElements.forEach(el => {
        const value = el.getAttribute("ifx").split(".");
        if (value[0] === "rex") {
            el.style.display = rex[value[1]] ? "block" : "none";
        }
        if (value[0] === "!rex") {
            el.style.display = !rex[value[1]] ? "block" : "none";
        }
        if (value[0] === "!propx") {
            el.style.display = !rex[value[1]] ? "block" : "none";
        }
        if (value[0] === "propx") {
            el.style.display = rex[value[1]] ? "block" : "none";
        }
    })
}
//jquery style get element by id
const $ = (id) => {
    if (id[0] === "#") return shadocx.querySelector(id);
    if (id[0] === ".") return shadocx.querySelectorAll(id);
};
//register webcomponent into browser
customElements.define(componentName, WebComponent);