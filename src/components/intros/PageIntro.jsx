import styled from "styled-components";

const Wrapper = styled.div``;

const ContentWrapper = styled.div``;

const Title = styled.h2`
  background: ${(props) =>
    props.gradientColor || "-webkit-linear-gradient(left, #037de8, #0fd9d9)"};
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Description = styled.p``;

export default function IntroSimple(props) {
  const { title, description, gradientColor } = props;
  return (
    <Wrapper>
      <ContentWrapper className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
        <Title
          gradientColor={gradientColor}
          className="text-4.5xl md:text-5xl font-extrabold"
        >
          {title || "Boost your productivity. Start using Workflow today."}
        </Title>
        <Description className="mt-4 text-1.5xl leading-normal md:text-2xl text-gray-500">
          {description ||
            "Check in again soon to discover more content. In the meantime you are more than welcome to contact us for any questions you might have."}
        </Description>
      </ContentWrapper>
    </Wrapper>
  );
}
