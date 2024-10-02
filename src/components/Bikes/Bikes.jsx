
import Bikes_image_1 from "../../img/bike1.png";
import Bikes_image_2 from "../../img/bike2.png";
import Bikes_image_3 from "../../img/bike3.png";
import style from "../CSS/Harley.module.css";
function Bikes() {
    return (
      <section className={style.bikes}>
        <div className={style.bikes__item}>
          <img src={Bikes_image_1} alt="sportster" className={style.bikes__img} />
          <div className={style.bikes__text}>
            <p className={style.bikes__name}>Sportster 2021</p>
            <h3 className={style.bikes__title}>Революция мощности и динамики</h3>
            <p className={style.bikes__description}>
              В 1957 году появилась модель Sportster, позволявшая ставить рекорды
              скорости, участвовать и побеждать в гонках по бездорожью. Она вдохновляет уже не первое
              поколение гонщиков, конструкторов и водителей. Сегодня Sportster возрождается, обещая порадовать
              их новыми характеристиками, которые предлагает только Harley-Davidson.
            </p>
          </div>
        </div>
        <div className={style.bikes__item}>
          <img src={Bikes_image_2} alt="fat bob" className={style.bikes__img} />
          <div className={style.bikes__text}>
            <p className={style.bikes__name}>Fat Bob 2021</p>
            <h3 className={style.bikes__title}>Толстый и мощный</h3>
            <p className={style.bikes__description}>
              Пожиратель уличного асфальта, обожающий мощность. Мускулистая
              конструкция и хорошие технические характеристики.
            </p>
          </div>
        </div>
        <div className={style.bikes__item}>
          <img src={Bikes_image_3} alt="Forty-eight" className={style.bikes__img} />
          <div className={style.bikes__text}>
            <p className={style.bikes__name}>Forty-eight 2021</p>
            <h3 className={style.bikes__title}>Классика</h3>
            <p className={style.bikes__description}>
              Суровый стиль с его широкими шинами, культовым баком в форме арахиса и
              бульдожим дизайном.
            </p>
          </div>
        </div>
      </section>
    );
  }
  
  export default Bikes;