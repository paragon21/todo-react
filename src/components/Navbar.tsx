import React from 'react'

const Navbar: React.FC = () => {
    return (
        <nav>
            <div className="nav-wrapper px1 indigo darken-3">
            <a href="/#" className="brand-logo">React + TypeScript</a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><a href="/#">Список дел</a></li>
                <li><a href="/#">Инфо</a></li>
            </ul>
            </div>
      </nav>
    )
}

export default Navbar