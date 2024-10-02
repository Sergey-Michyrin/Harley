
import footer from "../../img/logo-big.png";
import style from "../CSS/Harley.module.css";
function Footer() {
  return (
    <footer className={style.footer}>
      <img src={footer} alt="logo" className={style.logo}/>
    </footer>
  );
}

export default Footer;