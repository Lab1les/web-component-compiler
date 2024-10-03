//component name
const componentPath = "components";
const componentName = "web-component"

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
  inputButton.onclick = () => { rex.textInput = inputText.value };
}

// library functions
export class WebComponent extends HTMLElement {
  static observedAttributes = Object.keys(propx);
  shadowDom = this.attachShadow({ mode: "open" });

  //init component
  constructor() {
    super();
    let innerShadowDom = this.shadowDom;
    innerShadowDom.innerHTML = compileHtml();
    //listen for rex change
    rex = new Proxy(rex, {
      set(target, property, value) {
        target[property] = value;
        innerShadowDom.innerHTML = compileHtml();
        //rehydrate
        logix(innerShadowDom);
        return true;
      }
    })
  }

  //listen for props change, update html
  attributeChangedCallback(propName, oldValue, newValue) {
    propx[propName] = newValue;
    this.shadowDom.innerHTML = compileHtml();
    //rehydrate
    logix(this.shadowDom);
  }

}
let html = await fetch(`${componentPath}/${componentName}/${componentName}.html`).then(res => res.text());
const compileHtml = () => {
  let compiledHtml = html;
  Object.keys(propx).forEach(key => {
    compiledHtml = compiledHtml.replace(`propx.${key}`, propx[key])
  });
  Object.keys(rex).forEach(key => {
    compiledHtml = compiledHtml.replace(`rex.${key}`, rex[key])
  });
  return compiledHtml;
}
customElements.define(componentName, WebComponent);