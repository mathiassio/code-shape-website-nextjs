import React from "react";
import styled from "styled-components";
import MessageNotification from "./MessageNotification";
import MessageNotificationReverted from "./MessageNotificationReverted";
import { motion } from "framer-motion";

const Wrapper = styled.div`
  position: absolute;
  max-width: 77rem;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(25.625rem, 1fr));
  top: 7rem;
  right: -25rem;

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

const NotificationOne = styled(motion.div)``;

const NotificationTwo = styled(motion.div)``;

const NotificationThree = styled(motion.div)``;

const NotificationFour = styled(motion.div)``;

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export default function ChatFlowContent() {
  return (
    <Wrapper>
      <NotificationsWrapper>
        <NotificationOne animate={{ x: -400 }} transition={{ duration: 0.5 }}>
          <MessageNotification
            link="enterprise"
            name="Julius"
            text="Hey, I'm about to rebrand my company website, can you help me create it? 👋🏼"
            image="images/profiles/julius.png"
            nameColor="#6058fc"
            borderColor="3px solid#6058fc"
          />
        </NotificationOne>
        <NotificationTwo animate={{ x: -480 }} transition={{ duration: 0.7 }}>
          <MessageNotification
            link="community"
            name="Andreas"
            text="Hello, where do I join the Community?"
            image="images/profiles/andreas.png"
            nameColor="#ad48ff"
            borderColor="3px solid #ad48ff"
          />
        </NotificationTwo>
        <NotificationThree animate={{ x: -410 }} transition={{ duration: 0.9 }}>
          <MessageNotification
            link="learn"
            name="Melanie"
            text="Gosh, CSS grid is tricking me. Can you help me? 😁"
            image="images/profiles/melanie.png"
            nameColor="#E7286F"
            borderColor="3px solid#E7286F"
          />
        </NotificationThree>
        <NotificationFour animate={{ x: -550 }} transition={{ duration: 1.1 }}>
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
