import { Component } from "react"
import darrenPropTypes from 'prop-types'
console.log(darrenPropTypes)

export default class NavBar extends Component
{
    // 状态在内部使用，外面不能调用修改
    // 属性是父组件拿来的 
    render(){
        console.log(this.props)
        let {title,leftshow} = this.props

        return (

            <div> 
                {leftshow && <button>返回</button> }
                 navbar - {title} 
                 <button>首页</button>
                 </div>
        )
    }
}
// NavBar.prototype= {
//     title:  // 验证是不是字符串的方法
//     leftshow:  // 验证是不是bool的方法
// }