import { Component } from "react";
import NavBar from './Navbar/index'

export default class App extends Component{

    render(){
        return (
            <div>
                <div>
                <h2>首页</h2>  

                <NavBar title="首页" leftshow={false} /> 
                </div>

                <div>
                <h2>列表</h2>    
                <NavBar  title="列表" leftshow={true}  /> 
                </div>

                <div>
                <h2>购物车</h2>    
                <NavBar  title="购物车" leftshow={true}  /> 
                </div>
            
            </div>
        )
    }
}