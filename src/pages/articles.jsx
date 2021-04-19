import Head from "next/head"
import styled from "styled-components"
import { getListings } from "../../utils/contentful"
import Link from "next/link"
import { H2, MediumText } from "../components/styles/TextStyles"
import HeaderBackground from "../components/backgrounds/HeaderBackground"
import GlassGradientIntro from "../components/intros/GlassGradientIntro"

const Wrapper = styled.div`
  padding-top: 6rem;
`

const Main = styled.main`
display: grid; 
grid-gap: 1.875rem;
`

const Content = styled.div`
display: grid; 
grid-gap: 1.875rem;
max-width: 30rem;
border: 1px solid white;
`

const Title = styled(H2)`
display: grid; 
grid-gap: 1.875rem;
`

const Excerpt = styled(MediumText)`
display: grid; 
grid-gap: 1.875rem;
color: #fff;
`

export async function getStaticProps() {
  const data = await getListings()

  return {
    props:  { listings: data.articlePostCollection.items }
  }
}

export default function Articles({ listings }) {
  return (
    <Wrapper>
      <Head>
        <title>Code Shape - Articles</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeaderBackground image="../images/blobs/HeaderBlob02.svg" />
      <GlassGradientIntro
        title="Reading is making Meaning"
        description="We believe we can create amazing things together by keeping our knowledge up to date. Therefore we will do our best to deliver that to you every week."
        gradientColor="-webkit-linear-gradient(left, #F89929, #F5217B)"
      />
      <Main>
          {listings.map((listing) => (
            <Content>
              <Link 
                key={listing.slug} 
                href={`/articles/${listing.slug}`}
              >
                <a>
                  <Title>{listing.title}</Title>
                  <Excerpt>{listing.excerpt}</Excerpt>
                </a>
              </Link>
            </Content>
          ))}
      </Main>
    </Wrapper>
  );
}
