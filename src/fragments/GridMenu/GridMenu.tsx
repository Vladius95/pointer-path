import "./GridMenu.scss"

import * as React from "react"
import { RouteLink } from "src/components/RouteLink/RouteLink"

export type GridMenuItem = {
  id: string | number
  path: string
  name: string
}

export interface GridMenuProps {
  title: string
  items: GridMenuItem[]
}

export function GridMenu({ title, items }: GridMenuProps) {
  return (
    <section className="grid-menu">
      <h3 className="grid-menu__title">{title}</h3>
      <ul className="grid-menu__list">
        {items.map(i => (
          <li key={i.id} className="grid-menu__item">
            <RouteLink to={`/${i.path}/`} extraClass="grid-menu__link">
              {i.name}
            </RouteLink>
          </li>
        ))}
      </ul>
    </section>
  )
}
