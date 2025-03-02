import  {useState} from 'react';
import styles from './form.module.css'

const Form = ({clickOutside}) => {
    const [selectData, setSelectData]=useState('');
    const [reason, setReason]=useState('');
    const [message, setMessage]=useState('');
    const handlerSubmit=(e)=>{
        e.preventDefault();
        if(selectData&&reason){
            clickOutside();
            setMessage('');

        }
        else{
            setMessage('Заполните все поля')
        }
    }

    return (
        <div>
            <form onSubmit={handlerSubmit} className={styles.form}>
                <label className={styles.label} htmlFor="theme">Выберите тему</label>
                <select id="theme"
                        className={styles.label}
                        value={selectData} onChange={(e) => {setSelectData(e.target.value);  setMessage('')}}>
                    <option className={`${styles.option} ${styles['option-disabled']}`} value="" disabled hidden>Тип вопроса</option>
                    <option className={styles.option} value="Other theme">Другая тема</option>
                </select>
                <label className={styles.label} htmlFor="reason">Запишите вопрос</label>
                <textarea
                    rows={2}
                    maxLength={200}
                    className={styles.textarea}
                    value={reason} onChange={(e) => {setReason(e.target.value);  setMessage('')}}></textarea>
                    <div className={styles['message']}> {message}< /div>
                    <div className={styles['btn-group']}>
                    <button className={styles['btn-cancel']} onClick={clickOutside}>Отмена</button>
                    <button className={styles.btn} type="submit">Сохранить</button>
                </div>
            </form>
        </div>
    );
};

export default Form;