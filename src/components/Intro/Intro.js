import ReactPlayer from 'react-player';
import { VscMute, VscUnmute } from 'react-icons/vsc';
import classNames from 'classnames/bind';
import styles from './Intro.module.scss';
import { useState } from 'react';
const cx = classNames.bind(styles);
function Intro() {
    const [isMuted, setIsMuted] = useState(false);
    return (
        <div className={cx('intro-container')}>
            <ReactPlayer
                playing={true}
                loop={true}
                width="100%"
                height="100%"
                volume={1}
                muted={isMuted}
                url="https://vimeo.com/145218574"
                className={cx('video-intro')}
            />
            <div className={cx('info-intro')}>
                <h1 className={cx('heading-intro')}>NETFLIX / Juxtapose</h1>
                <p className={cx('overview-intro')}>
                    NETFLIX / Juxtapose TBWA Chiat Day Tore Frandsen / The Sweet Shop.{' '}
                </p>
            </div>
            {isMuted ? (
                <VscMute className={cx('btn-volume')} onClick={() => setIsMuted((prev) => !prev)} />
            ) : (
                <VscUnmute className={cx('btn-volume')} onClick={() => setIsMuted((prev) => !prev)} />
            )}
            <div className={cx('fade-bottom')}></div>
        </div>
    );
}
export default Intro;
