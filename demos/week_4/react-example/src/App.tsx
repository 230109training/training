import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import ClassComponent from './Components/ClassComponent/ClassComponent';
import EventsDemo from './Components/EventsDemo/EventsDemo';
import BasicComponent from './Components/FirstComponent/BasicComponent';
import Hook from './Components/HooksDemo/Hook';
import ListDemo from './Components/ListDemo/ListDemo';
import NavBar from './Components/NavBarDemo/NavBar';
import ValidatedForm from './Components/OneWayDataFlow/ValidatedForm';
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
      {/* <BasicComponent/>
      <BasicComponent/>
      <EventsDemo/>
      <ListDemo/>
      <ParentComponent/>
      <ClassComponent message={"Hello Class"}/>
      <Hook/> */}
      <NavBar/>
      <Routes>
        <Route path="/" element={<BasicComponent/>}></Route>
        <Route path="/events" element={<EventsDemo/>}></Route>
        <Route path="/lists" element={<ListDemo/>}></Route>
        <Route path="/props" element={<ParentComponent/>}></Route>
        <Route path="/class" element={<ClassComponent message={"Hello Class"}/>}></Route>
        <Route path="/hook" element={<Hook/>}></Route>
        <Route path="/form" element={<ValidatedForm/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
