import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./HeaderHorizondal.scss"
const HeaderHorizhondal = () => {

    const history =useNavigate();
const headerArrayList=[
    {
        title: "Home",
        path: `/`,
    },
    {
        title:"About",
        path:`/about`,
    },
    {
        title: "Registration",
        path:  `/registration`,
    },
    {
        title:"Login",
        path:`/login`,
    },
]
const onRedirect=(path)=>{
history(path);
}
  return (
    <div className='header-container'>
        {headerArrayList?.map((item,index)=>(
        <div className='header-title' onClick={onRedirect(item?.path)}>
            {item?.title}
        </div>
        ))}
    </div>
  )
}

export default HeaderHorizhondal