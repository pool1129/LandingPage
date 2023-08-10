import { useParallax } from 'react-scroll-parallax';

const Parallax = () => {
    const parallax = useParallax<HTMLDivElement>({
        rotateY: [0, 360],
    });

    return (
        <div ref={parallax.ref} className="spinner">
            <div className="thumbsup">👍🏻</div>
            <div className="clap">👏🏻</div>
            <div className="handsup">🙌🏻</div>
            <div className="thumbsdown">👎🏻</div>
        </div>
    );
};

export default Parallax;