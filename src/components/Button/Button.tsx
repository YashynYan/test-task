import React, { FC } from "react";
import { styled } from "styled-components";

const StyledButton = styled.button`
  padding: 0px 58px;
  background: #1b264f;
  color: #ffff;
  font-size: 17px;
  line-height: 60px;
  font-weight: 700;
  border-radius: 12px;
  letter-spacing: 3.4px;
  text-transform: uppercase;
`;

type Props = {
  type?: "button" | "submit" | "reset";
}

export const Button: FC<Props & React.HTMLProps<HTMLButtonElement>> = (
  props
) => {
  const { children, ...otherProps } = props;
  return <StyledButton {...otherProps}>{children}</StyledButton>;
};
