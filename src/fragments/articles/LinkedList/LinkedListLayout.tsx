import * as React from "react";
import { Article } from "../Article/Article";
import { LinkedList } from "./LinkedList";
import { LinkedListShape } from "./fragments/LinkedListShape";

const WIDTH = 120;
const HEIGHT = 120;

export function LinkedListLayout() {
  const linkedList = React.useRef(
    new LinkedList<number>([1, 2, 3, 4, 5])
  );

  return (
    <Article title="Linked List">
      <LinkedListShape
        blocks={linkedList.current.values()}
        blockHeight={HEIGHT}
        blockWidth={WIDTH}
      />
    </Article>
  );
}
