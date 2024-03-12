import React from "react";
import TrackVisibility from 'react-on-screen';

const SlideEffect = ({ inAnimation, outAnimation="", delay=0, children }) => (
    <TrackVisibility>
        {({ isVisible }) => (
            <div className={isVisible ? inAnimation : outAnimation}
                style={{ animationDelay: `${delay}s` }}
            >
                {children}
            </div>
        )}
    </TrackVisibility>
);

export default SlideEffect;