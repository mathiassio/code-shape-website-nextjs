import React from "react";
import { NextSeo } from "next-seo";

const Page = ({ name, path, children }) => {
  const title = `Code Shape – ${name}`;
  const url = `https://codeshape.io${path}`;

  return (
    <>
      <NextSeo
        title={title}
        canonical={url}
        openGraph={{
          url,
          title,
        }}
      />
      {children}
    </>
  );
};

export default Page;
