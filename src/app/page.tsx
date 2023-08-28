"use client";
import styled from "styled-components";
import styles from "./page.module.css";
import { Button, Card, List, Typography, TypographyType } from "@/components";
import Furniture from "../assets/furniture.png";
import Photography from "../assets/photography.png";
import Rendering from "../assets/rendering.png";
import House from "../assets/house.png";
import Plan from "../assets/plan.png";
import Horse from "../assets/horse.png";

const Title = styled(Typography)`
  color: #1b264f;
  width: 730px;
  margin-bottom: 80px;

  span {
    color: #506bca;
  }
`;

const StyledList = styled(List)`
  margin-bottom: 12px;
`;

const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 40px 30px;
  margin-bottom: 80px;
`;

export default function Home() {
  const cards = [
    {
      headline: "Photography",
      content: (
        <div>
          <StyledList
            values={[
              "Drone Photography",
              "Interiors",
              "Exteriors / Architectural",
            ]}
          />
          Every photograph we produce finds the beauty in your property while
          serving as a profitable asset.
        </div>
      ),
      image: {
        src: Photography,
        width: 183.5,
        height: 336,
        alt: "Photography",
      },
    },
    {
      headline: "Virtual Staging",
      content:
        "Our staging will help you sell the potential of your space. We can work off of our own photography or photos you provide.",
      image: {
        src: Furniture,
        width: 183.5,
        height: 336,
        alt: "Furniture",
      },
    },
    {
      headline: "Renderings",
      content: (
        <div>
          <StyledList values={["Interiors", "Exteriors"]} />
          Renderings are the gold standard in pre-construction marketing.
        </div>
      ),
      image: {
        src: Rendering,
        width: 183.5,
        height: 336,
        alt: "Rendering",
      },
    },
    {
      headline: "Interactive Tours",
      content: (
        <div>
          <StyledList values={["Matterport", "Video Walkthroughs"]} />
          Give your audience the ability to explore your property without
          requiring in-person travel.
        </div>
      ),
      image: {
        src: House,
        width: 183.5,
        height: 336,
        alt: "House",
      },
    },
    {
      headline: "Floor Plans",
      content: (
        <div>
          <StyledList
            values={["On-site Measure", "2D Floor Plans", "3D Floor Plans"]}
          />
          We produce laser-precise floor plans faster than any other service.
        </div>
      ),
      image: {
        src: Plan,
        width: 183.5,
        height: 336,
        alt: "Plan",
      },
    },
    {
      headline: "Video",
      content: (
        <div>
          <StyledList
            values={[
              "Drone Cinematography",
              "Interiors ",
              "Exteriors / Architectural",
            ]}
          />
          Video content has higher engagement and will help your property stand
          out online.
        </div>
      ),
      image: {
        src: Horse,
        width: 183.5,
        height: 336,
        alt: "Horse",
      },
    },
  ];
  return (
    <main className={styles.main}>
      <Title type={TypographyType.SECTION_TITLE}>
        We make creative media that <span>adds value</span>
      </Title>
      <CardsContainer>
        {cards.map((card, index) => {
          return <Card key={index} {...card} />;
        })}
      </CardsContainer>
      <Button>Get Started</Button>
    </main>
  );
}
