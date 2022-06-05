import { Component } from "react";

export default class App extends Component{

    state ={
        myhtml: `<b>i love you</b>`
    }

    render(){
        return (
            <div>

                {/* {this.state.myhtml} */}

                <div dangerouslySetInnerHTML={
                    {
                    __html:this.state.myhtml
                    }
                }></div>
            </div>
        )
    }
}