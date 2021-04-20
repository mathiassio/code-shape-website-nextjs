import * as React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  padding: 1rem;
  .utterances {
    max-width: 77rem;
  }
`;

export default function Utterances({
  repo = "Code-Shape/code-shape-website-nextjs",
  issueTerm = "pathname",
  label = "",
  theme = "preferred-color-scheme",
  crossOrigin = "anonymous",
  async = true,
}) {
  const rootElm = React.createRef<HTMLDivElement>();

  React.useEffect(() => {
    const utterances = document.createElement("script");

    // set config to of script element
    Object.entries({
      src: "https://utteranc.es/client.js",
      repo,
      "issue-term": issueTerm,
      label,
      theme,
      crossOrigin,
      async,
    }).forEach(([key, value]) => {
      utterances.setAttribute(key, value as any);
    });
    // attach script element
    rootElm.current!.appendChild(utterances);
  }, []);

  return <Wrapper id="utterances_container" ref={rootElm} />;
}
