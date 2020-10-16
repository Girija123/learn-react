import React from 'react'
import Styles from './header.module.css'

export default class HeaderComp extends React.Component {
    render()
    {
        return(
            <div className ={Styles.header} >
                <div className={Styles.titleAlign}>
                <h2 >START BOOTSTRAP</h2>
                </div>
                <ul className={Styles.menuAlign}>
                    <li><a>PORTFOLIO</a></li>
                    <li><a>ABOUT</a></li>
                    <li><a>CONTACT</a></li>
                </ul>
            </div>
        )
    }
    
}