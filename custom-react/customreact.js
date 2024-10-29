
// This is how react compiler see and uses the function created under jsx files
// this a custom specification 
const reactElement = {
    type: 'a',
    props: {
        href: 'https://www.google.com',
        target: '_blank'
    },
    children: 'Click to visit google'
}

const root = document.getElementById('root')

// render inside the main div using (which elemeent, where to render)
customRender(reactElement, root)

function customRender(reactElement, root){
    /*
    const newElement = document.createElement(reactElement.type)
    newElement.innerHTML = reactElement.children
    newElement.setAttribute('href', reactElement.props.href)
    newElement.setAttribute('target', reactElement.props.target)

    root.appendChild(newElement);
    */

    // React constantly making tree graphs and element are created using custom methods 
    const domElement = document.createElement(reactElement.type);
    for (const prop in reactElement.props) {
        domElement.setAttribute(prop, reactElement.props[prop])
    }
    root.appendChild(domElement);
}