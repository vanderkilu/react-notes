import React from 'react'
import { saveTheme } from '../utils'

function Footer() {
    const handleClick = () => {
        const html = document.getElementsByTagName('html')[0]
        if (!html.classList.contains('light-theme')) saveTheme('light-theme')
        else saveTheme('dark-theme')
        html.classList.toggle('light-theme')
    }
    return (
        <footer  className="footer">
            <p className="footer__by">
                Made With  
                <span role="img" className="emoji" aria-label="love-emoji">
                    💜
                </span>
                love by <a href="http://twitter.com/kweku_kilu" 
                        target="_blank" rel="noopener noreferrer"> kweku_kilu</a>
            </p>
            <div className="footer__theme">
                <p className="theme-text">Switch theme </p>
                <span className="theme" onClick={ ()=> handleClick() }></span>
            </div>
        </footer>
    )
}

export default Footer