import styled from "styled-components";

const TitleText = styled.h2`
  margin-bottom: 10px;
  text-align: center;
  font-family: "Voltaire Frangela";
  font-size: 20px;
  margin-top: 0;
`;

export default function Title({ children }: { children: React.ReactNode }) {
  return (
    <TitleText>
      {children}
    </TitleText>
  );
}