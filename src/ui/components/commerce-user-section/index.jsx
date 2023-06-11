import {
  P,
  ImgContainer,
  imgStyle,
  ControlsContainer,
  BtnEdit,
  BtnDeactivate,
  Container,
  delimiterStyle,
} from "./styled";

const CommerceUserSection = (props) => {
  const { name, img } = props;

  return (
    <Container>
      <div style={{ display: "flex" }}>
        <ControlsContainer>
          <ImgContainer>
            <img src={img} alt="commerce-img" style={imgStyle} />
          </ImgContainer>
          <P>{name}</P>
        </ControlsContainer>
        <ControlsContainer>
          <BtnEdit />
          <BtnDeactivate />
        </ControlsContainer>
      </div>
      <img src="/img/commerce-delimiter.png" alt="delimiter" css={delimiterStyle} />
    </Container>
  );
};

export default CommerceUserSection;
