import React from 'react';
import classNames from 'classnames/bind';
import styles from './MoviesDetail.module.scss';

const cx = classNames.bind(styles);
const showModal = false;
function MoviesDetail(props) {
    return (
        <div className={cx('movies-details')}>
            <div className={cx(`backdrop`) + ' ' + cx(`${showModal ? 'showBackdrop' : 'hideBackdrop'}`)}></div>
            <div className={cx(`modal`) + ' ' + cx(`${showModal ? 'showModal' : 'hideModal'}`)}>
                <div className={`container ${cx('container')}`}>
                    <div className={cx('movieInfo')}>
                        <h1 className={cx('movieTitle')}>The Witcher</h1>
                        <p className={cx('statistical')}>
                            <span className={cx('rating')}>Rating:82%</span>
                            <span className={cx('popularity')}>Popularity:222</span>
                        </p>
                        <p className={cx('releaseDate')}>Release Date:21/12/2021</p>
                        <p className={cx('runtime')}>Runtime: abc</p>
                        <p className={cx('overview')}>Geralt of Rivia, abcdedasdasd</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MoviesDetail;
