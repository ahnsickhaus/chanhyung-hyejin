import { styled } from "styled-components";

const Layout = styled.div`
  padding: 0 20px 60px;
`;

export default function Section({ children, backgroundColor }: { children: React.ReactNode, backgroundColor?: string }) {
  return (
    <Layout style={{ backgroundColor: backgroundColor }}>{children}</Layout>
  );
}