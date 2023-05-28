/** @jsxImportSource @emotion/react */
import { ImpressionsContainer, ContentWrapper, ColumnContainer, ContentContainer } from "./styled";
import { MediumTitleHeight, BigTitleHeight } from "../common/styled";
import Impression from "../impression";

const ImpressionsSection = () => {
  return (
    <ImpressionsContainer id="impressions-section">
      <ContentWrapper>
        <div>
          <div css={MediumTitleHeight}>UTISCI NAŠIH KORISNIKA</div>
          <BigTitleHeight>Pridružite se grupi zadovoljnih korisnika</BigTitleHeight>
        </div>
        <div style={{ display: "flex" }}>
          <ColumnContainer>
            <Impression
              name="Nedeljko"
              text="KnowYourSale je sjajan eCommerce sajt koji nudi širok izbor proizvoda po povoljnim cijenama.
        Lako sam pronašao ono što mi je trebalo i proces kupovine je bio brz i jednostavan. Takođe,
        njihova korisnička podrška je izvanredna i vrlo su ljubazni i susretljivi."
            />
            <Impression
              name="Nedeljko"
              text="KnowYourSale je sjajan eCommerce sajt koji nudi širok izbor proizvoda po povoljnim cijenama.
        Lako sam pronašao ono što mi je trebalo i proces kupovine je bio brz i jednostavan. Takođe,
        njihova korisnička podrška je izvanredna i vrlo su ljubazni i susretljivi."
            />
          </ColumnContainer>
          <ColumnContainer>
            <Impression
              name="Nedeljko"
              text="KnowYourSale je sjajan eCommerce sajt koji nudi širok izbor proizvoda po povoljnim cijenama.
        Lako sam pronašao ono što mi je trebalo i proces kupovine je bio brz i jednostavan. Takođe,
        njihova korisnička podrška je izvanredna i vrlo su ljubazni i susretljivi."
            />
            <Impression
              name="Nedeljko"
              text="KnowYourSale je sjajan eCommerce sajt koji nudi širok izbor proizvoda po povoljnim cijenama.
        Lako sam pronašao ono što mi je trebalo i proces kupovine je bio brz i jednostavan. Takođe,
        njihova korisnička podrška je izvanredna i vrlo su ljubazni i susretljivi."
            />
          </ColumnContainer>
        </div>
      </ContentWrapper>
    </ImpressionsContainer>
  );
};

export default ImpressionsSection;
