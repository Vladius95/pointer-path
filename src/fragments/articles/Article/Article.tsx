import "./Article.scss";

import * as React from "react";

export interface ArticleProps {
  title: string;
}

export function Article({
  title,
  children,
}: React.PropsWithChildren<ArticleProps>) {
  return (
    <div className="article">
      <h3 className="article__title">{title}</h3>
      {children}
    </div>
  );
}
