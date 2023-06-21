import { Wrapper } from "../../components/common/styled";
import MainSection from "../../components/home-main-section";
import UsageSection from "../../components/home-usage-section";
import ImpressionsSection from "../../components/home-impressions-section";
import RegistrationSection from "../../components/home-registration-section";
import Footer from "../../components/footer";

const Home = () => {
  return (
    <>
      <Wrapper>
        <MainSection />
        <UsageSection />
        <ImpressionsSection />
        <RegistrationSection />
        <Footer />
      </Wrapper>
    </>
  );
};

export default Home;
