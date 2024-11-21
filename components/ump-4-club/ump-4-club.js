//web component scoped dom
// DO NOT TOUCH THIS
let shadocx;

//component name
const componentName = "ump-4-club";
//reactive props
let propx = {};
//reactive var
let rex = {
  showModifyButton: true,
  showAssociationButton: false,
  showClub: false,
  club: {
    id: "",
    name: "",
  },
  inputError: false,
  loading: false,
};
//component logic
const logix = () => {
  const modifyAssociationBtn = $("#modify-assocaition");
  const setAssociationBtn = $("#set-assocaition");
  const deleteAssociationBtn = $("#delete-associtaion");
  const inputCardId = $("#input-card-id");

  const showSetAssociation = () => {
    rex.showModifyButton = false;
    rex.showAssociationButton = true;
  };

  const showAssociation = () => {
    rex.inputError = false;
    rex.showAssociationButton = false;
    (rex.showClub = true), (rex.loading = false);
  };

  const showNoAssociation = () => {
    rex.club = null;
    (rex.showClub = false), (rex.showAssociationButton = false);
    rex.showModifyButton = true;
    rex.loading = false;
  };

  modifyAssociationBtn.onclick = () => {
    showSetAssociation();
  };
  setAssociationBtn.onclick = async () => {
    if (!inputCardId.value) {
      rex.inputError = true;
    } else {
      rex.loading = true;
      inputCardId.value = "";
      const data = await fetch("/api/data.json").then((res) => res.json());
      rex.club = data.club;
      showAssociation();
    }
  };
  deleteAssociationBtn.onclick = () => {
    rex.loading = true;
    setTimeout(() => {
      showNoAssociation();
    }, 2000);
  };
};

//component html
let html =
  //html
  `
<div class="card-container">
    <div id="loading-overlay" ifx="rex.loading">
        <div>
            <div id="loading-icon"></div>
        </div>
    </div>
    <!--show association-->
    <div ifx="rex.showModifyButton">
      <div class="card-body">
          <div class="image"></div>
          <div class="card-content">
            <h1>Associazione carta club</h1>
            <p>Associa la tua Carta Fedeltà a quella del tuo club o della tua scuola.
            Riceveranno un credito virtuale pari al 50% dei tuoi punti.
            Fai sentire da subito il tuo supporto!</p>
            <button class="cta-button" id="modify-assocaition">Modifica</button>
          </div>
      </div>
    </div>
    <!--modify association-->
    <div ifx="rex.showAssociationButton">
      <div class="card-body">
          <div class="image"></div>
          <div class="card-content">
            <h1>Associazione carta club</h1>
            <div>
              <p>Carta Club / Carta scuola</p>
              <input id="input-card-id" type="text">
              <p ifx="rex.inputError" class="text-error">Inserisci un cardId</p>
            </div>
            <button class="cta-button" id="set-assocaition">Associa</button>
          </div>
      </div>
    </div>
    <!--show association-->
    <div ifx="rex.showClub">
      <div class="card-body">
        <div class="image"></div>
        <div class="card-content">
          <h1>Associazione carta club</h1>
          <div>
            <p>Hai associato con successo la tua Carta Fedeltà con quella di:<br><span class="club-id">$rex.club.name<span></p>
          </div>
          <button class="cta-button" id="delete-associtaion">Interrompi associazione</button>
        </div>
      </dìv>
    </div>    
</div>
`;
//component style
const style =
  //css
  `
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
    background-color: #3643ba;
    border: 4px solid #3643ba;
    animation: loading-rotation 1s linear infinite;
}
button{
    border: 0px;
    margin: 12px 0px;
    padding: 8px 0px;
    background-color: #3643ba;
    border-radius: 32px;
    color: white;
    cursor: pointer;
}
.card-container{
    position: relative;
    box-shadow: 0 6px 6px #00537d1a;
    padding: 32px;
    // border-radius: 6px;
    width: 300px;
    min-height: 250px;
    border-color: #e1e0df;
    background-color: white;
}
.card-body {
    display: flex;
    flex-direction: column;
    gap: 32px;
}
.card-content {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: center;
}
.card-content p {
    flex: 1;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
}
h1{
    font-size: 20px;
    text-align: center;
}
p{
    font-size: 14px;
    line-height: 21px; 
}
.image{
    width: 100%;
    background-color: #80808066;
    // border-radius: 6px;
    height: 250px;
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

  @media (min-width: 769px) {
    h1{
        text-align: left;
    }
    .card-body {
        flex-direction: row;
    }
    .card-container {
        width: 800px;
    }
    .card-content {
        width: 100%;
        text-align: left;
    }
  }
  
`;
// library functions
export class WebComponent extends HTMLElement {
  static observedAttributes = Object.keys(propx);
  shadowDom = this.attachShadow({
    mode: "open",
  });

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
        cycleObject("rex", rex, [], true);
        updateIfRender();
        return true;
      },
    });
    //propx proxy observer
    propx = new Proxy(propx, {
      set(target, property, value) {
        target[property] = value;
        updateReactiveText("porpx", property, value);
        updateIfRender();
        return true;
      },
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
  cycleObject("propx", propx);
  cycleObject("rex", rex);
  shadocx.innerHTML = html + `<style>${style}</style>`;
  updateIfRender();
};
const compileReactiveText = (type, dotChain, dashChain, value) => {
  html = html.replace(dotChain, `<span ${dashChain}>${value}</span>`);
};
//update text
const updateReactiveText = (selector, value) => {
  shadocx.querySelectorAll(`[${selector}]`).forEach((el) => {
    el.textContent = value;
  });
};
//if render
const updateIfRender = () => {
  const ifElements = shadocx.querySelectorAll("[ifx]");
  ifElements.forEach((el) => {
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
  });
};
//jquery style get element by id
const $ = (id) => {
  if (id[0] === "#") return shadocx.querySelector(id);
  if (id[0] === ".") return shadocx.querySelectorAll(id);
};

const cycleObject = (type, obj, chain = [], update = false) => {
  for (let key in obj) {
    if (obj[key] !== null && obj[key] !== undefined) {
      if (typeof obj[key] === "object") {
        chain.push(key);
        cycleObject(type, obj[key], chain);
      } else {
        const dotChain = `$${type}${
          chain.length ? "." + chain.join(".") : ""
        }.${key}`;
        const dashChain = `${type}${
          chain.length ? "-" + chain.join("-") : ""
        }-${key}`;
        if (!update) {
          compileReactiveText(type, dotChain, dashChain, obj[key]);
        } else {
          updateReactiveText(dashChain, obj[key]);
        }
      }
    }
  }
};
//register webcomponent into browser
customElements.define(componentName, WebComponent);
