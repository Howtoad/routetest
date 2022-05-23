import Heading from "../components/Heading";
import Paragraph from "../components/Paragraph";

const Header = (props) => {
  return (
    <header>
      <Heading heading={props.heading} />
      <Paragraph text={props.text} />
    </header>
  );
};

export default Header;
