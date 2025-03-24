import styles from "./questionSection.module.css";
import {useState} from "react";
import {useSelector} from "react-redux";
import {QuestionBlock} from "@/entities/Home/Question/index.jsx";
import Modal from "@/shared/hooks/modalWindow/Modal.jsx";
import Form from "@/shared/Form/Form.jsx";


const QuestionSection = () => {
    const [isVisible, setIsVisible] = useState(false);
    const questions=useSelector((state)=>state.question.question);
    return (
        <section className={styles['questions']}>
            <div className={styles['questions-heading']}>
                <div>
                    <div className={styles['questions-heading__title']}>
                        Frequently Asked Questions
                    </div>
                    <div className={styles['questions-heading__description']}>
                        Got questions? We've got answers! Check out our FAQ section to find answers to the most common
                        questions about StreamVibe.
                    </div>
                </div>
                <button className={styles['questions-btn']}
                        onClick={() => setIsVisible(true)}
                ><span>Ask a Question</span></button>
            </div>
            <div className={styles['questions-content']}>
                <div className={styles['questions-content__wrapper']}>
                    {questions.slice(0, Math.ceil(questions.length/2)).map((question) =>
                        <QuestionBlock number={question.number}
                                       title={question.title}
                                       description={question.description}
                                       key={question.number}
                        ></QuestionBlock>
                    )}
                </div>
                <div className={styles['questions-content__wrapper']}>
                    {questions.slice(Math.ceil(questions.length/2)).map((question) =>
                        <QuestionBlock number={question.number}
                                       title={question.title}
                                       description={question.description}
                                       key={question.number}
                        ></QuestionBlock>
                    )}
                </div>
            </div>
            {isVisible &&
                <Modal isVisible={isVisible} >
                    <Form clickOutside={() => setIsVisible(prev => !prev)}></Form>
                </Modal>}
        </section>
    );
};

export default QuestionSection;