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
  font-size: 15px;
`;

const Button = styled.button`
  padding: 7px 20px;
  background-color: #333333;
  color: #ffffff;
  border-radius: 25px;
  font-size: 13px;
`;

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
      <Button onClick={() => handleCopyAccount(account)}>계좌 복사</Button>
    </Container>
  );
}