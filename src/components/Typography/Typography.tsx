import React, { FC, PropsWithChildren } from "react";
import { TypographyType } from "./types";
import styled from "styled-components";

const TypographyHeadline = styled.h3`
  font-family: Poppins;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 32px;
  color: #353844;
`;

const TypographySectionTitle = styled.h2`
  text-align: center;
  font-family: Poppins;
  font-size: 56px;
  font-style: normal;
  font-weight: 700;
  line-height: 55px;
  letter-spacing: -0.56px;
  color: #353844;
`;

const TypographyDescription = styled.div`
  font-family: Nunito Sans;
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
  color: #353844;
`;

type Props = {
  type: TypographyType;
  className?: string;
};

export const Typography: FC<PropsWithChildren<Props>> = (props) => {
  const { children, type, className } = props;
  switch (type) {
    case TypographyType.HEADLINE:
      return (
        <TypographyHeadline className={className}>
          {children}
        </TypographyHeadline>
      );
    case TypographyType.SECTION_TITLE:
      return (
        <TypographySectionTitle className={className}>
          {children}
        </TypographySectionTitle>
      );
    case TypographyType.DESCRIPTION:
      return (
        <TypographyDescription className={className}>
          {children}
        </TypographyDescription>
      );
    default:
      return <div>{children}</div>;
  }
};
