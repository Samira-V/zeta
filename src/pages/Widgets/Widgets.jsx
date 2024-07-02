import React from 'react'
import './Widgets.css'
import BreadCrumb from '../../Components/BreadCrumb/BreadCrumb'

export default function Widgets() {
  return (
    <>
    <div className='page'>Widgets</div>
    
    <div className="main-header-top d-flex align-items-center">
          <div className="main-header-left">
            <h4 className="title p-0">File Manager</h4>
          </div>
          {/* breadcrumb  */}
          <BreadCrumb/>
        </div>
    </>
  )
}
