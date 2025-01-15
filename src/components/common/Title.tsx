import styled from "styled-components";
import FadeInAnimation from "./FadeInAnimation";

const TitleText = styled.h2`
  margin-bottom: 10px;
  text-align: center;
  font-family: "Voltaire Frangela";
  font-size: 20px;
  margin-top: 0;
`;

export default function Title({ children }: { children: React.ReactNode }) {

  return (
    <FadeInAnimation>
      <TitleText>
        {children}
      </TitleText>
    </FadeInAnimation>
  );
}