//component name
const componentName = "web-component-v3";
let shadocx;
//reactive props
const propx = {
  title: "",
  cta: ""
}
//reactive var
let rex = {
  inputValue : ""
}
//component logic
const logix = () => {
  $("#input-button").onclick = () => { console.log($("#input-text").value)};
}

//component html
const html = //html
`
<div>
    <p>$propx.title</p>
    <input id="input-text" type="text">
    <button id="input-button">$propx.cta</button>
</div>
`
//component style
const style = //css
`
p{
  color: red;
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
    //inject first html
    initHtml();
  }

  //element is loaded
  connectedCallback() {
    //listen for rex change, update html text
    rex = new Proxy(rex, {
      set(target, property, value) {
        target[property] = value;
        updateReactiveText("rex", property, value)
        return true;
      }
    });
    logix(shadocx);
  }

  //listen for props change, update html text
  attributeChangedCallback(propName, oldValue, newValue) {
    propx[propName] = newValue;
    updateReactiveText("propx", propName, newValue);
  }
}
//bind propx to text element, add style element, add js
const initHtml = () => {
  let compiledHtml = html;
  Object.keys(propx).forEach(key => { compiledHtml = compiledHtml.replace(`$propx.${key}`, `<span propx-${key}>${propx[key]}</span>`) });
  Object.keys(rex).forEach(key => { compiledHtml = compiledHtml.replace(`$rex.${key}`, `<span rex-${key}>${rex[key]}</span>`) });
  const styleNode = document.createElement("style");
  styleNode.textContent = style;
  shadocx.innerHTML = compiledHtml;
  shadocx.appendChild(styleNode);
}
//update text
const updateReactiveText = (type, id, value) => {
  shadocx.querySelectorAll(`[${type}-${id}]`).forEach(el => { el.textContent = value })
}
//jquery style get element by id
const $ = (id) => shadocx.querySelector(id);
//register webcomponent into browser
customElements.define(componentName, WebComponent);