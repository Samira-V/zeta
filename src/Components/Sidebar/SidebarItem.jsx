import { useState } from "react"
import './Sidebar.css'
import { Link } from "react-router-dom"

export default function SidebarItem({item}){
    const [open, setOpen] = useState(false)

    
    if(item.childrens){
        return (
            <div className={open ? "sidebar-item open" : "sidebar-item"}>
                <div className="sidebar-title" >
                    <Link to = {item.path}>
                        { item.icon && <i className={item.icon}></i> }
                        {item.title}    
                    </Link > 
                    <i className="bi-chevron-right toggle-btn" onClick={() => setOpen(!open)}></i>
                </div>
                <div className="sidebar-content">
                    { item.childrens.map((child, index) => <SidebarItem key={index} item={child} />) }
                </div>
            </div>
        )
    }else{
        return (
            <Link to={item.path } className="sidebar-item plain" onClick={()=>{
                item.title
            }}>
                { item.icon && <i className={item.icon}></i> }
                {item.title}
            </Link>
        )
    }
}