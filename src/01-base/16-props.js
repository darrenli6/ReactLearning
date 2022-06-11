import { Component } from "react";
import NavBar from './Navbar/index'

export default class App extends Component{
   // obj传递到 navbar里
   


    render(){

        var obj = {
            title : "测试",
            leftshow:false 
        }
        return (
            <div>
                <div>
                <h2>首页</h2>  

                <NavBar title="首页" leftshow={false} /> 
                </div>

                <div>
                <h2>列表</h2>    
                <NavBar  title="列表"   /> 
                </div>

                <div>
                <h2>购物车</h2>    
                <NavBar  title={obj.title} leftshow={obj.leftshow}   /> 
                <NavBar {...obj} />
                </div>
            
            </div>
        )
    }
}