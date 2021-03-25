import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import { menuData } from "../../data/menuData";
import MenuButton from "../buttons/MenuButton.jsx";
import Image from "next/image";
import MenuTooltip from "../tooltips/MenuTooltip";

const Wrapper = styled.div`
  position: relative;
  top: 10px;
  display: grid;
  grid-template-columns: 44px auto;
  width: 100;
  justify-content: space-between;
  padding: 0 30px;
  align-items: center;
`;

const MenuWrapper = styled.div`
  display: grid;
  gap: 30px;
  grid-template-columns: repeat(${(props) => props.count}, auto);

  @media (max-width: 1000px) {
    grid-template-columns: auto;
    display: none;
  }
`;

const HamburgerWrapper = styled.div`
  display: none;

  @media (max-width: 1000px) {
    display: block;
  }
`;

const Logo = styled.div`
  width: 100px;
`;

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef();
  const tooltipRef = useRef();

  function handleClick(event) {
    setIsOpen(!isOpen);
    event.preventDefault();
  }

  function handleClickOutside(event) {
    if (
      ref.current &&
      !ref.current.contains(event.target) &&
      !tooltipRef.current.contains(event.target)
    ) {
      setIsOpen(false);
    }
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <Wrapper>
      <Link href="/">
        <Logo>
          <Image
            src="/images/logos/logo.png"
            alt="Logo"
            width={120}
            height={100}
          />
        </Logo>
      </Link>
      <MenuWrapper count={menuData.length} ref={ref}>
        {menuData.map((item, index) => (
          <MenuButton key={index} item={item} />
        ))}
        <HamburgerWrapper onClick={(event) => handleClick(event)}>
          {/* <MenuButton item={{ icon: "/images/icons/hamburger.svg" }} /> */}
        </HamburgerWrapper>
      </MenuWrapper>
      <div ref={tooltipRef}>
        <MenuTooltip isOpen={isOpen} />
      </div>
    </Wrapper>
  );
}
