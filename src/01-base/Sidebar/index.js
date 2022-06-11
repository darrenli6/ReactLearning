

// 函数式的组件
import React from "react"
// 用props形参传递
export default function Sidebar(props){
    console.log(props);

    let {bg,position} = props
    console.log(bg)

    var obj1={
        left:0
    }
    var obj2={
        right:0
    }
    
    var obj ={
        background:bg
        ,width:"200px",
        position:"fixed",
   
    }

    var styleobj = position==="left"?{...obj,...obj1}:{...obj,...obj2}
    return (
        <div style={styleobj}>  

            <ul>
                <li>1111</li>
                <li>1111</li>
                <li>1111</li>
                <li>1111</li>
                <li>1111</li>
                <li>1111</li>
                <li>1111</li>
                <li>1111</li>
                <li>1111</li>
            </ul>
            
          </div>
    )
}