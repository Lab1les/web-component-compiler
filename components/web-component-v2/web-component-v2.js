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
    //inject first html
    this.shadowDom.innerHTML = bindReactiveText(html, propx, rex);
  }

  //element is loaded
  connectedCallback() {
    const shadowDom = this.shadowDom;
    //listen for rex change
    rex = new Proxy(rex, {
      set(target, property, value) {
        target[property] = value;
        updateReactiveText(shadowDom, {
          type: "rex",
          id: property,
          value: value
        });
        return true;
      }
    });
    logix(shadowDom);
  }

  //listen for props change, update html
  attributeChangedCallback(propName, oldValue, newValue) {
    propx[propName] = newValue;
    updateReactiveText(this.shadowDom, {
      type: "propx",
      id: propName,
      value: newValue
    });
  }
}
let html = await fetch(`${componentPath}/${componentName}/${componentName}.html`).then(res => res.text());
const bindReactiveText = (html, propx, rex) => {
  let compiledHtml = html;
  Object.keys(propx).forEach(key => {
    compiledHtml = compiledHtml.replace(`propx.${key}`, `<span propx-${key}>${propx[key]}</span>`)
  });
  Object.keys(rex).forEach(key => {
    compiledHtml = compiledHtml.replace(`rex.${key}`, `<span rex-${key}>${rex[key]}</span>`)
  });
  return compiledHtml;
}
const updateReactiveText = (shadowDom, data) => {
  shadowDom.querySelectorAll(`[${data.type}-${data.id}]`).forEach(el => {
    el.textContent = data.value;
  })
}
customElements.define(componentName, WebComponent);