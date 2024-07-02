import { Breadcrumbs } from '@mui/material'
import React from 'react'
import { useParams } from 'react-router-dom'


export default function Default() {
  const params = useParams()
  console.log(params)
  return (
    <div className='page'>
      <h4>{params.postName}</h4>
     <Breadcrumbs/>
    </div>
  )
}
