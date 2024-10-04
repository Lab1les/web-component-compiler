//component name
const componentName = "web-component-v3";

//reactive props
const propx = {
  title: ""
}
//reactive var
let rex = {
}
//component logic
const logix = () => {

}
//component html
const html = //html
`
<div>
    <p>propx.title</p>
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
    //inject first html
    this.shadowDom.innerHTML = initHtml();
  }

  //element is loaded
  connectedCallback() {
    const shadowDom = this.shadowDom;
    //listen for rex change, update html text
    rex = new Proxy(rex, {
      set(target, property, value) {
        target[property] = value;
        updateReactiveText(shadowDom, "rex", property, value)
        return true;
      }
    });
    //hydrate and init js logic
    logix(shadowDom);
  }

  //listen for props change, update html text
  attributeChangedCallback(propName, oldValue, newValue) {
    propx[propName] = newValue;
    updateReactiveText(this.shadowDom, "props", propName, newValue);
  }
}
//bind propx to text element, add style element
const initHtml = () => {
  let compiledHtml = html;
  Object.keys(propx).forEach(key => { compiledHtml = compiledHtml.replace(`propx.${key}`, `<span propx-${key}>${propx[key]}</span>`) });
  Object.keys(rex).forEach(key => { compiledHtml = compiledHtml.replace(`rex.${key}`, `<span rex-${key}>${rex[key]}</span>`) });
  return compiledHtml + `<style>${style}</style>`;
}
//update text
const updateReactiveText = (shadowDom, type, id, value) => {
  shadowDom.querySelectorAll(`[${type}-${id}]`).forEach(el => { el.textContent = value })
}
customElements.define(componentName, WebComponent);