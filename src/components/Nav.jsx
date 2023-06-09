import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import LoginModal from "../features/auth/LoginModal";
import LogoutModal from "../features/auth/LogoutModal";
import { cookies } from "../shared/cookies";

function Nav() {
  let [isLoginModal, setIsLoginModal] = useState(false);
  let [isLogoutModal, setIsLogoutModal] = useState(false);

  const isLogin = useSelector((state) => state.login.isLogin);

  useEffect(() => {
    return () => {};
  }, [isLogin]);

  return (
    <StNavWrapper>
      <StNavTitle>
        <StNavBox>
          <StNavContentBoxLeft>
            <DownloadBtn>
              <LeftImg
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTYiIGhlaWdodD0iMTciIHZpZXdCb3g9IjAgMCAxNiAxNyI+CiAgICA8ZGVmcz4KICAgICAgICA8cGF0aCBpZD0ibTg4aW90dDQ5YSIgZD0iTTE2IDExLjAxOGwtLjAwMS41N2MtLjAwMS4xNi0uMDAzLjMyLS4wMDcuNDgxLS4wMS4zNDktLjAzLjcwMS0uMDk0IDEuMDQ2LS4wNjMuMzUtLjE2Ny42NzYtLjMzMS45OTUtLjE2MS4zMTItLjM3MS41OTktLjYyMi44NDdzLS41NC40NTYtLjg1Ny42MTVjLS4zMjIuMTYyLS42NTEuMjY1LTEuMDA2LjMyOC0uMzQ5LjA2Mi0uNzA1LjA4Mi0xLjA1OC4wOTItLjY3OS4wMDgtLjg3MS4wMDgtMS4wNjQuMDA4SDUuMDRjLS43NC0uMDAyLS45MDItLjAwNC0xLjA2NC0uMDA4LS4zNTMtLjAxLS43MDktLjAzLTEuMDU4LS4wOTItLjM1NC0uMDYzLS42ODQtLjE2Ni0xLjAwNi0uMzI4LS4zMTYtLjE2LS42MDYtLjM2Ny0uODU3LS42MTUtLjI1LS4yNDgtLjQ2LS41MzUtLjYyMi0uODQ3LS4xNjQtLjMxOS0uMjY4LS42NDUtLjMzMS0uOTk1LS4wNjMtLjM0NS0uMDg0LS42OTctLjA5My0xLjA0Ni0uMDA1LS4xNi0uMDA3LS4zMi0uMDA4LS40OEwwIDExLjAxOFY0Ljk4MmwuMDAxLS41N2MuMDAxLS4xNi4wMDMtLjMyLjAwOC0uNDgxLjAxLS4zNDkuMDMtLjcwMS4wOTMtMS4wNDYuMDYzLS4zNS4xNjctLjY3Ni4zMzEtLjk5NS4xNjEtLjMxMy4zNzEtLjU5OS42MjItLjg0N3MuNTQtLjQ1Ni44NTctLjYxNUMyLjIzNC4yNjYgMi41NjQuMTYzIDIuOTE4LjFjLjM1LS4wNjIuNzA1LS4wODIgMS4wNTgtLjA5MkM0LjY1NiAwIDQuODQ4IDAgNS4wNCAwSDEwLjgwMiA4Ljc1aDIuMjFjLjc0LjAwMi45MDIuMDA0IDEuMDY0LjAwOC4zNTMuMDEuNzA5LjAzIDEuMDU4LjA5Mi4zNTUuMDYzLjY4NC4xNjYgMS4wMDYuMzI4LjMxNi4xNi42MDYuMzY3Ljg1Ny42MTUuMjUuMjQ4LjQ2MS41MzQuNjIyLjg0Ny4xNjQuMzE5LjI2OC42NDQuMzMxLjk5NS4wNjMuMzQ1LjA4NC42OTcuMDk0IDEuMDQ2LjAwNC4xNi4wMDYuMzIuMDA3LjQ4bC4wMDEuNTcxdjYuMDM2eiIvPgogICAgPC9kZWZzPgogICAgPGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjAwMDAwMCwgMS4wMDAwMDApIj4KICAgICAgICAgICAgPG1hc2sgaWQ9IjN4bmRjNnc0YWIiIGZpbGw9IiNmZmYiPgogICAgICAgICAgICAgICAgPHVzZSB4bGluazpocmVmPSIjbTg4aW90dDQ5YSIvPgogICAgICAgICAgICA8L21hc2s+CiAgICAgICAgICAgIDxwYXRoIGZpbGw9IiNEODBDMTgiIGQ9Ik0wIDBIMTZWMTZIMHoiIG1hc2s9InVybCgjM3huZGM2dzRhYikiLz4KICAgICAgICAgICAgPGcgZmlsbD0iI0ZGRiIgbWFzaz0idXJsKCMzeG5kYzZ3NGFiKSI+CiAgICAgICAgICAgICAgICA8cGF0aCBkPSJNOC45MSA0LjkyMUwzLjY0MyAxMC41NmMtLjAzNC4wMzYtLjA5NS4wMDgtLjA4OS0uMDQybC41ODgtNC43NzZIMS43MDRjLS4wNDUgMC0uMDY4LS4wNTQtLjAzOC0uMDg3TDYuOTMzLjAxN2MuMDM0LS4wMzcuMDk1LS4wMDkuMDg5LjA0MWwtLjU4OCA0Ljc3NmgyLjQzN2MuMDQ2IDAgLjA3LjA1NC4wMzkuMDg3eiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMi43MTE4NjQsIDIuNzExODY0KSIvPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4K"
                alt="앱다운로드버튼 이미지"
              />
              앱다운로드
            </DownloadBtn>
            <StNavButton>
              <LeftImg
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNSIgdmlld0JveD0iMCAwIDE2IDE1Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggc3Ryb2tlPSIjQ0NDIiBkPSJNLTE2LjUtMTYuNWg0OXY0OWgtNDl6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0iI0U5QjQ1NyIgZmlsbC1ydWxlPSJub256ZXJvIiBkPSJNOCAwbDIuNSA0LjkzNCA1LjUuNzktNCAzLjg0OC45IDUuNDI4TDggMTIuNDM0IDMuMSAxNSA0IDkuNTcyIDAgNS43MjRsNS41LS43OXoiLz4KICAgIDwvZz4KPC9zdmc+Cg=="
                alt="즐겨찾기버튼 이미지"
              />
              즐겨찾기
            </StNavButton>
          </StNavContentBoxLeft>
        </StNavBox>
        <StNavBox></StNavBox>
        <StNavBox>
          {isLogin ? (
            <StNavMemberButton
              type="button"
              style={{ cursor: "pointer" }}
              // onClick={logout}
              onClick={() => {
                setIsLogoutModal(!isLogoutModal);
              }}
            >
              로그아웃
            </StNavMemberButton>
          ) : (
            <StNavMemberButton
              onClick={() => {
                setIsLoginModal(!isLoginModal);
              }}
            >
              로그인/회원가입
            </StNavMemberButton>
          )}

          <StNavContentBox>
            <StNavDropdownTitleBox>
              <StNavDropdowTitle>알림</StNavDropdowTitle>
            </StNavDropdownTitleBox>
          </StNavContentBox>
          <StNavContentBox>
            <StNavDropdownTitleBox>
              <StNavDropdowTitle href="/">내 상점</StNavDropdowTitle>
            </StNavDropdownTitleBox>
          </StNavContentBox>
        </StNavBox>
      </StNavTitle>
      <LoginModal
        isLoginModal={isLoginModal}
        setIsLoginModal={setIsLoginModal}
      />
      <LogoutModal
        isLogoutModal={isLogoutModal}
        setIsLogoutModal={setIsLogoutModal}
      />
    </StNavWrapper>
  );
}
const LeftImg = styled.img`
  width: 16px;
  height: 15px;
  margin-right: 5px;
  cursor: pointer;
`;

const StNavWrapper = styled.div`
  display: flex;
  justify-content: center;
  border-bottom: 1px solid rgb(238, 238, 238);
  height: 40px;
  background: rgb(255, 255, 255);
`;

const StNavTitle = styled.div`
  width: 1024px;
  display: flex;
  justify-content: space-between;
`;

const StNavBox = styled.div`
  display: flex;
  flex-shrink: 0;
`;

const StNavContentBoxLeft = styled.span`
  display: flex;
  align-items: center;
  font-size: 13px;
  color: rgb(102, 102, 102);
  padding: 0px 15px;
  position: relative;
  line-height: 1.4;
`;

const StNavContentBox = styled.span`
  display: flex;
  align-items: center;
  font-size: 13px;
  color: rgb(102, 102, 102);
  padding: 0px 15px;
  position: relative;
  line-height: 1.4;
  cursor: pointer;

  ::after {
    content: "";
    background-image: url("https://m.bunjang.co.kr/pc-static/resource/7bbef4f92f65946992bd.png");
    background-size: 10px 5px;
    position: absolute;
    top: 18px;
    right: 0px;
    width: 10px;
    height: 5px;
    cursor: default;
  }
`;

const DownloadBtn = styled.button`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  font-size: 13px;
  color: rgb(102, 102, 102);
  padding: 0px 15px;
  position: relative;
  line-height: 1.4;
  border: 1px solid transparent;
  cursor: pointer;
  align-items: center;
  background-color: transparent;
`;

const StNavButton = styled.button`
  display: flex;
  align-items: center;
  font-size: 13px;
  color: rgb(102, 102, 102);
  padding: 0px 15px;
  position: relative;
  line-height: 1.4;
  border: 1px solid transparent;
  background-color: white;
  cursor: pointer;
  align-items: center;
`;

const StNavMemberButton = styled.button`
  display: flex;
  align-items: center;
  font-size: 13px;
  color: rgb(102, 102, 102);
  padding: 0px 15px;
  position: relative;
  line-height: 1.4;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

const StNavDropdownTitleBox = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
`;

const StNavDropdowTitle = styled.a`
  display: block;
  font-size: 13px;
  color: rgb(102, 102, 102);
  text-decoration-line: none;
`;

export default Nav;
