/** @jsxImportSource @emotion/react */
import { ImpressionsContainer, ContentWrapper, ColumnContainer, ContentContainer } from "./styled";
import { MediumTitleHeight, BigTitleHeight } from "../common/styled";
import Impression from "../impression";
import useHomeStore from "../../../store/homeStore";
import { useEffect } from "react";
import { Skeleton } from "@mui/material";

const ImpressionsSection = () => {
  const { getImpressions, impressions } = useHomeStore();

  useEffect(() => {
    getImpressions();
  }, []);

  return (
    <ImpressionsContainer id="impressions-section">
      <ContentWrapper>
        <div>
          <div css={MediumTitleHeight}>UTISCI NAŠIH KORISNIKA</div>
          <BigTitleHeight>Pridružite se grupi zadovoljnih korisnika</BigTitleHeight>
        </div>
        <div style={{ display: "flex" }}>
          <ColumnContainer>
            {impressions[0] ? (
              <Impression name={impressions[0]?.name} text={impressions[0]?.impression} />
            ) : (
              <Skeleton
                variant="rectangular"
                width={600}
                height={116}
                sx={{ backgroundColor: "#654689", margin: "15px" }}
              />
            )}
            {impressions[1] ? (
              <Impression name={impressions[1]?.name} text={impressions[1]?.impression} />
            ) : (
              <Skeleton
                variant="rectangular"
                width={600}
                height={116}
                sx={{ backgroundColor: "#654689", margin: "15px" }}
              />
            )}
          </ColumnContainer>
          <ColumnContainer>
            {impressions[2] ? (
              <Impression name={impressions[2]?.name} text={impressions[2]?.impression} />
            ) : (
              <Skeleton
                variant="rectangular"
                width={600}
                height={116}
                sx={{ backgroundColor: "#654689", margin: "15px" }}
              />
            )}
            {impressions[3] ? (
              <Impression name={impressions[3]?.name} text={impressions[3]?.impression} />
            ) : (
              <Skeleton
                variant="rectangular"
                width={600}
                height={116}
                sx={{ backgroundColor: "#654689", margin: "15px" }}
              />
            )}
          </ColumnContainer>
        </div>
      </ContentWrapper>
    </ImpressionsContainer>
  );
};

export default ImpressionsSection;
