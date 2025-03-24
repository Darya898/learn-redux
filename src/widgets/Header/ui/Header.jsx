import styles from './header.module.css';
import logo from '../../../assets/header-img/logo.svg';
import search from '../../../assets/header-img/search.svg';
import bell from '../../../assets/header-img/bell.svg';
import Nav from "@/shared/TotalNavigate/Nav.jsx";

const Header = () => {
    return (
        <>
        <div className={styles.header}>
            <img alt="Логотип" className={styles['logo']} src={logo}/>
            <Nav></Nav>
            <div className={styles.icon}>
                <img alt="Поиск" src={search}></img>
                <img alt="Уведомления" src={bell} ></img>
            </div>
        </div>
        </>
    );
};

export default Header;