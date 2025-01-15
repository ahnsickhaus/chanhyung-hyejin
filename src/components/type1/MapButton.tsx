import { styled } from "styled-components";

interface MapButtonProps {
  iconUrl: string;
  name: string;
}

const Button = styled.button`
  background-color: transparent;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
`

const Icon = styled.img`
  width: 28px;
  height: 28px;
`;

const Text = styled.p`
  font-size: 13px;
  font-family: "Noto Sans KR", sans-serif;
  color: #13110F;
  font-weight: 500;
`;

const MapButton = ({
  iconUrl,
  name
}: MapButtonProps) => {
  /** 지도 앱 연결 */
  const clickMapButton = (name: string) => {
    const isAndroid = /Android/i.test(navigator.userAgent);
    const isIos = /iPhone|iPad|iPod/i.test(navigator.userAgent);
    const appName = "ahnsikhaus.github.io";
    // 우리들교회 판교채플
    const encodedDestination = "%EC%9A%B0%EB%A6%AC%EB%93%A4%EA%B5%90%ED%9A%8C%20%ED%8C%90%EA%B5%90%EC%B1%84%ED%94%8C"

    if (name === 'TMAP') {
      const clickedAt = +new Date();
    
      if (isAndroid) {
        window.location.href = `tmap://search?name=${encodedDestination}`;
        
        setTimeout(function() {
          if (+new Date() - clickedAt < 2000) {
            // TMAP 앱이 설치되지 않은 경우 구글 플레이 스토어로 이동
            return window.location.href = 'https://play.google.com/store/apps/details?id=com.skt.tmap.ku';
          }
        }, 1500);
    
      } else if (isIos) {
        window.location.href = `tmap://search?name=${encodedDestination}`;
    
        setTimeout(function() {
          if (+new Date() - clickedAt < 2000) {
            // TMAP 앱이 설치되지 않은 경우 앱스토어로 이동
            return window.location.href = 'https://apps.apple.com/kr/app/t-map-%ED%8B%B0%EB%A7%B5-%EB%AA%A8%EB%B0%94%EC%9D%BC/id431589174';
          }
        }, 1500);
      }
    }
    
    if (name === '네이버') {
      const clickedAt = +new Date();
    
      if (isAndroid) {
        window.location.href = `intent://search?query=${encodedDestination}&appname=${appName}#Intent;scheme=nmap;action=android.intent.action.VIEW;category=android.intent.category.BROWSABLE;package=com.nhn.android.nmap;end`;
    
        setTimeout(function() {
          if (+new Date() - clickedAt < 2000) {
            return window.location.href = 'https://play.google.com/store/apps/details?id=com.nhn.android.nmap';
          }
        }, 1500);
    
      } else if (isIos) {
        window.location.href = `nmap://search?query=${encodedDestination}&appname=${appName}`;
    
        setTimeout(function() {
          if (+new Date() - clickedAt < 2000) {
            return window.location.href = 'http://itunes.apple.com/app/id311867728?mt=8';
          }
        }, 1500);
      }
    }
    
    if (name === '카카오') {
      const clickedAt = +new Date();
    
      if (isAndroid) {
        window.location.href = `kakaomap://search?q=${encodedDestination}`;
    
        setTimeout(function() {
          if (+new Date() - clickedAt < 2000) {
            // 카카오맵 앱이 설치되지 않은 경우 구글 플레이 스토어로 이동
            return window.location.href = 'https://play.google.com/store/apps/details?id=net.daum.android.map';
          }
        }, 1500);
    
      } else if (isIos) {
        window.location.href = `kakaomap://search?q=${encodedDestination}`;
    
        setTimeout(function() {
          if (+new Date() - clickedAt < 2000) {
            // 카카오맵 앱이 설치되지 않은 경우 앱스토어로 이동
            return window.location.href = 'https://apps.apple.com/kr/app/id304608425';
          }
        }, 1500);
      }
    }
  }

  return (
    <Button onClick={() => clickMapButton(name)}>
      <Icon src={iconUrl} />
      <Text>{name}</Text>
    </Button>
  )
}

export default MapButton;