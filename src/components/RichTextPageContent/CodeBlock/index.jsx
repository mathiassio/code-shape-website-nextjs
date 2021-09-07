import { useEffect } from "react";
import CodeBlockStyles from "./CodeBlock.module.css";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";

export default function CodeBlock(props) {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  const { language, code } = props;

  return (
    <pre className={`${CodeBlockStyles.codeBlock} language-${language}`}>
      <code className={CodeBlockStyles.codeBlock__inner}>{code}</code>
    </pre>
  );
}
