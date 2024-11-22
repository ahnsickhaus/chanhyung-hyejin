/**
 * 계좌번호 복사
 */
function handleCopyAccount(text: string) {
  if (navigator.clipboard) {
    navigator.clipboard.writeText(text)
      .then(() => {
        return alert("계좌번호가 복사되었습니다.");
      })
      .catch(err => {
        return alert("계좌번호 복사 실패");
      });
  }
}


export { handleCopyAccount };