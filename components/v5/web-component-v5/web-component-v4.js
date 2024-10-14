//component name, important for export the right compo
// pattern must be "string-string-string..."
const componentName = "web-component-v4"

// css
const css = ``

// html template
const html = ``

// reactive component props
const propx = {

}

// reactive data
const rex = {

}

// this is the component logic
// it is called once when the component is rendered
const logix = (shadowDom) => {

}


// INIT COMPONENT

// This is the first function that need to be call, it has to:
//
// - add css to the html template
// - create the association between reactive data and html element
// - populate reactive data with in html template with actual data
// - execute conditional render funzion
// - execture rendering loop cycle function
// - inject html into shadow dom
const compileHtml = (shadowDom) => {

}

// All of those function are needed to init the html correctly, they bind data to html in different ways for every case (reactive data, render loop, conditional rendering)

// bind reactive Rex to html element and compile them
const compileRexText = () => {

}
// bind reactive Propx to html element and compile them
const compilePropxText = () => {

}
// it render and bind conditional html for the first view
const compileConditionalRender = () => {

}
// it render and bind html loop for the first view
const compileRenderLoop = () => {

}

// UPDATE COMPONENT

//this funcion need to be call wheneve a reactive data change (propx or rex)
const onDataChange = () => {

}

//this function must update the text whenever the binded and reactive data change
const updateReactiveText = () => {

}

// this function must update the ui based on wich compoent have to be displayed based on binded and reactive data
const updateConditionalRender = () => {

}

// this function must update the ui based on binded and reactive list of data
const updateRenderLoop = () => {

}

// CORE BROWSER FUNCTION
// we need those function to tell the browser that this is a web compoennt
export class WebComponent extends HTMLElement {
    //init component
    constructor() {
        super();
    }
    //those are the component props
    static observedAttributes = Object.keys(propx);
    //this is the scoped dom, for thi component only
    shadowDom = this.attachShadow({ mode: "open" });
    //listen for props change, update propx binded value
    attributeChangedCallback(propName, oldValue, newValue) {
        propx[propName] = newValue;
    }
    //element is loaded
    connectedCallback() {
        //inject first html
        compileHtml(this.shadowDom);
        //rex proxy observer
        rex = new Proxy(rex, {
            set(target, property, value) {
                target[property] = value;
                return true;
            }
        });
        //propx proxy observer
        propx = new Proxy(propx, {
            set(target, property, value) {
                target[property] = value;
                return true;
            }
        });
        logix(this.shadowDom);
    }
}
//register webcomponent into browser
customElements.define(componentName, WebComponent);