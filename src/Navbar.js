import logo from "./logo.png";
import shopName from "./shop-name.png";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const lngs = [
    { code: "en", native: "En" },
    { code: "vn", native: "Vi" },
  ];
  const { t, i18n } = useTranslation();

  const handleTrans = (code) => {
    i18n.changeLanguage(code);
  };

  return (
    <nav className="navbar">
      <h1>
        <a href="/">
          <img src={shopName} className="" alt="name" />
          <img src={logo} className="" alt="logo" />
        </a>
      </h1>
      <div className="links">
        <a href="/">{t("Home")}</a>
        <a href="/menu">{t("Menu")}</a>
      </div>
      <div className="links">
        {lngs.map((lng, i) => {
          const { code, native } = lng;
          return <button className="button-42" onClick={() => handleTrans(code)}>{native}</button>;
        })}
      </div>
    </nav>
  );
};

export default Navbar;
