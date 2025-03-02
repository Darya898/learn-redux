import styles from './usabilityBlock.module.css';


const UsabilityBlock = (props) => {
    const {icon,title,description}=props;
    return (
        <div className={styles['usability-content__card']}>
            <div className={styles['usability-content__card-top']}>
                <div className={styles['usability-content__card-img']}>
                    <img src={icon}></img>
                </div>
                <div className={styles['usability-content__card-title']}>
                    {title}
                </div>
            </div>
            <div className={styles['usability-content__card-description']}>
                {description}
            </div>
            <div className={styles['usability-content__card-shadow']}></div>
        </div>
    );
};

export default UsabilityBlock;