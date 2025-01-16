import { children, useState } from 'react' ;
import reactLogo from './assets/react.svg' ;
import viteLogo from '/vite.svg' ;
import './App.css' ;
import About from './Components/About/About';
import Portfolio from './Components/Portfolio/Portfolio';
import LayOut from './Components/LayOut/LayOut';  
import Contact from './Components/Contact/Contact';
import Home from './Components/Home/Home';
import '@fortawesome/fontawesome-free/css/all.min.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom'; 
function App() {   

const [count, setCount] = useState(0);  

const routes= createBrowserRouter([
  {path:"",element :<LayOut/>, children:[
    {index:true,element :<Home/>},
    {path:"about", element:<About/>},   
    {path:"portfolio", element:<Portfolio/>},   
    {path:"contact", element:<Contact/>},   
    
    
   ]}

  ])   



   return (   


    <RouterProvider router={routes}>  

  </RouterProvider>   ) }  

  export default App