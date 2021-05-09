import tw from "tailwind-styled-components";
import Link from "next/link";

const Wrapper = tw.div` 
 pt-3
`;

const ContentWrapper = tw.div``;

const CategoryWrapper = tw.div`
 grid 
 gap-2 
 grid-flow-col 
 auto-cols-max 
 md:auto-cols-min
`;

const Categories = tw.a`
 bg-indigo-600 
 p-1 
 rounded
`;

export default function CategorySection({ categories }) {
  return (
    <Wrapper>
      <ContentWrapper>
        <CategoryWrapper>
          {categories.map((category) => {
            return (
              <>
                {category.contentfulMetadata.tags.map((tag) => {
                  return (
                    <Link href={`/articles/categories/${tag.id}`}>
                      <Categories>{tag.name}</Categories>
                    </Link>
                  );
                })}
              </>
            );
          })}
        </CategoryWrapper>
      </ContentWrapper>
    </Wrapper>
  );
}
