import FooterSection from "../Components/Footer";
import LibraryDetails from "../Components/LibraryDetails";
import MemberFeedback from "../Components/MembersFeedBack";
import MemberProfile from "../Components/MembersProfile";
import Gallery from "../Components/PhotoGalary";
import Slider from "../Components/Slider/Slider";

export default function HomePage() {
  return (
    <div>
      <Slider />
      <LibraryDetails></LibraryDetails>
      <MemberProfile></MemberProfile>
      <MemberFeedback></MemberFeedback>
      <Gallery></Gallery>
      <FooterSection></FooterSection>
    </div>
  );
}
