import { Component } from "react";
import axios from 'axios'


export default class Cinema extends Component{

    constructor(){
        super()
        // 请求数据

        // axios 第三方库 专门用于请求数据


    }
    // 后面声明周期函数 更适合发送ajax请求
    render(){
        return (
            <div>Cinema 组件</div>
        )
    }
}