import React from "react";
import './styles.css'
import { Text } from "../Text/Text";
import { Wizard } from "./Wizard";


export const TeamOfWizards = () => {

    return(
        <div className="team-of-wizards-wrapper">
            <Text as="h1" className="bond red-text">КОМАНДА ВОЛШЕБНИКОВ</Text>
            <Wizard src="../images/Ольга.png" contex="«Последние 100 лет знаменитую пьесу С. Я. Маршака слушали, читали и смотрели в театре и дети, и взрослые. У детей ХХI века появилась возможность стать её непосредственным участником: примерив на себя роли героев пьесы, разыграть представление дома!»"/>
            <Wizard to_the_right src="../images/Вадим.png" contex="«Эта известная разным поколениям сказка иллюстрировалась многократно, а уж читалась – бесконечное количество раз и будет читаться ещё и ещё. Честно говоря, я изначально не хотел делать «Салтана». Но, увидев, какой необычной получается книга, я подумал, что всё же возьмусь за эту тему, и не пожалел.»"/>
            <Wizard src="../images/Максим.png" contex="«Максим Митрофанов «врисовывал» в движущуюся бумажную конструкцию иллюстрацию так, чтобы контур предмета соответствовал поп-апу. Поп-ап «Алиса в Стране Чудес» – это попытка увидеть мир Кэрролла глазами ребёнка. Подобно 
Алисе, он последует за Белым Кроликом и провалится в Страну Чудес через обложку.»"/>
            <Wizard to_the_right src="../images/Екатерина.png" contex="«Для меня «Сказка о царе Салтане» – это книга-мечта. Во-первых, потому что я с детства очень люблю эту сказку, а во-вторых, потому что над ней мы работали с одним из моих любимых иллюстраторов – замечательным Вадимом Челаком.»"/>
        </div>
    )
}