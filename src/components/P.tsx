import React from 'react'
import classes from './p.scss'
import './p.scss'

// export default function P(): JSX.Element {
//   return <p>222</p>
// }

const P: React.FC = () => <p className={classes.biggerFont}>222</p>

export default P
