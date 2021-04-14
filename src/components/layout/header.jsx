import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import { menuData } from "../../data/menuData";
import MenuButton from "../buttons/MenuButton.jsx";
import Image from "next/image";

const Wrapper = styled.div`
  position: absolute;
  top: 10px;
  display: grid;
  grid-template-columns: 44px auto;
  width: 100%;
  justify-content: space-between;
  padding: 0 30px;
  align-items: center;
`

const Logo = styled.div`
  width: 100px;
`;

const MenuWrapper = styled.div`
  display: grid;
  gap: 30px;
  grid-template-columns: repeat(${(props) => props.count}, auto);

  @media (max-width: 768px) {
    > a {
      display: none;
    }
    grid-template-columns: auto;
  }
`;

const HamburgerWrapper = styled.div`
  display: none;
  overflow: visible;

  @media (max-width: 768px) {
    display: block;
  }
`;

export default function Header() {
  return (
    <Wrapper>
      <Logo>
        <Link href="/">
          <Image
            src="/images/logos/logo.png"
            alt="Logo"
            width={120}
            height={100}
          />
        </Link>
      </Logo>
      <MenuWrapper count={menuData.length}>
        {menuData.map((item, index) => (
          <MenuButton
            item={item}
            key={index}
            onClick={(event) => handleClick(event)}
          />
        ))}
      </MenuWrapper>
    </Wrapper>
  );
}
