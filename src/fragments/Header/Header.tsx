import "./Header.scss"

import * as React from "react"

export function Header() {
  return (
    <header className="header">
      <div className="header__top-bar">
        <p className="header__site-name">Pointer Path</p>
        <p className="header__github">
          <a className="header__repository-link" href="#">
            GitHub
          </a>
        </p>
      </div>

      <p className="header__description">How does this algorithm work?</p>
    </header>
  )
}
