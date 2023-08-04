import React from 'react'
import { useState } from 'react'

export default function Report(props) {
  return (
    <div className={`text-${props.font}`} style={{backgroundColor:props.pageBg}}>
      Hello from Report
    </div>
  )
}
