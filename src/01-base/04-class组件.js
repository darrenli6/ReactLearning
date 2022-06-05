
import { Component } from "react"
import './css/01-index.css' // 导入css模板 webpack支持

export default class App extends Component{
    render(){
        var myname="darren"
        var obj = {
            background:"yellow",
            fontSize:"40px"
        }
        return (
            <div>{10+2}
              {myname}

              {10>20?"aa":"bb"}
              <div style={obj}>11</div>
              <div style={{background:"red"}}>22</div>
              <div className="active">333</div>
              <div id="myapp">444</div>
              <label htmlFor="username">
                用户名
              </label>

              {
                  /*
                  react注释
                  */
              }

              <input type="text" id="username" />
            </div>
        )
    }
}