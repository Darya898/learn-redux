import styles from "./questionSection.module.css";
import {dataQuestions} from "../QuestionBlock/questionBlockData.js";
import QuestionBlock from "../QuestionBlock/QuestionBlock.jsx";
import {useState} from "react";
import Modal from "../../../hooks/modalWindow/Modal.jsx";
import Form from "../../Form/Form.jsx";


const QuestionSection = () => {
    const [isVisible, setIsVisible] = useState(false);
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
                <div>
                    {dataQuestions.slice(0, 4).map((question) =>
                        <QuestionBlock number={question.number}
                                       title={question.title}
                                       description={question.description}
                                       key={question.number}
                        ></QuestionBlock>
                    )}
                </div>
                <div>
                    {dataQuestions.slice(4).map((question) =>
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