import React, { FC, ReactNode } from "react";
import Image, { StaticImageData } from "next/image";
import styled from "styled-components";
import { Typography, TypographyType } from "..";

const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 437.5px;
`;

const CardContent = styled.div`
  background-color: #fff;
  border-radius: 0px 8px 8px 0px;
  padding: 40px 30px;
  width: 100%;
`;

const StyledHeadline = styled(Typography)`
  margin-bottom: 12px;
`;

const StyledDescription = styled(Typography)`
  color: #353844;
`;

type Props = {
  headline: string;
  content: string | ReactNode;
  image: {
    src: string | StaticImageData;
    width: number;
    height: number;
    alt: string;
  };
};

export const Card: FC<Props> = (props) => {
  const { headline, content, image } = props;
  return (
    <CardContainer>
      <Image {...image} />
      <CardContent>
        <StyledHeadline type={TypographyType.HEADLINE}>
          {headline}
        </StyledHeadline>
        <StyledDescription type={TypographyType.DESCRIPTION}>
          {content}
        </StyledDescription>
      </CardContent>
    </CardContainer>
  );
};
