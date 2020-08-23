import * as React from "react";
import { MaterialButton } from "src/components/MaterialButton/MaterialButton";
import { Article } from "../Article/Article";
import { StackShape } from "./fragments/StackShape";
import { Stack } from "src/fragments/articles/Stack/stack";

const WIDTH = 120;
const HEIGHT = 60;

export function StackLayout() {
  const stack = React.useRef(
    new Stack<number>([1, 2, 3, 4])
  );
  const [blocks, setBlocks] = React.useState(stack.current.value);

  const onPushBlock = React.useCallback(() => {
    stack.current.push(Math.random());
    setBlocks([...stack.current.value]);
  }, []);

  const onPopBlock = React.useCallback(() => {
    stack.current.pop();
    setBlocks([...stack.current.value]);
  }, []);

  return (
    <Article title="Stack">
      <div className="stack">
        <div className="stack__shape">
          <StackShape blocks={blocks} blockWidth={WIDTH} blockHeight={HEIGHT} />
        </div>
        <div className="stack__controls">
          <MaterialButton
            onClick={onPushBlock}
            extraClass="stack__button--push"
          >
            <p className="stack__button--text">Push</p>
          </MaterialButton>
          <MaterialButton onClick={onPopBlock} extraClass="stack__button--pop">
            <p className="stack__button--text">Pop</p>
          </MaterialButton>
        </div>
      </div>
    </Article>
  );
}
