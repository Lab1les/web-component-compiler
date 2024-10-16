//web component scoped dom
// DO NOT TOUCH THIS
let shadocx;

//component name
const componentName = "web-component-v3";
//reactive props
let propx = {
  title: "",
  cta: ""
}
//reactive var
let rex = {
  inputValue : ["ciao", "salve", "addio"],
  show : false
}
//component logic
const logix = () => {
  $("#input-button").onclick = () => { rex.inputValue = [...rex.inputValue,$("#input-text").value] };
}
//component html
const html = //html
`
<div>
    <p>$propx.title</p>
    <input id="input-text" type="text">
    <button id="input-button">$propx.cta</button>
    <p ifx="rex-show">I'm boolean </p>
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
        updateIfRender("rex");
        return true;
      }
    });
    //propx proxy observer
    propx = new Proxy(propx, {
      set(target, property, value) {
        target[property] = value;
        updateReactiveText("porpx", property, value)
        updateIfRender("porpx");
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
}
//update text
const updateReactiveText = (type, id, value) => {
  shadocx.querySelectorAll(`[${type}-${id}]`).forEach(el => { el.textContent = value })
}
//if render
const updateIfRender = (type) => {
  const ifElements = shadocx.querySelectorAll("[ifx]");
  ifElements.forEach(el => {
    const value = el.getAttribute("ifx").split("-");
    if(value[0] === "rex"){
      el.style.display = rex[value[1]] ? "block" : "none";
    }
    if(value[0] === "propx"){
      el.style.display = propx[value[1]] ? "block" : "none";
    }
  })
}
//jquery style get element/s
const $ = (id) => {
  if(id[0] === "#") return shadocx.querySelector(id);
  if(id[0] === ".") return shadocx.querySelectorAll(id);
};
//register webcomponent into browser
customElements.define(componentName, WebComponent);