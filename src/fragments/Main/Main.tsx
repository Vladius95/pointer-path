import "./Main.scss"

import * as React from "react"
import {
  GridMenuItem,
  GridMenuProps,
  GridMenu,
} from "src/fragments/GridMenu/GridMenu"

const MENU_DATA_STRUCTURE: GridMenuProps = {
  title: "Data Structure",
  items: [
    {
      id: "stack",
      name: "Stack",
      path: "stack",
    },
    {
      id: "queue",
      name: "Queue",
      path: "queue",
    },
    {
      id: "linked list",
      name: "Linked List",
      path: "linked-list",
    },
  ],
}

const MENU_SORTING: GridMenuProps = {
  title: "Sorting",
  items: [
    {
      id: "bubble",
      name: "Bubble Sort",
      path: "bubble-sort",
    },
    {
      id: "quick",
      name: "Quicksort",
      path: "quicksort",
    },
    {
      id: "insertion",
      name: "Insertion Sort",
      path: "insertion-sort",
    },
    {
      id: "merge",
      name: "Merge Sort",
      path: "merge-sort",
    },
    {
      id: "selection",
      name: "Selection Sort",
      path: "selection-sort",
    },
    {
      id: "gnome",
      name: "Gnome Sort",
      path: "gnome-sort",
    },
    {
      id: "quicksort",
      name: "Quicksort",
      path: "quicksort",
    },
  ],
}

const MENU_BINARY_TREES: GridMenuProps = {
  title: "Binary Trees",
  items: [
    {
      id: "tree",
      name: "Binary Tree",
      path: "binary-tree",
    },
    {
      id: "binary search tree",
      name: "Binary Search Tree",
      path: "binary-search-tree",
    },
  ],
}

const MENU_ITEMS: GridMenuProps[] = [
  MENU_DATA_STRUCTURE,
  MENU_SORTING,
  MENU_BINARY_TREES,
]

export function MenuList() {
  return (
    <ul className="menu-list">
      {MENU_ITEMS.map(i => (
        <li key={i.title} className="menu-list__item">
          <GridMenu {...i} />
        </li>
      ))}
    </ul>
  )
}
