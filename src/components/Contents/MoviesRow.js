import classNames from 'classnames/bind';
import styles from './MoviesRow.module.scss';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { useEffect, useRef, useState } from 'react';
import { SmoothHorizontalScrolling } from '~/utils/index.js';
import { useViewport } from '../hooks';
import { useDispatch } from 'react-redux';
// import { setMovieDetail } from '../store/actions';

const cx = classNames.bind(styles);
function MoviesRow(props) {
    const { movies, title, isNetflix, idSection } = props;
    const sliderRef = useRef();
    const movieRef = useRef();
    const [dragDown, setDragDown] = useState(0);
    const [dragMove, setDragMove] = useState(0);
    const [isDrag, setisDrag] = useState(false);
    const [windowWidth] = useViewport();

    const dispatch = useDispatch();
    // const handleSetMovie = (movie) => {
    //     dispatch(setMovieDetail(movie));
    // };
    const handleScrollRight = () => {
        const maxScrollLeft = sliderRef.current.scrollWidth - sliderRef.current.clientWidth;
        if (sliderRef.current.scrollLeft < maxScrollLeft) {
            SmoothHorizontalScrolling(
                sliderRef.current,
                250,
                movieRef.current.clientWidth * 2,
                sliderRef.current.scrollLeft,
            );
        }
    };
    const handleScrollLeft = () => {
        if (sliderRef.current.scrollLeft > 0) {
            SmoothHorizontalScrolling(
                sliderRef.current,
                250,
                -movieRef.current.clientWidth * 2,
                sliderRef.current.scrollLeft,
            );
        }
    };

    //Kéo slider
    useEffect(() => {
        if (isDrag) {
            if (dragMove < dragDown) handleScrollRight();
            if (dragMove > dragDown) handleScrollLeft();
        }
    }, [dragDown, dragMove, isDrag]);
    const onDragStart = (e) => {
        setisDrag(true);
        setDragDown(e.screenX);
    };
    const onDragEnd = (e) => {
        setisDrag(false);
    };
    const onDragEnter = (e) => {
        setDragMove(e.screenX);
    };
    return (
        <div className={cx('movie-container')} draggable="false" id={idSection}>
            <h1 className={cx('movie-heading')}>{title}</h1>
            <div
                className={cx('movie-slider')}
                ref={sliderRef}
                draggable="true" // kéo thả item
                onDragStart={onDragStart}
                onDragEnd={onDragEnd}
                onDragEnter={onDragEnter}
                style={
                    movies && movies.length > 0
                        ? {
                              gridTemplateColumns: `repeat(${movies.length},
                    ${
                        windowWidth > 1200
                            ? '360px'
                            : windowWidth > 992
                            ? '300px'
                            : windowWidth > 768
                            ? '250px'
                            : '200px'
                    })`,
                          }
                        : {}
                }
            >
                {movies &&
                    movies.length > 0 &&
                    movies.map((movie, index) => {
                        if (movie.poster_path && movie.backdrop_path !== null) {
                            let imageUrl = isNetflix
                                ? `https://image.tmdb.org/t/p/original/${movie.poster_path}`
                                : `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`;
                            return (
                                <div
                                    key={index}
                                    className={cx('movie-item')}
                                    ref={movieRef}
                                    draggable="false"
                                    // onClick={() => {
                                    //     handleSetMovie(movie);
                                    // }}
                                >
                                    <img src={imageUrl} alt="" draggable="false" />
                                    <div className={cx('movie-name')}>{movie.title || movie.name}</div>
                                </div>
                            );
                        }
                    })}
            </div>
            <div className={cx(`${isNetflix ? 'btn-left-net' : 'btn-left'}`)} onClick={handleScrollLeft}>
                <FiChevronLeft />
            </div>
            <div className={cx(`${isNetflix ? 'btn-right-net' : 'btn-right'}`)} onClick={handleScrollRight}>
                <FiChevronRight />
            </div>
        </div>
    );
}
export default MoviesRow;
