function customRender(reactElement,maincontainer){
// let domElement = document.createElement(reactElement.type)
// domElement.innerHTML = reactElement.children
// domElement.setAttribute("href",reactElement.props.href)
// domElement.setAttribute('target',reactElement.props.target)
// maincontainer.appendChild(domElement)
let domElement = document.createElement(reactElement.type)

}

const reactElement = {
    type:'a',
    props:{
        href:'https://google.com',
        target:'_blank' 
    },
    children:'click me toi visit google'
}

let maincontainer = document.querySelector('#root')

customRender(reactElement,maincontainer)