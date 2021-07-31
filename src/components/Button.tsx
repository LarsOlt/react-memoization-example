import React from "react";

const ButtonC: React.FC<{
  onClick: (e: React.MouseEvent) => void;
}> = (props) => {
  console.log("Button rendered!")

  return <button onClick={props.onClick}>Click</button>;
};

export const Button = React.memo(ButtonC);
