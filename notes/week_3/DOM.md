# DOM

JavaScript Document Object Model, is a module available on any JavaScript that is run in the browser. Typically in Node JS, you have to import in any packages that are not available directly but the DOM is available without it and does not require any importing.

Modern Browsers have JavaScript running on them, and so JS code can be provided by a server to run on client side. Running client side JavaScript allows us to create dynamic web pages that respond based on a users interaction with the page.

The structure of the DOM is like a tree, with the root element being the HTML tag. 

## DOM Structure

The Document Object Model (DOM) is a programming API for HTML and XML documents. It enables JS to access and manipulate the elements and styles of a website. The browser creates a tree-like hierarchical representation of the HTML document, which is known as the DOM structure or DOM tree.

Each HTML element in the DOM tree is an object. The positions of the elements in the DOM tree are nodes. THe tags are element nodes. Attributes in the elements are attribute nodes. The text inside elements are text nodes. 

Each node in the DOM tree has properties and methods that can be used to access and manipulate its content and attributes. For example, `innerHTML` property can be accessed and used to get or set the content of an element., and `className` can be used to get or set the class attribute of an element.

## Traversing the DOM

The DOM allows us to do anything with elements and their contents, but we first need to reach the corresponding DOM object. The properties used to traverse the DOM or to reach/get a particular DOM object are listed below.

- Topmost node `document`: This is the document object, the root of every node in the DOM.

`document.documentElementProperty` - This refers the DOM node of the tag, and the property associated with that node

- Parent Nodes `node.parentNode`:
    - The parent of a node is anything that is directly one level up it.
- Child Nodes:
    - The children of a node that are the nodes one level below it.
    - `childNodes` refers to all the nodes that are children to an element
    - `children` refers to all the elements that are children to an element
- Sibling Nodes:
    - These are for children elements/ nodes, when they are of the same parent
    - Sibling nodes must be on the same tree level as well
    - `nextSibling` will refer to the next node
    - `nextElementSibling` will refer to the next element

## Selecting Elements from the DOM
JavaScript is used to get or modify the content or value of the HTML elements on the page. To perform any action on the HTML element, we need to select the target of the HTML element.

Four way that can be used:

1. Selecting Elements by ID
    - The `document.getElementById()` method is used to select an element based on its unique ID. THe method will return the element as an object if the matching element has been found, or null if no matching element is found on the page
2. Selecting Elements by Class name
    - The `document.getElementsByClassName()` method is used to select all the elements having the specific class names. This method returns an array-like object of all child elements which have all the given class names
3. Selecting Elements by Tag Name
    - The `document.getElementsByTagName()` method is used to select HTML elements by tag name. This method also returns an array like object with all the children with the given tag name
4. Selecting Elements with CSS Selectors
    - We can also use `document.querySelector()` and `querySelectorAll()` methods to select elements that matches the specified CSS selectors. The `querySelector()` will return only the first element it finds, the `querySelectorAll()` will return an array with all the found matches.