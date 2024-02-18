import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const data = [
  {
    image:
      "https://s3-alpha-sig.figma.com/img/937e/6c96/3f56b8004f480b0e2bb111f87fa22996?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nk8gyk-zND7dzbvoOJAPKOJcci4KTtom1OMQrtOT32TFcTZeLT9pWq8vYrRDek-u1fX9mM2~Vf7wT8tBBB-ARwOFfnXZgpaYC7ByAWS4CUU~cYcwoE~IVSRpga1UO9sOKKLXkifXCSm7EzzudGrvhOfOtY81yqkOIY4hRE4tuz32vlx-tRpflW--e0ZOwghg~r0fG6AnBlXx9cvGskdCIlWUyImSXaBMSBiTCxrh7AlkR~eBxVw~nb5O5sL1Xcbu2fDJp8ZggkPuI5LzE9DYURYCe~uWqAP9G~t5va1gL5VuPwIOBJrWAhysQj-85fuOakiiN~-tKOzNxWyYVRomkg__",
    name: "Чиланзар",
    text: "Впервые фото было изобретено Жозефом Нисефором Ньепсом. Это произошло в 1822 году, Дагер же опубликовал свою работу только через 17 лет. Жозеф Ньепс смог получить первое негативное изображение в 1835 году ",
  },
  {
    image:
      "https://s3-alpha-sig.figma.com/img/937e/6c96/3f56b8004f480b0e2bb111f87fa22996?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nk8gyk-zND7dzbvoOJAPKOJcci4KTtom1OMQrtOT32TFcTZeLT9pWq8vYrRDek-u1fX9mM2~Vf7wT8tBBB-ARwOFfnXZgpaYC7ByAWS4CUU~cYcwoE~IVSRpga1UO9sOKKLXkifXCSm7EzzudGrvhOfOtY81yqkOIY4hRE4tuz32vlx-tRpflW--e0ZOwghg~r0fG6AnBlXx9cvGskdCIlWUyImSXaBMSBiTCxrh7AlkR~eBxVw~nb5O5sL1Xcbu2fDJp8ZggkPuI5LzE9DYURYCe~uWqAP9G~t5va1gL5VuPwIOBJrWAhysQj-85fuOakiiN~-tKOzNxWyYVRomkg__",
    name: "Чиланзар",
    text: "Впервые фото было изобретено Жозефом Нисефором Ньепсом. Это произошло в 1822 году, Дагер же опубликовал свою работу только через 17 лет. Жозеф Ньепс смог получить первое негативное изображение в 1835 году ",
  },
  {
    image:
      "https://s3-alpha-sig.figma.com/img/937e/6c96/3f56b8004f480b0e2bb111f87fa22996?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nk8gyk-zND7dzbvoOJAPKOJcci4KTtom1OMQrtOT32TFcTZeLT9pWq8vYrRDek-u1fX9mM2~Vf7wT8tBBB-ARwOFfnXZgpaYC7ByAWS4CUU~cYcwoE~IVSRpga1UO9sOKKLXkifXCSm7EzzudGrvhOfOtY81yqkOIY4hRE4tuz32vlx-tRpflW--e0ZOwghg~r0fG6AnBlXx9cvGskdCIlWUyImSXaBMSBiTCxrh7AlkR~eBxVw~nb5O5sL1Xcbu2fDJp8ZggkPuI5LzE9DYURYCe~uWqAP9G~t5va1gL5VuPwIOBJrWAhysQj-85fuOakiiN~-tKOzNxWyYVRomkg__",
    name: "Чиланзар",
    text: "Впервые фото было изобретено Жозефом Нисефором Ньепсом. Это произошло в 1822 году, Дагер же опубликовал свою работу только через 17 лет. Жозеф Ньепс смог получить первое негативное изображение в 1835 году ",
  },
  {
    image:
      "https://s3-alpha-sig.figma.com/img/937e/6c96/3f56b8004f480b0e2bb111f87fa22996?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nk8gyk-zND7dzbvoOJAPKOJcci4KTtom1OMQrtOT32TFcTZeLT9pWq8vYrRDek-u1fX9mM2~Vf7wT8tBBB-ARwOFfnXZgpaYC7ByAWS4CUU~cYcwoE~IVSRpga1UO9sOKKLXkifXCSm7EzzudGrvhOfOtY81yqkOIY4hRE4tuz32vlx-tRpflW--e0ZOwghg~r0fG6AnBlXx9cvGskdCIlWUyImSXaBMSBiTCxrh7AlkR~eBxVw~nb5O5sL1Xcbu2fDJp8ZggkPuI5LzE9DYURYCe~uWqAP9G~t5va1gL5VuPwIOBJrWAhysQj-85fuOakiiN~-tKOzNxWyYVRomkg__",
    name: "Чиланзар",
    text: "Впервые фото было изобретено Жозефом Нисефором Ньепсом. Это произошло в 1822 году, Дагер же опубликовал свою работу только через 17 лет. Жозеф Ньепс смог получить первое негативное изображение в 1835 году ",
  },
  {
    image:
      "https://s3-alpha-sig.figma.com/img/937e/6c96/3f56b8004f480b0e2bb111f87fa22996?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nk8gyk-zND7dzbvoOJAPKOJcci4KTtom1OMQrtOT32TFcTZeLT9pWq8vYrRDek-u1fX9mM2~Vf7wT8tBBB-ARwOFfnXZgpaYC7ByAWS4CUU~cYcwoE~IVSRpga1UO9sOKKLXkifXCSm7EzzudGrvhOfOtY81yqkOIY4hRE4tuz32vlx-tRpflW--e0ZOwghg~r0fG6AnBlXx9cvGskdCIlWUyImSXaBMSBiTCxrh7AlkR~eBxVw~nb5O5sL1Xcbu2fDJp8ZggkPuI5LzE9DYURYCe~uWqAP9G~t5va1gL5VuPwIOBJrWAhysQj-85fuOakiiN~-tKOzNxWyYVRomkg__",
    name: "Чиланзар",
    text: "Впервые фото было изобретено Жозефом Нисефором Ньепсом. Это произошло в 1822 году, Дагер же опубликовал свою работу только через 17 лет. Жозеф Ньепс смог получить первое негативное изображение в 1835 году ",
  },
  {
    image:
      "https://s3-alpha-sig.figma.com/img/937e/6c96/3f56b8004f480b0e2bb111f87fa22996?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nk8gyk-zND7dzbvoOJAPKOJcci4KTtom1OMQrtOT32TFcTZeLT9pWq8vYrRDek-u1fX9mM2~Vf7wT8tBBB-ARwOFfnXZgpaYC7ByAWS4CUU~cYcwoE~IVSRpga1UO9sOKKLXkifXCSm7EzzudGrvhOfOtY81yqkOIY4hRE4tuz32vlx-tRpflW--e0ZOwghg~r0fG6AnBlXx9cvGskdCIlWUyImSXaBMSBiTCxrh7AlkR~eBxVw~nb5O5sL1Xcbu2fDJp8ZggkPuI5LzE9DYURYCe~uWqAP9G~t5va1gL5VuPwIOBJrWAhysQj-85fuOakiiN~-tKOzNxWyYVRomkg__",
    name: "Чиланзар",
    text: "Впервые фото было изобретено Жозефом Нисефором Ньепсом. Это произошло в 1822 году, Дагер же опубликовал свою работу только через 17 лет. Жозеф Ньепс смог получить первое негативное изображение в 1835 году ",
  },
  {
    image:
      "https://s3-alpha-sig.figma.com/img/937e/6c96/3f56b8004f480b0e2bb111f87fa22996?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nk8gyk-zND7dzbvoOJAPKOJcci4KTtom1OMQrtOT32TFcTZeLT9pWq8vYrRDek-u1fX9mM2~Vf7wT8tBBB-ARwOFfnXZgpaYC7ByAWS4CUU~cYcwoE~IVSRpga1UO9sOKKLXkifXCSm7EzzudGrvhOfOtY81yqkOIY4hRE4tuz32vlx-tRpflW--e0ZOwghg~r0fG6AnBlXx9cvGskdCIlWUyImSXaBMSBiTCxrh7AlkR~eBxVw~nb5O5sL1Xcbu2fDJp8ZggkPuI5LzE9DYURYCe~uWqAP9G~t5va1gL5VuPwIOBJrWAhysQj-85fuOakiiN~-tKOzNxWyYVRomkg__",
    name: "Чиланзар",
    text: "Впервые фото было изобретено Жозефом Нисефором Ньепсом. Это произошло в 1822 году, Дагер же опубликовал свою работу только через 17 лет. Жозеф Ньепс смог получить первое негативное изображение в 1835 году ",
  },
  {
    image:
      "https://s3-alpha-sig.figma.com/img/937e/6c96/3f56b8004f480b0e2bb111f87fa22996?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nk8gyk-zND7dzbvoOJAPKOJcci4KTtom1OMQrtOT32TFcTZeLT9pWq8vYrRDek-u1fX9mM2~Vf7wT8tBBB-ARwOFfnXZgpaYC7ByAWS4CUU~cYcwoE~IVSRpga1UO9sOKKLXkifXCSm7EzzudGrvhOfOtY81yqkOIY4hRE4tuz32vlx-tRpflW--e0ZOwghg~r0fG6AnBlXx9cvGskdCIlWUyImSXaBMSBiTCxrh7AlkR~eBxVw~nb5O5sL1Xcbu2fDJp8ZggkPuI5LzE9DYURYCe~uWqAP9G~t5va1gL5VuPwIOBJrWAhysQj-85fuOakiiN~-tKOzNxWyYVRomkg__",
    name: "Чиланзар",
    text: "Впервые фото было изобретено Жозефом Нисефором Ньепсом. Это произошло в 1822 году, Дагер же опубликовал свою работу только через 17 лет. Жозеф Ньепс смог получить первое негативное изображение в 1835 году ",
  },
  {
    image:
      "https://s3-alpha-sig.figma.com/img/937e/6c96/3f56b8004f480b0e2bb111f87fa22996?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nk8gyk-zND7dzbvoOJAPKOJcci4KTtom1OMQrtOT32TFcTZeLT9pWq8vYrRDek-u1fX9mM2~Vf7wT8tBBB-ARwOFfnXZgpaYC7ByAWS4CUU~cYcwoE~IVSRpga1UO9sOKKLXkifXCSm7EzzudGrvhOfOtY81yqkOIY4hRE4tuz32vlx-tRpflW--e0ZOwghg~r0fG6AnBlXx9cvGskdCIlWUyImSXaBMSBiTCxrh7AlkR~eBxVw~nb5O5sL1Xcbu2fDJp8ZggkPuI5LzE9DYURYCe~uWqAP9G~t5va1gL5VuPwIOBJrWAhysQj-85fuOakiiN~-tKOzNxWyYVRomkg__",
    name: "Чиланзар",
    text: "Впервые фото было изобретено Жозефом Нисефором Ньепсом. Это произошло в 1822 году, Дагер же опубликовал свою работу только через 17 лет. Жозеф Ньепс смог получить первое негативное изображение в 1835 году ",
  },
];

function App() {
  return (
    <div>
      <header className="header">
        <Navbar />
        <div className="header__content">
          <h1 className="header__title">Добро пожаловать на мой сайт</h1>
          <button className="header__button">Позвонить</button>
        </div>
      </header>
      <main>
        <section class="about">
          <div class="container">
            <h2 class="about__title">Обо мне</h2>
            <div class="about__content">
              <div class="about__left">
                <img
                  src="https://s3-alpha-sig.figma.com/img/72e6/60e6/f45e8acadfc7c8128254c053dea416fe?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YwdqTmdoBg-HFGASUzCiG0AtGx2fTPSdzu-ABDePZ9AZ3gZMQ~qtOLJbO9LCioK2NYs~4fFicUuXdC3QziYUowI1riTs0CUqmLS6zy9t51VYwsFdgrMF3E38YlZ4dpLAiO6KAJltiEfaJumigc7yV3rQcObcHmsvj60xNnR84~etDaeuufhlOsyxMx7MNZt-IRRSlTcVom1jR7jZk7InRNqgm7VZDhHfE42wm-~cpfCLw0TzXSNSEdzgOHp-rIPimUd-HM2zcOvHeLZupeAJLn9Jz~aoeh3coWCXnnXPBMU-aaKqFtwoCKpDWqTHMdfAdhUMkCMsmhT7fAeNztkM-Q__"
                  alt=""
                  className="about__image"
                />
              </div>
              <div class="about__right">
                <p class="about__name">Зубенко Михаил Петрович</p>
                <p class="about__text">
                  Я могу делать семейные портреты в студии, работать на показах
                  мод, снимать моделей для рекламы или фотографировать на
                  свадьбах. Отдельное направление -- съёмки предметов и еды,
                  которые заказывают для рекламы или меню ресторанов. Я могу
                  быть криминальным фотографом мест преступлений, охотником за
                  знаменитостями или снимать диких животных для журналов о
                  природе. Я востребованный специалист в новостных изданиях,
                  работаю в паре с журналистом и могу оказаться где угодно: от
                  гламурной вечеринки до места пожара, наводнения и даже
                  вооруженного конфликта. Моя профессия будет востребована и в
                  будущем, ведь 80% успеха фотографии -- это не качество
                  техники, а профессионализм фотографа.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section class="work">
          <div className="container">
            <div className="work__content">
              {data.map((item) => {
                return (
                  <div className="work__box">
                    <img src={item.image} alt="" className="work__image" />
                    <h3 className="work__name">{item.name}</h3>
                    <p className="work__text">{item.text}</p>
                    <button className="work__button">Посмотреть</button>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
