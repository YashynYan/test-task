import React, { FC } from "react";
import { styled } from "styled-components";

const StyledUL = styled.ul`
  list-style: none;
  font-family: Nunito Sans;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: 26px;
`;

const StyledListItem = styled.li`
  &:before {
    content: "•";
    color: #d2ad81;
    font-weight: bold;
    display: inline-block;
    width: 0.75em;
  }
`;

type Props = {
  values: string[];
  className?: string;
};

export const List: FC<Props> = (props) => {
  const { values, className } = props;
  return (
    <StyledUL className={className}>
      {values.map((value, index) => {
        return <StyledListItem key={index}>{value}</StyledListItem>;
      })}
    </StyledUL>
  );
};
