import React from 'react'
import classes from './style.scss'
import './style.main.scss'
import P from '@/components/P'

export default function App(): JSX.Element {
  return (
    <div>
      <h1 className='main'>Hello, React2!</h1>
      <p className={classes.cl}>abc</p>
      <P />
      <p>333</p>
      <p>
        <img src={require('@/assets/mi.png')} />
      </p>
    </div>
  )
}
