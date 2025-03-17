
import styles from './questionBlock.module.css';
import plus from '../../../assets/question/plus.svg';
import minus from '../../../assets/question/minus.svg';
import {useState} from "react";


const QuestionBlock = (props) => {
    const [isActive,setIsActive]=useState(false);
    const {number,title,description}=props;
    return (
        <div className={styles.question}>
            <div className={styles['question-data']}>
                <div className={styles['question-data__number']}>{number}</div>
                <div className={styles['question-data__content']} onClick={()=>setIsActive(prev=>!prev)}>
                    <div className={styles['question-data__title']}>
                        {title}
                    </div>
                    {isActive&&(
                    <div className={`${styles['question-data__description']} ${styles['question-data__description-hidden']}`}>
                        {description}
                    </div>)}
                </div>
                <button className={styles['question-data__icon']}>
                        {isActive ? <img src={minus}/> :  <img src={plus}/> }
                </button>
            </div>
            {isActive&&(
                <div className={styles['question-data__description-small']}>
                    {description}
                </div>)}
            <div className={styles['question-line']}></div>

        </div>
            );
            };

            export default QuestionBlock;