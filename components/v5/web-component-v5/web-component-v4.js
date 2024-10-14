// reactive component props
const propx = {

}

// reactive data
const rex = {

}

// html template
const html = ``

// css
const css = ``

// INIT COMPONENT

// This is the first function that need to be call, it has to:
//
// - add css to the html template
// - create the association between reactive data and html element
// - populate reactive data with in html template with actual data
// - execute conditional render funzion
// - execture rendering loop cycle function

const compileHtml = () => {

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
}
//register webcomponent into browser
customElements.define(componentName, WebComponent);