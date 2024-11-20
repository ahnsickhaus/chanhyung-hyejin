import styled from "styled-components";

const TitleText = styled.h2`
  margin-bottom: 30px;
  text-align: center;
`;

export default function Title({ children }: { children: React.ReactNode }) {
  return (
    <TitleText>
      {children}
    </TitleText>
  );
}