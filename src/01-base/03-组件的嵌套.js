import { Component } from "react";


class Child extends Component{
    render() {
        return (<div>child </div>)
    }
}
class Navbar extends Component{
    render() {
        return <div>navbar

            <Child></Child>
        </div>
    }
}


function Swiper(){
    return <div>swiper</div>
}

const Tabbar = ()=>{
    return <div>tabbar</div>
}
export default class App extends Component{
    render() {
        return (
            <div>

                App
                <Navbar>

                </Navbar>
                <Swiper></Swiper>
                <Tabbar></Tabbar>
            </div>
        )
    }
}