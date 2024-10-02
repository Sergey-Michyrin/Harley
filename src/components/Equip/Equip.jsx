
import tag_1 from "../../img/male.png";
import tag_2 from "../../img/stuff.png";
import tag_3 from "../../img/female.png";
import style from "../CSS/Harley.module.css";
function Equip() {
    return (
      <section className={style.equip}>
        <h2 className={style.equip__title}>Экипировка</h2>
        <div className={style.equip__items}>
          <div className={style.equip__item}>
            <img src={tag_1} alt="man in cafe" className={style.equip__img} />
          </div>
          <div className={style.equip__item}>
            <img src={tag_2} alt="bike trunk" className={style.equip__img} />
          </div>
          <div className={style.equip__item}>
            <img src={tag_3} alt="woman on the bike" className={style.equip__img} />
          </div>
        </div>
      </section>
    );
  }
  
  export default Equip;