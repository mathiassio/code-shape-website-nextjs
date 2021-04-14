import * as React from "react"
import { useRef } from "react"
import { motion, useCycle } from "framer-motion"
import { useDimensions } from "./use-dimensions"
import MenuToggle from "./MenuToggle"
import Navigation from "./Navigation"
import styled from "styled-components"

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2
    }
  }),
  closed: {
    clipPath: "circle(30px at 232px 50px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40
    }
  }
}

const Sidebar = styled(motion.div)`
 position: absolute;
 top: 0;
 right: 0;
 bottom: 0;
 width: 300px;
 box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);

  @supports (backdrop-filter: blur(40px)) or
    (-webkit-backdrop-filter: blur(40px)) {
    opacity: 0, 5;
    background-color: transparent;
    -webkit-backdrop-filter: blur(40px);
    backdrop-filter: blur(40px);
    border: 1px solid rgba(255, 255, 255, 0.18);
  }

  @-moz-document url-prefix() {
    background-color: rgba(242, 242, 242, 1.0);
    @media (prefers-color-scheme: dark) {
      background-color: rgba(50, 50, 52, 1.0);
    }
  }

  @media (min-width: 768px) {
    display: none;
  }
`

export default function SidebarMenu() {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom={height}
      ref={containerRef}
    >
      <Sidebar variants={sidebar} />
      <Navigation />
      <MenuToggle toggle={() => toggleOpen()} />
    </motion.nav>
  )
}

