import "./CommonLink.scss"

import * as React from "react"

export interface CommonLinkProps
  extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "className"> {
  extraClass?: string
}

export function CommonLink({ extraClass = "", ...aProps }: CommonLinkProps) {
  return (
    <a {...aProps} className={`common-link ${extraClass}`}>
      {aProps.children}{" "}
    </a>
  )
}

// export function BorderedLink(props: RouteLinkProps) {
//   return <RouteLink {...props} extraClass="bordered-link" />;
// }

// export function ButtonRouteLink(props: RouteLinkProps) {
//   const { extraClass = "", ...routeLinkProps } = props;
//   return (
//     <div className={`button-link ${extraClass || ""}`}>
//       <RouteLink {...routeLinkProps} />
//     </div>
//   );
// }
