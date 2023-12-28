import React from "react";
import withMainLayout from "../layout/withMainLayout";

function Home() {
    return (
        <>
            <div>
                <p className="text-success lead">
                    1. Обяснете какво представлява JSX и каква е ползата от него?
                </p>
                <p>
                    JSX означава „JavaScript XML” и представлява вид разширение към основния 
                    JavaScript синтаксис. Компонентите на React обикновено се пишат чрез JSX, въпреки, че не е 
                    задължително (може и със стандартен JavaScript синтаксис). JSX е сходен с XHP, който е разработен 
                    от Facebook за PHP.
                </p>
                <p>
                    Ползите са: Скорост, Гъвкавост, Интуитивност и удобство, Производителност, 
                    Компоненти за многократна употреба.
                </p>
            </div>
            <div>
                <p className="text-success lead">
                    2. Какво е компонент в React и какви са основните му видове?
                </p>
                <p>
                    Компонентът е един от базовите блокове в React и представлява JavaScript клас или функция, 
                    която "връща" JSX.
                </p>
                <p>
                    Една от ключовите характеристики на React е неговата архитектура, базирана на компоненти. 
                    Всеки компонент е самостоятелен модул, който управлява собственото си състояние и може 
                    да се използва повторно в различни части на приложението. Този модулен подход улеснява 
                    разработчиците при изграждането на мащабируеми и поддържани приложения, тъй като те могат 
                    да разбиват сложните потребителски интерфейси на по-малки, по-управляеми части.
                </p>
                <p>
                    Основните компоненти в React са State и Props
                </p>
            </div>
            <div>
                <p className="text-success lead">
                    3. Какво представлява state в React компонент и как се променя?
                </p>
                <p>
                    В React `state` представлява вътрешен обект в компонента, който 
                    съдържа данни, които могат да се променят във времето. Тези данни 
                    включват всякаква информация, която влияе на поведението и изгледа на компонента.
                </p>
                <p>
                    Променянето на state в React става със специален метод на компонента, наречен setState(). 
                    Този метод се използва за актуализиране на състоянието на компонента, така че новите данни 
                    да бъдат отразени в потребителския интерфейс.
                </p>
            </div>
            <div>
                <p className="text-success lead">
                    4. Обяснете разликата между props и state.
                </p>
                <p>
                    Разликите между React props и React state е от съществено значение за изграждането на 
                    стабилни и мащабни React приложения. Props се използват за предаване на данни от 
                    родителски към дъщерни компоненти, докато state се използва за управление на 
                    специфични за компонента данни. Като разберем как props и state работят заедно, 
                    можем да създадете многократно използваеми модулни компоненти, които са лесни 
                    за поддръжка и разширяване.
                </p>
            </div>
            <div>
                <p className="text-success lead">
                    5.  Как могат да бъдат обработени събития като кликане върху бутон в React?
                </p>
                <p>
                    Дефинираме си функция която искаме да се изпълни след кликване на бутона, слагане на мишката върху
                    него и др..  Предаваме функцията като props на елемента за който искаме да закачим събитието
                    ( да кажем че ще бъде кликане - така закачаме `onClick` ). След натискане на бутона React изпълнява
                    зададената от нас функция.
                </p>
            </div>
            <div>
                <p className="text-success lead">
                    6. Какво представлява ref в React и кога е подходящо да се използва?
                </p>
                <p>
                    В React, `ref` представлява обект, който се използва за пряко взаимодействие 
                    със съответния DOM елемент или React компонент. Когато използваме `ref` за DOM елемент, 
                    можете да получим достъп до този елемент, за да извършим манипулации, като например 
                    фокусиране, измерване на размери и други действия, които изискват пряко взаимодействие 
                    с DOM. Също така, `ref` може да се използва за комуникация между родителски и детски компоненти, 
                    когато това е необходимо, без използването на пренос на `props`.
                </p>
            </div>
            <div>
                <p className="text-success lead">
                    7. Обяснете какво означава условно рендиране и дайте пример.
                </p>
                <p>
                    Условното рендиране в React означава, че вие определяте дали даден компонент или 
                    елемент трябва да бъде изобразен в зависимост от определено условие. Това позволява 
                    динамично променяне на това, което се изобразява върху екрана в зависимост от 
                    текущото състояние на проекта или други условия.
                </p>
                <p>
                    Да кажем, че имаме компонент, който да покаже различно съдържание в зависимост от стойността на
                    определено условие. Имаме логин страница на някакъв сайт и например, ако потребителя влезе в 
                    системата компонента ни може да покаже "Добре дошъл [потребителско име]!", а ако ли не да му изпише
                    "Моля влезте си профила/системата". Условното рендиране в този случай позволява на компонента ни
                    да решава какво да покаже въз основа на условието.
                </p>
            </div>
            <div>
                <p className="text-success lead">
                    8. Как да изобразите списък от данни в React?
                </p>
                <p>
                    Определяме какви данни искаме да представим в списъка. Това може да бъде масив от обекти, където всеки
                    обект представлява един елемент от списъка. Дефинираме компонент, който ще бъде използван за
                    представянето на един елемент от списъка. Този елемент може да приема данни за конкретния елемент
                    чрез props. Използваме `map()` в основния компонент, за да създаде компонент за всеки елемент в
                    списъка. Импортираме компонентите в основния компонент за да бъдат включени в проекта ни.
                </p>
            </div>
            <div>
                <p className="text-success lead">
                    9. Какви са hooks и каква е тяхната функция?
                </p>
                <p>
                    Основната функция на hooks е да дадат възможност на функционалните компоненти 
                    да използват различни функционалности на React, като например хендълване 
                    на ефекти, контекст и други. Предимството на hooks е, че те позволяват 
                    използването на тези функционалности без да се налага използването на класови компоненти. 
                </p>
                <p>
                    Възможността за използване на hooks като `useState`, `useEffect`, `useContext` и други прави 
                    функционалните компоненти по-гъвкави, позволявайки разработчиците по-лесно 
                    да управляват състоянието и страничните ефекти в тяхния проект. Това също така 
                    допринася за по-четим и преизползваем код.
                </p>
            </div>
            <div>
                <p className="text-success lead">
                    10. Обяснете основната функционалност на React Router и как 
                    той помага при създаването на SPA приложения.
                </p>
                <p>
                    React Router е библиотека за навигация в React приложения, предназначена за управление на 
                    URL адресите в синхронизация със състоянието на приложението. Това е особено полезно при 
                    създаването на SPA приложения, където страниците се зареждат и променят динамично, без да 
                    се извършва пълено презареждане на браузъра. 
                </p>
                <p>
                    
                </p>
            </div>
        </>
    );
}

export default withMainLayout(Home);