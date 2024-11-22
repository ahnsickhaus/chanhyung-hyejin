import { styled } from "styled-components";
import { handleCopyAccount } from "../../lib/utils";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`;

const Text = styled.p`
  text-align: justify;
`;

const Button = styled.button``;

export default function AccountComponent({
  name,
  account,
}: {
  name: string,
  account: string,
}) {
  return(
    <Container>
      <div>
        <Text>{account}</Text>
        <Text>{name}</Text>
      </div>
      <Button onClick={() => handleCopyAccount(account)}>복사하기</Button>
    </Container>
  );
}