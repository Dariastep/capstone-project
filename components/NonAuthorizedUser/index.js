import styled from "styled-components";
import Login from "../Login";

export default function NonAuthorizedUser() {
  return (
    <Wrapper>
      <Notification>
        <IncognitoWrapper>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            height={60}
            width={60}
            role="img"
            aria-hidden="true"
            fill="grey"
          >
            <title>incognito-circle</title>
            <path d="M12 2C17.5 2 22 6.5 22 12S17.5 22 12 22 2 17.5 2 12 6.5 2 12 2M14.92 12.81C13.84 12.81 12.95 13.56 12.71 14.56C12.17 14.33 11.66 14.39 11.29 14.55C11.05 13.55 10.15 12.81 9.08 12.81C7.83 12.81 6.82 13.82 6.82 15.07C6.82 16.32 7.83 17.33 9.08 17.33C10.28 17.33 11.24 16.42 11.33 15.25C11.53 15.12 12.04 14.86 12.67 15.26C12.77 16.42 13.73 17.33 14.92 17.33C16.17 17.33 17.18 16.32 17.18 15.07C17.18 13.82 16.17 12.81 14.92 12.81M9.08 13.45C10 13.45 10.7 14.18 10.7 15.07C10.7 15.96 10 16.69 9.08 16.69C8.19 16.69 7.46 15.96 7.46 15.07C7.46 14.18 8.19 13.45 9.08 13.45M14.92 13.45C15.81 13.45 16.54 14.18 16.54 15.07C16.54 15.96 15.81 16.69 14.92 16.69C14 16.69 13.3 15.96 13.3 15.07C13.3 14.18 14 13.45 14.92 13.45M17.83 11.5H6.17V12.17H17.83V11.5M14.15 6.89C14 6.59 13.67 6.43 13.35 6.53L12 7L10.65 6.53L10.61 6.5C10.29 6.43 9.95 6.61 9.84 6.92L8.36 10.83H15.64L14.16 6.92L14.15 6.89Z" />
          </svg>
        </IncognitoWrapper>
        <p>You are not authorized, please log in.</p>
        <Login />
      </Notification>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem auto;
  justify-content: center;
`;

const Notification = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f8f8f8;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const NotificationImage = styled.img`
  width: 120px;
  height: auto;
  margin-bottom: 1rem;
`;
const IncognitoWrapper = styled.div`
  margin-bottom: 3rem;
`;
