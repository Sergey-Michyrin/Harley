
import logo from "../../img/logo.png";
import style from "../CSS/Harley.module.css";

function Menu() {
  return (
    <nav className={style.menu}>
      <input type="checkbox" className={style.menu__toggler}/>
      <img src={logo} alt="logo" className={style.logo}/>

      <button className={style.menu__burger_btn}>
        <div className={style.burger_btn__centr_line}></div>
      </button>

      <div className={style.menu__desktop}>
        <a href="" className={style.desktop__item}>Инфо</a>
        <a href="" className={style.desktop__item}>Байки</a>
        <a href="" className={style.desktop__item}>Разное</a>
      </div>

      <div className={style.menu__mobile}>
        <a href="" className={style.mobile__item}>Инфо</a>
        <a href="" className={style.mobile__item}>Байки</a>
        <a href="" className={style.mobile__item}>Разное</a>
      </div>
    </nav>
  );
}

export default Menu;