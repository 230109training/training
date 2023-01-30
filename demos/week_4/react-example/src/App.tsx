import React from 'react';
import './App.css';
import EventsDemo from './Components/EventsDemo/EventsDemo';
import BasicComponent from './Components/FirstComponent/BasicComponent';
import ListDemo from './Components/ListDemo/ListDemo';
import ParentComponent from './Components/Props&StateDemo/ParentComponent/ParentComponent';

/**
 * What is JSX?
 *  - JavaScript XML
 *  - File format that allows us to write HTML and JavaScript in the same file
 * 
 * 
 * We have access to either Functional or Class based components
 *  - Functional components used to not have a way to manage state, but now they do
 *  - React is focusing more on Functional Components instead of Class, so for the most part, stick to functionals
 */

// Class Component

// class App extends React.Component{
//   render(): React.ReactNode {
//     return(
//       <div className="App">
//         <BasicComponent/>
//         <BasicComponent/>
//       </div>
//     )
//   }
// }

// Functional Component
function App() : JSX.Element{
  return (
    <div className="App">
      <BasicComponent/>
      <BasicComponent/>
      <EventsDemo/>
      <ListDemo/>
      <ParentComponent/>
    </div>
  );
}

export default App;
