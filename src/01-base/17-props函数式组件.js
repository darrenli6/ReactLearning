import { Component } from "react";

import NavBar from "./Navbar";
import Sidebar from './Sidebar'

export default class App extends Component{

      render(){
          return (<div>
              <NavBar></NavBar>


             
              {/* 函数式组件 */}
              <Sidebar bg="yellow" position="right" ></Sidebar>
          </div>)
      }
}