
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { BLOCKS } from "@contentful/rich-text-types"
import Image from "next/image"
import styled from "styled-components"
import { H2 } from "../../components/styles/TextStyles"

let client = require("contentful").createClient({
    space: process.env.NEXT_CONTENTFUL_SPACE_ID,
    accessToken: process.env.NEXT_CONTENTFUL_ACCESS_TOKEN,
  })

export async function getStaticPaths() {
    let data = await client.getEntries({
        content_type: "articlePost",
    })

    return {
        paths: data.items.map((item) => ({
            params: { slug: item.fields.slug },
        })),
        fallback: true,
    }
}

export async function getStaticProps({ params }) {
    let data = await client.getEntries({
        content_type: "articlePost",
        "fields.slug": params.slug,
    })

    return {
        props: {
            article: data.items[0],
        }
    }
}

const Wrapper = styled.div``

const Title = styled(H2)``

const Content = styled.div``

export default function Article({ article }) {

    return (
    <Wrapper>
        <Title>{article.fields.title}</Title>
        <Content>
         {documentToReactComponents(article.fields.content, {
            renderNode: {
             [BLOCKS.EMBEDDED_ASSET]: (node) => (
                <Image 
                    src={"https:" + node.data.target.fields.file.url} 
                    width={node.data.target.fields.file.details.image.width} 
                    height={node.data.target.fields.file.details.image.height}
                />
              )
            }
        })}
      </Content>
    </Wrapper>
 )
}