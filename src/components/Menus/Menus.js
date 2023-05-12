import { FaStar, FaFire } from 'react-icons/fa';
import { GiNinjaHeroicStance, GiRomanToga, GiBandageRoll } from 'react-icons/gi';
import { SiNetflix } from 'react-icons/si';
import { RiGhostSmileFill } from 'react-icons/ri';
import { MdTheaterComedy } from 'react-icons/md';
import MenuItem from './MenuItem';
import classNames from 'classnames/bind';
import styles from './Menus.module.scss';

const cx = classNames.bind(styles);
function Menus(params) {
    return (
        <div className={cx('menu-panel')}>
            <MenuItem name="Home" Icon={SiNetflix} to='netFlix' />
            <MenuItem name="Trending" Icon={FaFire} to='trending'/>
            <MenuItem name="Top rated" Icon={FaStar} to='topRated'/>
            <MenuItem name="Actions Movies" Icon={GiNinjaHeroicStance} to='actionMovies'/>
            <MenuItem name="Comedy Movies" Icon={MdTheaterComedy} to='comedyMovies'/>
            <MenuItem name="Horror Movies" Icon={RiGhostSmileFill} to='horrorMovies'/>
            <MenuItem name="Romance Movies" Icon={GiRomanToga} to='romanceMovies'/>
            <MenuItem name="Documentaries" Icon={GiBandageRoll} to='documentaries'/>
        </div>
    );
}
export default Menus;
