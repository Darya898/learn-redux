import Header from "../../components/Header/Header.jsx";
import styles from "./home.module.css";
import HeadFon from "../../components/HeaderFon/HeadFon.jsx";
import arrow from './../../assets/sub-content/arrow.svg';
import QuestionSection from "../../components/Question/QuestionSection/QuestionSection.jsx";
import UsabilitySection from "../../components/Usability/UsabilitySection/UsabilitySection.jsx";
import CategoriesSection from "../../components/Categories/CategoriesSection/CategoriesSection.jsx";

const Home = () => {
    return (
        <>
            <section className={styles.header}>
                <Header></Header>
                <HeadFon></HeadFon>
            </section>
            <section className={styles['sub-container']}>
                <h1>The Best Streaming Experience</h1>
                <div className={styles['sub-description']}>StreamVibe is the best streaming experience for watching your
                    favorite movies and shows on demand, anytime, anywhere. With StreamVibe, you can enjoy a wide
                    variety of content, including the latest blockbusters, classic movies, popular TV shows, and more.
                    You can also create your own watchlists, so you can easily find the content you want to watch.
                </div>
                <button className={styles['sub-container__btn']}>
                    <img src={arrow} width="17.84" height="19.19px"></img>
                    <span>Start Watching Now</span>
                </button>
            </section>
            <CategoriesSection/>
            <UsabilitySection/>
            <QuestionSection/>
        </>
);
};

export default Home;