import { Component } from "react"
import darrenPropTypes from 'prop-types'
console.log(darrenPropTypes)

export default class NavBar extends Component
{

    static propTypes= {
        title:  darrenPropTypes.string, // 验证是不是字符串的方法
        leftshow: darrenPropTypes.bool // 验证是不是bool的方法
    }
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

//类属性
class Test{
    a =10    // 对象属性
    static b=100 //类型属性
}

// 默认值

NavBar.defaultProps ={
    leftshow:true
}

// 类属性
Test.a=100
console.log(Test.a)

var obj=new Test();
console.log(obj.a);

