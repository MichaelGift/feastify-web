import React from 'react'

export default function unauthorized() {
  return (
    <div className='text-center mb-5' style={{marginTop: '15rem', height: "50vh"}}>
    <h1 >403 - Unauthorized</h1>
    <p>You do not have permission to access this page.</p>
    </div>
  )
}
