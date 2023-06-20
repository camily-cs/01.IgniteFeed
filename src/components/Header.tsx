import styles from './Header.module.css';
import igniteLogo from '../assets/ignite-logo.svg';

export function Header() {
    return (
        <header className={styles.headerContainer}>
            <img src={igniteLogo} alt='logo do ignite'/>
        </header>
    );
}