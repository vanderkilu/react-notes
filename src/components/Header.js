import React from 'react'

function Header() {
    return (
        <header className="header">
            <h3 className="app-name">TodoLy</h3>
            <p className="app-text"> Make your day productive   
                <span role="img" className="emoji" aria-label="productivity-emojis">
                    ⌛ ✍️
                </span>
            </p>
        </header>
    )
}

export default Header