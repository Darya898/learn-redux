import styles from './usabilitySection.module.css';
import {UsabilityBlock} from "@/entities/Home/Usability/index.jsx";
import {usabilityData} from "@/shared/data/usabilityBlockData.js";


const UsabilitySection = () => {
    return (
        <section className={styles['usability']}>
            <div className={styles['usability-heading']}>
                <div className={styles['usability-heading__title']}>
                    We Provide you streaming experience across various devices.
                </div>
                <div className={styles['usability-heading__description']}>
                    With StreamVibe, you can enjoy your favorite movies and TV shows anytime, anywhere.<p> Our platform
                    is designed to be compatible with a wide range of devices, ensuring that you never miss a moment
                    of entertainment.</p>
                </div>
            </div>
            <div className={styles['usability-content']}>
                <div className={styles['usability-content__card-line_top']}>
                    {usabilityData.slice(0, 3).map(data => (
                        <UsabilityBlock icon={data.icon}
                                        title={data.title}
                                        description={data.description}
                                        key={data.title}

                        ></UsabilityBlock>
                    ))}
                </div>
                <div className={styles['usability-content__card-line_bottom']}>
                    {usabilityData.slice(3).map(data => (
                        <UsabilityBlock icon={data.icon}
                                        title={data.title}
                                        description={data.description}
                                        key={data.title}
                        ></UsabilityBlock>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default UsabilitySection;