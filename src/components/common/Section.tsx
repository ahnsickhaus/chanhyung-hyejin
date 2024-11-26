import { styled } from "styled-components";

const Layout = styled.div`
  padding: 0 20px 60px;
`;

export default function Section({ children }: { children: React.ReactNode }) {
  return (
    <Layout>{children}</Layout>
  );
}