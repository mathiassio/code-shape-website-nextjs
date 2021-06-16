import styled from "styled-components";

const Wrapper = styled.div``;

const Title = styled.h2`
  background: ${(props) =>
    props.gradientColor || "-webkit-linear-gradient(left, #037de8, #0fd9d9)"};
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export default function PageTitle(props) {
  const { title, gradientColor } = props;
  return (
    <Wrapper className="max-w-2xl mx-auto text-center ">
      <Title
        gradientColor={gradientColor}
        className="text-4.5xl md:text-5xl font-extrabold"
      >
        {title || "REPLACE TEXT"}
      </Title>
    </Wrapper>
  );
}
