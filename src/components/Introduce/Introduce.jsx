


import style from "../CSS/Harley.module.css";

function Introduce() {
  return (
    <section className={style.introduce}>
      <h2 className={style.introduce__title}>Создаем мотоциклы с 1903 года</h2>
      <p className={style.introduce__text}>
        Но помимо мотоциклов, компания выпускает множество товаров широкого потребления с эмблемой
        Harley-Davidson. Одежда, обувь, мебель, посуда, выпускаемые под этой маркой, позволяет создать 
        своеобразный стиль жизни от Харли, который делает мотоцикл по-настоящему культовым. Также каждый 
        владелец любого из мотоциклов Харли имеет возможность вступить в созданное брендом сообщество 
        владельцев мотоциклов этой марки
      </p>
    </section>
  );
}

export default Introduce;