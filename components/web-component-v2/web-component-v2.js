//component name
const componentPath = "components";
const componentName = "web-component-v2"

//reactive props
const propx = {
  title: "",
  cta: ""
}
//reactive var
let rex = {
  textInput: ""
}
//component logic
const logix = (document) => {
  const inputText = document.querySelector("#input-text");
  const inputButton = document.querySelector("#input-button");
  inputButton.onclick = () => { rex.textInput = inputText.value; };
}

// library functions
class WebComponent extends HTMLElement {
  static observedAttributes = Object.keys(propx);
  shadowDom = this.attachShadow({ mode: "open" });

  //init component
  constructor() {
    super();
    let innerShadowDom = this.shadowDom;
    innerShadowDom.innerHTML = html;
    //listen for rex change
    rex = new Proxy(rex, {
      set(target, property, value) {
        target[property] = value;
        updatePropxAndRex(this.shadowDom, {
          type: "rex",
          id: property,
          value: value
        });
        return true;
      }
    })
  }

  //element is loaded
  connectedCallback() {
    bindPropAndRex(this.shadowDom, propx, rex)
    logix(this.shadowDom);
  }

  //listen for props change, update html
  attributeChangedCallback(propName, oldValue, newValue) {
    propx[propName] = newValue;
    updatePropxAndRex(this.shadowDom, {
      type: "propx",
      id: propName,
      value: newValue
    });
  }

}
let html = await fetch(`${componentPath}/${componentName}/${componentName}.html`).then(res => res.text());
const bindPropAndRex = (shadowDom, propx, rex) => {
  const allElement = shadowDom.querySelectorAll("*");
  allElement.forEach(el => console.log(el));
  Object.keys(propx).forEach(key => {

  });

}
const updatePropxAndRex = (shadowDom, data) => {

}
customElements.define(componentName, WebComponent);