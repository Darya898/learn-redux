import styles from "./categoriesSection.module.css";
import CategoriesBlock from "../CategoriesBlock/CategoriesBlock.jsx";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {fetchGenres, fetchMovieByGenres} from "../../../store/genreReducer/genreActions.js";
import useWindowWidth from "../../../hooks/useWindowWidth/useWindowWidth.js";
import ArrowBtn from "../../../UI/ArrowBtn.jsx";

const CategoriesSection = () => {
    const genres=useSelector((state)=>state.genre.genres);
    const dispatch=useDispatch();
    const [currentSlide, setCurrentSlide] = useState(0);
    const [numberSlide, setNumberSlide]=useState(5);
    const [quantity,setQuantity]=useState(0)
    const windowWidth = useWindowWidth();
    useEffect(() => {
        dispatch(fetchGenres());
    }, []);

    useEffect(() => {
        if(windowWidth<520){
            setNumberSlide(2);
            setQuantity(genres.length?Math.ceil((genres.length)/2):0);
        }
        else if(windowWidth>=520&&windowWidth<1440){
            setNumberSlide(4);
            setQuantity(genres.length?Math.ceil((genres.length)/4):0);
        }
        else{
            setNumberSlide(5);
            setQuantity(genres.length?Math.ceil((genres.length)/5):0);
        }

    }, [windowWidth,genres]);

    useEffect(() => {
        for(let i=currentSlide;i<currentSlide+numberSlide;i++){
            if(genres[currentSlide[i]]&&genres[currentSlide[i]].imgs&&!genres[currentSlide[i]].imgs.length){
                dispatch(fetchMovieByGenres(genres[currentSlide[i]].name));
            }
        }

    }, [genres,currentSlide]);

    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + numberSlide));
    };

    const prevSlide = () => {
        setCurrentSlide((prevSlide) =>(prevSlide - numberSlide));
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
                        <ArrowBtn getClick={prevSlide} disabled={currentSlide === 0} flag="left"/>
                        <div className={styles['categories__slider-check-list']}>
                            {Array.from({ length: quantity }, (_, index) =>
                                    (<div key={index}
                                         className={`${styles['categories__slider-item']} ${((index==0&&currentSlide==0)||index==Math.ceil(currentSlide/numberSlide))
                                         ?styles['active-slide']:''}`}>
                                    </div>)
                            )}
                        </div>

                        <ArrowBtn getClick={nextSlide} disabled={currentSlide>= genres.length-numberSlide} flag="right"/>
                    </div>
                </div>
            </div>
            <div className={styles['categories-slides__wrapper']}>
                {genres.length&&
                    genres.slice(currentSlide,currentSlide+numberSlide).map((category)=>
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