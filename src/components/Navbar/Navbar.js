import NetflixLogo from '~/assets/images/netflixpnglogo.png';
import { MdSearch } from 'react-icons/md';
import { useScrollY } from '~/components/hooks/useScrollY';
import classNames from 'classnames/bind';
import styles from './Navbar.module.scss';
const cx = classNames.bind(styles);
function Navbar(props) {
    const [scrollY]= useScrollY()
    return (
        <div
            className={cx('header')}
            style={scrollY < 50 ? { backgroundColor: 'transparent' } : { backgroundColor: 'var(--color-background' }}
        >
            <div className={cx('nav-container')}>
                <div className={cx('nav-logo')}>
                    <img src={NetflixLogo} alt="" />
                </div>
                <div className={cx('nav-search')}>
                    <MdSearch className={cx('icon-search')} />
                    <input type="text" placeholder="Input" />
                </div>
            </div>
        </div>
    );
}
export default Navbar;
