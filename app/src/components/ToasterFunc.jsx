import React from 'react'
import { Toaster } from 'react-hot-toast'

const ToasterFunc = () => {
  return (
    <Toaster
    position="top-center"
    reverseOrder={false}
    toastOptions={{
        success:{
            duration: 1500,
            style:{
                backgroundColor: '#00c853',
                color: 'white'
            }
        },
        error:{
            duration: 1500,
            style:{
                backgroundColor: '#f44336',
                color: 'white'
            }
        }
    }}
    />
  )
}

export default ToasterFunc