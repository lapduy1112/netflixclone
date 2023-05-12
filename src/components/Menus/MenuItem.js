import classNames from 'classnames/bind';
import { randomRgbaColor } from '~/utils';
import styles from './Menus.module.scss';
import {Link} from 'react-scroll'

const cx = classNames.bind(styles);
function MenuItem(params) {
    const { name, Icon, to } = params;
    return (
        <Link activeClass="active" to={to} spy={true} smooth={true} hashSpy={true} offset={-70} duration={500} className={cx('sub-menu')}>
                <Icon className={cx('menu-icon')} style={{ color: randomRgbaColor(1) }} />
                <span>{name}</span>
        </Link>
    );
}
export default MenuItem;
