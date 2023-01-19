<p align="center">
  <a href="https://dev.to/adrai/best-internationalization-for-gatsby-mkf#extract">
    <img alt="implement translation extractor" src="https://i18next-extract.netlify.app/imgs/babel-plugin-i18next-extract.png" width="60" />
  </a>
</p>

<p>
  Фінальна версія імплементації багатомовності доступна за посиланням 
  <a href="https://gatsbytutormain07670.gatsbyjs.io">Тицяй сюди</a>
</p>

<h1 align="center">
  Add translation system for gatsby site
</h1>


## 🚀 tutorial

1.  **Based on this tutorial.**

    - [Tutorial](https://dev.to/adrai/best-internationalization-for-gatsby-mkf)

    - [github project](https://github.com/microapps/gatsby-plugin-react-i18next/tree/0cb31fe4e48dd5b1771efaf24c85ece5540aa084/example)


## 🚀 


<h1 align="center">
  Implementation of translatoins extraction
</h1>

<h2>Tips</h2>

## 🚀 

1.  **Інсталювати пакет babel-plugin-i18next-extract та налаштувати його**

    - [Інструкція з встановлення та налаштування](https://dev.to/adrai/best-internationalization-for-gatsby-mkf#extract)

    ```shell
    # встановити плагін для вилучення ключів перекладів
    npm install @babel/cli babel-plugin-i18next-extract
    ```

2.  **JSON файл з ключами перекладів генерується на основі усіх входжень функції t()(або компонента <Trans>можна налаштувати за допомогою customTransComponents, tFunctionNames, i18nextInstanceNames)**

    - [Налаштування плагіну](https://i18next-extract.netlify.app/#/configuration?id=configuration)

3.  **Якщо не налаштовувати namespaces для перекладів, то згенеруєтья один JSON файл для усіх знайдених входжень**

    Такий підхід швидший, але має ряд недоліків, оскільки, немає можливості налаштувати вибіркове завантаженя перекладів(лише ті які реально потрбіні на сторінці), файл може містити дуже велику кількість фраз і працювати з ним може бути не зручно

4.  **Налаштування namespace полягає в тому що потрібно за допомогою спеціальних коментарів для кожного файлу вказати до якого namespace мають належати усі ключі з поточного файлу**

    - [Список спеціальних коментарів](https://i18next-extract.netlify.app/#/comment-hints?id=explicitly-use-a-namespace-for-a-key)

5.  **Якщо не вказувати коментар з значенням namespace то усі знайдені входження додадуться в JSON файл для дефолтного namespace(зазвичай common.json)**

6.  **Якщо коментар з значенням namespace в файлу вказаний, але відповідний JSON не існує, то плагін створить такий файл і додасть туди усі входження ключів перекладів з данного файлу**

7.  **Для того щоб згенерований JSON файл містив ключі з вже готовими фразами можна піти двома способами**

    - використовувати компонент <Trans> у вигляді. Нажаль, надмірно велика кількість компонентів може негативно впливати на швидкодію застосунку, тому є ще інший варіант

    ```shell
    # все що між тегами <Trans></Trans> перенесеться в значення перекладу по даному ключу і ми отримаємо готові переклади для мови по замовчуванню
    <Trans i18nKey="title">Hi people</Trans>
    ```

    - інший варіант полягає в тому щоб в якості ключів в функції t() використовувати цілі готовві фрази
   
     ```shell
    # "Hi people" перенесеться в значення перекладу по даному ключу і ми отримаємо готові переклади для мови по замовчуванню
    t("Hi people")
    ```

## 🚀 
