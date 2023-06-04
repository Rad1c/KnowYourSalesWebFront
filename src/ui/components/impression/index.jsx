/** @jsxImportSource @emotion/react */
import { TextContent, ContentWrapper, P } from "./styled";
import { DiamondContainer, Diamond, DiamondText } from "../common/styled";

const Impression = (prop) => {
  const { name, text } = prop;
  return (
    <ContentWrapper>
      <DiamondContainer>
        <Diamond>
          <p css={DiamondText}>{name?.charAt(0).toUpperCase()}</p>
        </Diamond>
      </DiamondContainer>
      <TextContent>
        {text}
        <P>- {name?.slice(0, 1).toUpperCase() + name?.slice(1)}</P>
      </TextContent>
    </ContentWrapper>
  );
};

export default Impression;
