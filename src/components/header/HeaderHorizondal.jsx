import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import "./HeaderHorizondal.scss"
const HeaderHorizhondal = () => {

    const history =useNavigate();
    const location=useLocation();
const headerArrayList=[
    {
        id:1,
        title: "Home",
        isActive: location.pathname === "/" ? true:false,
        path: `/`,
    },
    {
        id:2,
        title:"About",
        isActive: location.pathname.startsWith("/about")?true:false,
        path:`/about`,
    },
    {
        id:3,
        title: "Registration",
        isActive: location.pathname.startsWith("/registration")?true:false,
        path:  `/registration`,
    },
    {
        id:4,
        title:"Login",
        isActive: location.pathname.startsWith("/login")?true:false,
        path:`/login`,
    },
]
const [menus]=useState(headerArrayList);
const onRedirect=(item)=>{
    menus?.map((step)=>{
        return (step.isActive=step?.id===item?.id);
     });
     history(item.path);
        
    }


  return (
    <div className='header-container'>
        {menus?.map((item,index)=>(
        <div className='header-title' onClick={()=>onRedirect(item)}>
            {item?.title}
        </div>
        ))}
    </div>
  )
}

export default HeaderHorizhondal