import { Component } from "react";
import "./css/02-maizuo.css"
import Center from "./maizuocomponent/Center";
import Cinema from "./maizuocomponent/Cinema";
import Film from "./maizuocomponent/Film";

 

export default class App extends Component{

    state ={
        list :[
            {
                id:1,
                text:"电影"
            },
            {
                id:2,
                text:"影院"
            },
            {
                id:3,
                text:"我的"
            },
        ],
        current : 0
    }

    witch(){
        switch(this.state.current){
            case 0:
                return <Film></Film>
            case 1:
                return <Cinema></Cinema>    
            case 2:
                return <Center></Center>    
        }
    }
    render(){

        
        return (
            <div>
               {/* {
                   this.state.current ==0 && <Film></Film>
               }
                 {
                   this.state.current ==1 && <Cinema></Cinema>
               }
                 {
                   this.state.current ==2 &&  <Center></Center>
               } */}
                {
                    this.witch()
                }
                
               
                <ul>
                    {
                        this.state.list.map((item,index)=>
                            <li onClick={()=>this.handleClick(index)} className={this.state.current===index?'active':""} item={item.id}>{item.text}</li>
                            )
                    }
                </ul>
            </div>
        )
    }

     handleClick(index){
      console.log(index)
      this.setState({
          current:index
      })
    }
}