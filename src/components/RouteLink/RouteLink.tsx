import * as React from "react"
import { Link, LinkProps } from "react-router-dom"

export interface RouteLinkProps extends Omit<LinkProps, "className"> {
  extraClass?: string
}

export function RouteLink({ extraClass = "", ...linkProps }: RouteLinkProps) {
  return <Link {...linkProps} className={`route-link ${extraClass}`} />
}
