import styles from "./categoriesBlock.module.css";
import arrowRight from "../../../assets/categories/arrow-right.svg";
const CategoriesBlock = (props) => {
const {title,imagesData}=props;
    return (
        <div className={styles['categories-slides__item']}>
            <div className={styles['categories-slides__item_img']}>
                <div className={styles['categories-slides__item_top']}>
                    {imagesData.slice(0,2).map((im,index)=> (
                        <div  key={index} className={styles['item_img']} style={{backgroundImage:`url(${im})`}}>
                        </div>
                    ))}
                </div>
                <div className={styles['categories-slides__item_bottom']}>
                    {imagesData.slice(2).map((im,index)=> (
                        <div key={index} className={styles['item_img']} style={{backgroundImage:`url(${im})`}}>
                        </div>
                            ))}
                        </div>
                        <div className={styles['categories-slides__item_img-fon']}></div>
            </div>
            <div className={styles['categories-slides__item_title']}>
                <span>{title}</span>
                <button className={styles['categories-slides__item-btn']}>
                    <img src={arrowRight}></img>
                </button>
            </div>
        </div>
    );
};

export default CategoriesBlock;