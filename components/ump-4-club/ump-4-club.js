//web component scoped dom
// DO NOT TOUCH THIS
let shadocx;

// X-API-KEY
const X_API_KEY = "5f1f6cb5-bcd2-4f14-af4c-cdf6cd67b0b1";
// AUTH TOKEN
const NFS_AUTH =
  "eyJwYXNzcG9ydCI6eyJ1c2VyIjp7ImFjY2Vzc1Rva2VuIjoiZXlKaGJHY2lPaUpTVXpJMU5pSXNJblI1Y0NJNklrcFhWQ0o5LmV5SnpkV0lpT2lKbU4yVXhNalppTXkxak5qazNMVFJpT0RZdE9HSTNNUzB4Tnpsa05tWXhNVFEwWXpraUxDSnBjM01pT2lKb2RIUndjem92TDJGd2FTMWxkUzV3Y21Wd2NtOWtMbVJsWTJGMGFHeHZiaTV1WlhRdlkyOXVibVZqZENJc0luTnZZMmxoYkY5dmNtbG5hVzRpT25SeWRXVXNJbUYxZEdodmNtbDBhV1Z6SWpwYklsSlBURVZmVlZORlVpSmRMQ0pqYkdsbGJuUmZhV1FpT2lJek16VmpNamN5TVMwNU1UVTRMVFJoT1RrdE9UTXhZeTFqWTJWaE1qQTJZekJtWkdRaUxDSnphV1FpT2lJd04yVmpNbU5sWVMwek5tSm1MVFJpTVRNdFlqWTFPQzA0TVRrNE16STJOalpqWWpBaUxDSmhkWFJvWDNScGJXVWlPakUzTWpreE5UUTNPRGtzSW5OamIzQmxJanBiSW1GalkyOTFiblE2Y205c1pYTWlMQ0ppYVhKMGFHUmhkR1VpTENKblpXNWtaWElpTENKeWIyeGxjeUlzSW14bFoyRnNMV1Z1ZEdsMGVTSXNJbTl3ZEdsdWN5SXNJbUZqWTI5MWJuUTZjM1J2Y21VaUxDSmhZMk52ZFc1ME9tSnBjblJvWkdGMFpTSXNJbTl3ZEdsdWN6cDNjbWwwWlNJc0luQjFjbU5vWVhObGN6cDNjbWwwWlNJc0luQmxjbk52Ym1Gc1gyNTFiV0psY25NaUxDSmhZMk52ZFc1ME9uTm9hWEJ3YVc1blgyRmtaSEpsYzNNaUxDSnphR2x3Y0dsdVoxOWhaR1J5WlhOeklpd2lZV05qYjNWdWREcHdaWEp6YjI1aGJGOXVkVzFpWlhKeklpd2laVzFoYVd3aUxDSmhZMk52ZFc1ME9uQnliMlpwYkdVaUxDSmhaR1J5WlhOeklpd2laVzFoYVd3NmQzSnBkR1VpTENKemNHOXlkSE1pTENKd2RYSmphR0Z6WlhNaUxDSnZjR1Z1YVdRaUxDSmhZMk52ZFc1ME9tTnZibk5sYm5RaUxDSndjbTltYVd4bElpd2ljSFZ5WTJoaGMyVWlMQ0poWTJOdmRXNTBPbUZrWkhKbGMzTWlMQ0p6ZEc5eVpTSXNJbU52Ym5ObGJuUWlMQ0poWTJOdmRXNTBPbWRsYm1SbGNpSXNJbkJvYjI1bE9uZHlhWFJsSWl3aVlXTmpiM1Z1ZERwd2FHOXVaU0lzSW5CeWIyWnBiR1U2ZDNKcGRHVWlMQ0poWTJOdmRXNTBPbWxrWlc1MGFXWnBaWEp6SWl3aVlXTmpiM1Z1ZERwd2RYSmphR0Z6WlNJc0luQmxjbk52YmlJc0luTndiM0owY3pwM2NtbDBaU0lzSW1GalkyOTFiblE2YzNCdmNuUnpJaXdpWTI5dWRHRmpkSE1pTENKamIyNTBZV04wY3pwM2NtbDBaU0pkTENKd1pYSnpiMjVwWkNJNklqYzBNREUxTmpFNU5URTFJaXdpYkc5allYUnBiMjRpT2lKSlZDSXNJbVY0Y0NJNk1UY3lPVEUxTmpBek5Dd2lhV0YwSWpveE56STVNVFUxTVRNMExDSnFkR2tpT2lKeExYQlRkVXhhV0RkTWJtWTJha2hPWlRGbVoxcHVlbWw2TFVVaWZRLmN3MV9JNW9YNHh2MjVLYXBVLTR5NkJLX29vMkdtZXpiVWpZeExkRDdEWHBwM0FYVHU0UW1xU0NRcEJZdmdnem80YTM2eWN0SnIyeXJBSlBmempXc1E3VGRXVXl4ekJSN1lxRzA4ekprbU9GbkpxZGJHU0Znb2hVUDJDSE1oNFI2QnZta2JXUkRlV1VXdktIYWN6Q1ZFcGgtM1pHbzJsdFdCeGJSZ3Y0VXE5V21DVXl2TE00b1VBaVlvZDk5cXZhbU1aNnZvRTNObzVCVE1QSzc0MzJyMkZwNEtXSUtnQi12TFJ5a2lub3owRFdQXzVMRTB2d04zZ1lpczNwOWdGZXhrTTc2Mzd5d0pkYmlkLVZ6R21xMTVpU3RMMlJyd3BRVGpIMG0zNU5tcmNSS2pxVGNfa2ZWZXl1WUsycHUyNzNnQTlGZkExSkRfYl9FNHdtcmVCeXA5dyIsImp0aSI6ImdsZGlvZC1MNk1qTVJ5RUg2QnBUVm9RbVQxMCJ9fX0=";
const token = JSON.parse(atob(NFS_AUTH))?.passport?.user?.accessToken;
// BASE URL
const baseUrl = "https://api-global.preprod.decathlon.net/ump4clubs-be/v1";
// CARD ID
const cardId = "2090925780611";

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
      const data = await setCardAssociation(cardId, inputCardId.value);
      inputCardId.value = "";
      rex.club = data.club;
      showAssociation();
    }
  };

  deleteAssociationBtn.onclick = async () => {
    rex.loading = true;
    const data = await deleteCardAssociation(cardId);
    showNoAssociation();
  };

  // get User info
  const getCardData = async (cardId) => {
    try {
      const data = await fetch(`${baseUrl}/cards/${cardId}`, {
        method: "GET",
        headers: {
          "Cache-Control": "no-cache, no-store, must-revalidate",
          Authorization: `Bearer ${token}`,
          "x-api-key": X_API_KEY,
        },
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Errore nella richiesta: " + response.status);
          }
          return response.json();
        })
        .then((data) => {
          console.log("Risposta:", { ...data });
          // return clubId
          rex.club = data.club;
          return { ...data };
        })
        .catch((error) => {
          console.error("Errore:", error);
        });
    } catch (error) {
      console.error(error);
    }
    return {};
  };

  // SET card association
  const setCardAssociation = async (cardId, clubId) => {
    try {
      const { data } = await fetch(`${baseUrl}/cards/${cardId}`, {
        method: "PATCH",
        headers: {
          "Cache-Control": "no-cache, no-store, must-revalidate",
          Authorization: `Bearer ${token}`,
          "x-api-key": X_API_KEY,
        },
        body: JSON.stringify({
          clubCountry: "it",
          clubId: clubId,
        }),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Errore nella richiesta: " + response.status);
          }
          return response.json();
        })
        .then((data) => {
          console.log("Risposta:", data);
          return { ...data };
        })
        .catch((error) => {
          console.error("Errore:", error);
        });

      return { ...data };
    } catch (error) {
      console.error(error);
    }
    return {};
  };

  // DELETE card association
  const deleteCardAssociation = async (cardId) => {
    try {
      const { data } = await fetch(`${baseUrl}/cards/${cardId}`, {
        method: "PATCH",
        headers: {
          "Cache-Control": "no-cache, no-store, must-revalidate",
          Authorization: `Bearer ${token}`,
          "x-api-key": X_API_KEY,
        },
        body: JSON.stringify({
          clubCountry: null,
          clubId: null,
        }),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Errore nella richiesta: " + response.status);
          }
          return response.json();
        })
        .then((data) => {
          console.log("Risposta:", data);
          return { ...data };
        })
        .catch((error) => {
          console.error("Errore:", error);
        });
    } catch (error) {
      console.error(error);
    }
    return {};
  };

  getCardData(cardId);
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
