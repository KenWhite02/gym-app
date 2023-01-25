import AnchorLink from "react-anchor-link-smooth-scroll";
import { SelectedPage } from "@/shared/types";

type Props = {
  page: string;
  selectedPage: SelectedPage;
  setSelectedPage(value: SelectedPage): void;
  isMenuToggled: boolean;
  setIsMenuToggled(value: boolean): void;
};

const Link = ({
  page,
  selectedPage,
  setSelectedPage,
  isMenuToggled,
  setIsMenuToggled,
}: Props) => {
  const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage;

  const handleClick = () => {
    setSelectedPage(lowerCasePage);
    setIsMenuToggled(!isMenuToggled);
  };

  return (
    <AnchorLink
      className={`${
        selectedPage === lowerCasePage ? "text-primary-500" : ""
      } transition duration-500 hover:text-primary-300`}
      href={`#${lowerCasePage}`}
      onClick={handleClick}
    >
      {page}
    </AnchorLink>
  );
};

export default Link;
