# React

React is a JavaScript library for building user interfaces. It was developed by Facebook but is now maintained by a community of developers. React allows developers to build web and mobile appilcations with a reusable component-based architecture.

In a React application, components are the building blocks of the user interface. Each component represents a piece of the UI, and can be thought of as a self-contained unit that handles its own state and rendering. Component can also accept inputs (props) and emit events (actions), which allow them to communicate with one another.

One of the key features of React is that it uses a virtual DOM to optimize the performance of updates to the user interface. The virtual DOM is a lightweight representation of the actual DOM, and React uses it to track changes and update the UI efficiently.

## Single Page Applications

An SPA is a type of web application that loads a single HTML page and dynamically updates the content as the user interacts with the app. Instead of the browser loading a new page from the server each time the user clicks a link or submits a form, the SPA dynamically updates the current page.

SPAs are typically built using a JS framework like React, Angular, or Vue.js. These frameworks provide the necessary tools for building SPAs, like client-side routing, which allows the app to update the URL and the displayed content without requiring a full page reload.

The main benefits of SPAs are that they provide a more responsive and seamless user experience, since the page does not need to refresh each time the user interacts with the app. This makes the SPA faster as well as they only need to load a single HTML page.

## Component-Based Architecture

In React, a component-based architecture is a way of building a user interface by breaking it down into smaller, reusable pieces called components. Each component represents a piece of the UI, and can be thought of as a self contained unit that handles its own state and rendering.

A component-based architecture has several benefits:

- Reusability: Components can be reused throughout the application, which makes it easy to create a consistent look and feel and can also save development time.
- Modularity: Components are independent from one another, which makes it easy to make changes to one part of the application without affecting the rest of the application.
- Testability: Components can be tested in isolation, which makes it easier to identify and fix bugs

## Single Responsibility Principle

The Single Responsibility Principle (SRP) states that a module, class or function should only have one reason to change. This principle is often associated with the SOLID principles, which are used for OOP.
The SPR is often used to guide the design of software by encouraging developers to write modular, resuable code that is easy to understand and maintain.

In React, the SPR can be applied to its component-based architecture by ensuring that each component has a single, well defined responsibility. This might mean that a component is responsible for handling user input, or for displaying a particular piece of data, but not both.

Components that follow SPR can be easily understood and tested in isolation, and changes to one component are less likely to have unintended effects on other components.

## JSX

JSX (JavaScript Syntax Extension) is a syntax extension for JavaScript that allow syou to write HTML-like elements in your JavaScript code. It was developed by Facebook and is used by React to define the structure and content of a user interface. JSX code looks similar to HTML, but with some key differences.

```javascript
const element = <h1>Hello, World!</h1>;
```

JSX uses the tags found in HTML, but also allows you to create your own components and use them as well. Additionally, JSX allows you to include JavaScript expressions inside the elements using curly braces {}.

We can use JavaScript expressions to generate a list of items from an array.

```typescript
const items: string[] = ["item 1", "item 2", "item 3"];
const element = (
    <ul>
        {items.map((item, index) => <li key={index}>{item}</li>)}
    </ul>
)
```

## Rendering

Rendering refers to the process of displaying the visual content of a webpage or application to the user. In React, rendering refers to the process of taking the component tree and creating a corresponding tree of DOM nodes.

When a component is first rendered, React calls the component's render method and creates a virtual DOM representation of the component's JSX. When the component's state or props change, React re-renders the component by calling its render method again and compares the new virtual DOM with the previous one. React then updates the actual DOM to reflect the changes, the process of which is called "reconciliation".

>Reconciliation is the process by which React compares the virtual DOM to the actual DOM and updates the elements in the actual DOM to match the elements in the virtual DOM.

It's important to note that in React, it's not just the component that is being rendered but the entire component tree. This means that if a parent component re-renders then all its children will re-render too. Components should therefore be as small and reusable, so that the number of components that need to re-render is minimized and the application's performance is not affected.

In summary, rendering in React refers to the process of taking the component tree and creating a corresponding tree of DOM nodes, and updating the UI when the component's state or props change. This process is performed by React's virtual DOM.

## Component Basics

A component is a self-contained unit of ocde that represents a piece of the user interface. Each component defines its own state, behavior and rendering, and are seen as modular building blocks of the UI. There are two main types of components in React, Functional and Class-based components.

### Functional Components

Functional components are a JS function that takes a set of props (inputs) and returns a React element, which represents a piece of the user interface. Function components are a simpler and more straightforward way to define a component when compared to class-based components.

```javascript
function Greeting(props){
    return <h1>Hello, {props.name}!</h1>
}
```

Function components do not have access to the component lifecycle methods like `componentDidMount

### Class Components