import { styled } from "styled-components";

const Layout = styled.div`
  margin-bottom: 60px;
  padding: 0 20px;
`;

export default function Section({ children }: { children: React.ReactNode }) {
  return (
    <Layout>{children}</Layout>
  );
}