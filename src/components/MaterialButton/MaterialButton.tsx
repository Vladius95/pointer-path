import "./MaterialButton.scss"

import React from "react"

// https://material.io/components/buttons/
export interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "className"> {
  extraClass?: string
}

export function MaterialButton({
  extraClass = "",
  ...buttonProps
}: ButtonProps) {
  return (
    <button
      type="button"
      {...buttonProps}
      className={`material-button ${extraClass}`}
    />
  )
}
