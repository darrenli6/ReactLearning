import axios from "axios";
import { Component } from "react";
 


export default class Cinema extends Component{
 
    constructor(){
        super()
        // 请求数据
 
        // axios 第三方库 专门用于请求数据
        // axios.get("https://napi.fdcfabric.com/common/getChengfen").then(res=>{
        //   console.log(res);

        // }).catch(err=>{
        //     console.log(err)
        // })

        this.state ={
            cinemaList: [],
            mytext:""
            // bcinemaList:[]
        }


        axios({
            url:"https://napi.fdcfabric.com/common/getChengfen",
            method:"get",
            headers:{
                "xxx":"xxx"
            },
        
          }).then(res=>{
              console.log(res.data.data)
              this.setState({
                  cinemaList:res.data.data,
                  bcinemaList:res.data.data
              })
          })


    }
    // 后面声明周期函数 更适合发送ajax请求
    render(){
        return (
            <div>{this.state.mytext}

                <input value={this.state.mytext} onChange={(evt)=>{
                    this.setState({
                        mytext:evt.target.value
                    })
                }} />
              
                  {
                      this.getCinemaList().map(item=>
                        <dl key={item.id}>
                            <dt>{item.key}</dt>
                            <dd>{item.value}</dd>
                            </dl>
                        )
                  }
               
            </div>
        )
    }


    getCinemaList(){
        return this.state.cinemaList.filter(item=>item.key.toUpperCase().includes(this.state.mytext.toUpperCase()) || 
      item.value.toUpperCase().includes(this.state.mytext.toUpperCase()) )
    }

    // handleInput=(event)=>{
    //     console.log("input",event.target.value)

    //    var newarr= this.state.bcinemaList.filter(item=>item.key.toUpperCase().includes(event.target.value.toUpperCase()) || 
    //    item.value.toUpperCase().includes(event.target.value.toUpperCase()) )
    //    console.log(newarr)

    //    this.setState({
    //        cinemaList:newarr
    //    })

    //    // cinemalist 每次都会覆盖,引入 bcinemaList






    // }
}

/*
filter
*/

var arr =["aaa","abc","bcc"]
var newarr =arr.filter(item=>item.includes("a"))
console.log(newarr)