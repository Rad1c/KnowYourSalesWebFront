import { ErrorPageContainer, ErrorDiv, ErrorText } from "./styled";

const Error = () => {
  return (
    <ErrorPageContainer>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <ErrorDiv />
        <ErrorText>Page Not Found</ErrorText>
      </div>
    </ErrorPageContainer>
  );
};

export default Error;
