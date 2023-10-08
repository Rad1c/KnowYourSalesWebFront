import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { Container, ContentWrapper, Content } from "./styled";
import useAccountStore from "../../../store/accountStore";

const VerifyAccount = () => {
  const { verificationCode } = useParams();
  const [isVerified, setIsVerfied] = useState(false);
  const { verifyAccount, status } = useAccountStore();
  useEffect(() => {
    setIsVerfied(verifyAccount(verificationCode));
  }, []);

  useEffect(() => {
    if (status == 200) {
      setIsVerfied(true);
    }

    console.log(status);
  }, [status]);

  return (
    <>
      <Container>
        <img src="/img/kys-header.png" alt="logo" />
      </Container>
      <ContentWrapper>
        {status == 0 ? (
          <></>
        ) : isVerified === true ? (
          <Content>
            <p style={{ fontSize: "22px", marginBottom: "10px" }}>Email is verfied!</p>
            <p style={{ fontSize: "16px" }}>
              Please continue to login <a href={window.origin}>Login to KnowYourSales</a>
            </p>
          </Content>
        ) : (
          <Content>
            <p style={{ fontSize: "22px", marginBottom: "10px" }}>Woops!</p>
            <p style={{ fontSize: "16px" }}>
              Either the provided activation token is invalid or this account has already been
              activated. <br />
              <br />
              Please contact Support at support@knowyoursales.com if you experience any issues
              accessing your account.
              <br />
              <br /> Login to KnowYourSales
              <a style={{ marginLeft: "10px" }} href={window.origin}>
                Login to KnowYourSales
              </a>
            </p>
          </Content>
        )}
      </ContentWrapper>
    </>
  );
};

export default VerifyAccount;
