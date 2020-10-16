import React from 'react'
import styles from '../Header/header.css'

export default class HeaderComp extends React.Component {
    render()
    {
        return(
            <div className ={styles.header} >
                <ul>
                    <li><a>Home</a></li>
                    <li><a>About</a></li>
                    <li><a>Contact</a></li>
                </ul>
            </div>
        )
    }
    
}