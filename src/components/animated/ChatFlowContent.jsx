import React from "react";
import styled from "styled-components";
import MessageNotification from "./MessageNotification";
import MessageNotificationReverted from "./MessageNotificationReverted";

const Wrapper = styled.div`
  position: absolute;
  max-width: 77rem;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(25.625rem, 1fr));
  top: 6rem;
  right: 0rem;

  @media screen and (max-width: 53.125rem) {
    display: none;
  }
`;

const NotificationsWrapper = styled.div`
  max-width: 22.5rem;
  display: grid;
  gap: 1.875rem;
  justify-self: center;
  align-items: center;
`;

const NotificationOne = styled.div`
  -webkit-animation: slide-in-bck-right 0.6s
    cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  animation: slide-in-bck-right 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;

  @-webkit-keyframes slide-in-bck-right {
    0% {
      -webkit-transform: translateZ(700px) translateX(400px);
      transform: translateZ(700px) translateX(400px);
      opacity: 0;
    }
    100% {
      -webkit-transform: translateZ(0) translateX(0);
      transform: translateZ(0) translateX(0);
      opacity: 1;
    }
  }
  @keyframes slide-in-bck-right {
    0% {
      -webkit-transform: translateZ(700px) translateX(400px);
      transform: translateZ(700px) translateX(400px);
      opacity: 0;
    }
    100% {
      -webkit-transform: translateZ(0) translateX(0);
      transform: translateZ(0) translateX(0);
      opacity: 1;
    }
  }
`;

const NotificationTwo = styled.div`
  position: relative;
  right: 6rem;

  -webkit-animation: slide-in-bck-right 0.8s
    cubic-bezier(0.25, 0.46, 0.45, 0.94) 1s both;
  animation: slide-in-bck-right 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) 1s
    both;

  @-webkit-keyframes slide-in-bck-right {
    0% {
      -webkit-transform: translateZ(700px) translateX(400px);
      transform: translateZ(700px) translateX(400px);
      opacity: 0;
    }
    100% {
      -webkit-transform: translateZ(0) translateX(0);
      transform: translateZ(0) translateX(0);
      opacity: 1;
    }
  }
  @keyframes slide-in-bck-right {
    0% {
      -webkit-transform: translateZ(700px) translateX(400px);
      transform: translateZ(700px) translateX(400px);
      opacity: 0;
    }
    100% {
      -webkit-transform: translateZ(0) translateX(0);
      transform: translateZ(0) translateX(0);
      opacity: 1;
    }
  }
`;

const NotificationThree = styled.div`
  -webkit-animation: slide-in-bck-right 0.6s
    cubic-bezier(0.25, 0.46, 0.45, 0.94) 2s both;
  animation: slide-in-bck-right 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) 2s
    both;

  @-webkit-keyframes slide-in-bck-right {
    0% {
      -webkit-transform: translateZ(700px) translateX(400px);
      transform: translateZ(700px) translateX(400px);
      opacity: 0;
    }
    100% {
      -webkit-transform: translateZ(0) translateX(0);
      transform: translateZ(0) translateX(0);
      opacity: 1;
    }
  }
  @keyframes slide-in-bck-right {
    0% {
      -webkit-transform: translateZ(700px) translateX(400px);
      transform: translateZ(700px) translateX(400px);
      opacity: 0;
    }
    100% {
      -webkit-transform: translateZ(0) translateX(0);
      transform: translateZ(0) translateX(0);
      opacity: 1;
    }
  }
`;

const NotificationFour = styled.div`
  position: relative;
  right: 4rem;

  -webkit-animation: slide-in-bck-right 0.6s
    cubic-bezier(0.25, 0.46, 0.45, 0.94) 3s both;
  animation: slide-in-bck-right 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) 3s
    both;

  @-webkit-keyframes slide-in-bck-right {
    0% {
      -webkit-transform: translateZ(700px) translateX(400px);
      transform: translateZ(700px) translateX(400px);
      opacity: 0;
    }
    100% {
      -webkit-transform: translateZ(0) translateX(0);
      transform: translateZ(0) translateX(0);
      opacity: 1;
    }
  }
  @keyframes slide-in-bck-right {
    0% {
      -webkit-transform: translateZ(700px) translateX(400px);
      transform: translateZ(700px) translateX(400px);
      opacity: 0;
    }
    100% {
      -webkit-transform: translateZ(0) translateX(0);
      transform: translateZ(0) translateX(0);
      opacity: 1;
    }
  }
`;

export default function ChatFlowContent() {
  return (
    <Wrapper>
      <NotificationsWrapper>
        <NotificationOne>
          <MessageNotification
            link="entrepreneurs"
            name="Julius"
            text="Hey, I'm about to rebrand my company website, can you help me create it? 👋🏼"
            image="images/profiles/julius.png"
            nameColor="#6058fc"
            borderColor="3px solid#6058fc"
          />
        </NotificationOne>
        <NotificationTwo>
          <MessageNotification
            link="community"
            name="Andreas"
            text="Hello, where do I join the Community?"
            image="images/profiles/andreas.png"
            nameColor="#ad48ff"
            borderColor="3px solid #ad48ff"
          />
        </NotificationTwo>
        <NotificationThree>
          <MessageNotification
            link="learn"
            name="Melanie"
            text="Gosh, CSS grid is tricking me. Can you help me? 😁"
            image="images/profiles/melanie.png"
            nameColor="#E7286F"
            borderColor="3px solid#E7286F"
          />
        </NotificationThree>
        <NotificationFour>
          <MessageNotificationReverted
            link="help"
            name="Code Shape"
            text="Sure! We will be more than happy to help!"
            image="images/profiles/logo.svg"
            nameColor="#F28808"
            borderColor="3px solid#F28808"
          />
        </NotificationFour>
      </NotificationsWrapper>
    </Wrapper>
  );
}
