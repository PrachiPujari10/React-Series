function customRender(reactElement, container) {

    // 🔴 OLD VERSION (Manual attribute setting)
    // This version manually sets each attribute one by one.

    // const domElement = document.createElement(reactElement.type)

    // domElement.innerHTML = reactElement.children

    // domElement.setAttribute('href', reactElement.props.href)
    // domElement.setAttribute('target', reactElement.props.target)

    // container.appendChild(domElement)



    // 🟢 NEW VERSION (Dynamic attribute handling)

    // 1️⃣ Create DOM element based on type
    // If type = 'a', it creates <a></a>
    const domElement = document.createElement(reactElement.type)

    // 2️⃣ Add text inside element
    // ⚠ Must be innerHTML (capital HTML)
    domElement.innerHTML = reactElement.children

    // 3️⃣ Loop through all props dynamically
    // This makes the function reusable for any attributes
    for (const prop in reactElement.props) {

        // No need to check for 'children'
        // because children is not inside props object

        domElement.setAttribute(prop, reactElement.props[prop])
    }

    // 4️⃣ Append created element to container
    container.appendChild(domElement)
}



// This object mimics what React internally creates
const reactElement = {

    // Type of HTML tag
    type: 'a',

    // Props (attributes)
    props: {
        href: 'https://google.com',
        target: '_blank'
    },

    // Content inside the element
    children: 'Click me to visit Google'
}


// Select root container
const mainContainer = document.querySelector('#root')

// Render element into root
customRender(reactElement, mainContainer)