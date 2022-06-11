import { Component } from "react";



 class Child extends Component{

    render() {
        return (<div>child-{this.props.text} 
        {/* <button  onClick={()=>{
            this.props.text="555x"
        }}>孩子按钮</button>  子属性不能修改 */}
        </div>)
    }
}


export default class App extends Component{
    state ={
        text:'111111'
    }
    render() {
        return (<div>
            <button onClick={ ()=>{
                this.setState({
                    text:"222"
                })
            }  }>click -父</button>
          <Child text ={this.state.text} />

        </div>)
    }
}