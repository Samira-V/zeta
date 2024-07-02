import React, { useState } from 'react'
import './Setting.css'
import { IoSettingsOutline } from "react-icons/io5";
import { IoColorFillOutline } from "react-icons/io5";


export default function Setting() {
  const [showSetting , setShowSetting] = useState(false)
  const [color , setColor] = useState("#000")
  
  const settingHandler = ()=>{
    alert("setting")
    setShowSetting(true)
  }
  
  return (
    <div className='setting'>
        <IoSettingsOutline className='setting-icon' onClick={settingHandler}/>
        <IoColorFillOutline className='setting-icon'/>
        
    </div>
  )
}
