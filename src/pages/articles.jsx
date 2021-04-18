import Head from "next/head"
import Link from "next/link"
import styled from "styled-components"
import { H1 } from "../components/styles/TextStyles"

const Wrapper = styled.div`
  margin-top: 10rem;
`

const PageName = styled(H1)`
  text-align: center;
  padding: 1rem;
`

let client = require("contentful").createClient({
  space: process.env.NEXT_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_CONTENTFUL_ACCESS_TOKEN,
})

export async function getStaticProps() {
  let data = await client.getEntries({
    content_type: "articlePost"
  })

  return {
    props: {
      articles: data.items
    }
  }
}

export default function Articles({ articles }) {
  return (
    <Wrapper>
      <Head>
        <title>Code Shape - Articles</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <ul>
          {articles.map(article => (
            <li key={article.sys.id}>
              <Link href={"/articles/" + article.fields.slug}>
                <a>{article.fields.title}</a>
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </Wrapper>
  );
}
