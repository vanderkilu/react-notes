import React from 'react'

function Footer() {
    const handleClick = () => {
        const html = document.getElementsByTagName('html')[0]
        html.classList.toggle('light-theme')
    }
    return (
        <footer>
            <div className="footer">
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
            </div>
        </footer>
    )
}

export default Footer