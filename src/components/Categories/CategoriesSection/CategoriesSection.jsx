import styles from "./categoriesSection.module.css";
import arrowLeft from "../../../assets/categories/arrow-left.svg";
import arrowRight from "../../../assets/categories/arrow-right.svg";
import CategoriesBlock from "../CategoriesBlock/CategoriesBlock.jsx";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {fetchGenres, fetchMovieByGenres} from "../../../store/genreReducer/genreActions.js";

const CategoriesSection = () => {
    const genres=useSelector((state)=>state.genre.genres);
    const dispatch=useDispatch();
    const quantity=Math.ceil((genres.length)/4);
    const [currentSlide, setCurrentSlide] = useState(0);
    useEffect(() => {
        dispatch(fetchGenres());
    }, []);
    useEffect(() => {
    if(genres[currentSlide]&&genres[currentSlide].imgs&&!genres[currentSlide].imgs.length){
    dispatch(fetchMovieByGenres(genres[currentSlide].name));
    }
        if(genres[currentSlide+1]&&genres[currentSlide+1].imgs&&!genres[currentSlide+1].imgs.length){
            dispatch(fetchMovieByGenres(genres[currentSlide+1].name));
        }
        if(genres[currentSlide+2]&&genres[currentSlide+2].imgs&&!genres[currentSlide+2].imgs.length){
            dispatch(fetchMovieByGenres(genres[currentSlide+2].name));
        }
        if(genres[currentSlide+3]&&genres[currentSlide+3].imgs&&!genres[currentSlide+3].imgs.length){
            dispatch(fetchMovieByGenres(genres[currentSlide+3].name));
        }
    }, [genres,currentSlide]);

    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % (genres.length-3));
    };

    const prevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide - 1 + (genres.length-3)) % (genres.length-3));
    };
    return (
        <section className={styles['categories']}>
            <div className={styles['categories-wrapper__title']}>
                <div className={styles['categories-wrapper__title-left']}>
                    <div className={styles['categories__title']}>
                        Explore our wide variety of categories
                    </div>
                    <div className={styles['categories__description']}>
                        Whether you're looking for a comedy to make you laugh, a drama to make you think, or a
                        documentary to learn something new
                    </div>
                </div>
                <div className={styles['categories-wrapper__title-right']}>
                    <div className={styles['categories__slider']}>
                        <button onClick={prevSlide}  disabled={currentSlide === 0}>
                            <img src={arrowLeft}></img>
                        </button>
                        <div className={styles['categories__slider-check-list']}>
                            {Array.from({ length: quantity }, (_, index) =>
                                    (<div key={index}
                                         className={`${styles['categories__slider-item']} ${(index==0&&currentSlide<=3)||(currentSlide>3&&index==Math.ceil(currentSlide/4))
                                         ?styles['active-slide']:''}`}>
                                    </div>)
                            )}
                        </div>
                        <button onClick={nextSlide} disabled={currentSlide>= genres.length - 4}>
                            <img src={arrowRight}></img>
                        </button>
                    </div>
                </div>
            </div>
            <div className={styles['categories-slides__wrapper']}>
                {genres.length&&
                    genres.slice(currentSlide,currentSlide+4).map((category)=>
                    <CategoriesBlock key={category.name}
                                     title={category.name}
                                     imagesData={category.imgs}
                    ></CategoriesBlock>)
            }

            </div>
        </section>
    );
};

export default CategoriesSection;