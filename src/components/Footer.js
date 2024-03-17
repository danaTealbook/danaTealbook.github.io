import React from "react";
import SlideEffect from "./SlideEffect";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-text">
        <p>2024 by Dana Kenzhaliyeva</p>
      </div>

      <SlideEffect
        inAnimation="animate__animated animate__slideInUp"
        outAnimation="animate__animated animate__slideOutDown"
      >
        <div className="footer-iconTop">
          <a href="#">
            <i className="bx bxs-up-arrow"></i>
          </a>
        </div>
      </SlideEffect>
    </div>
  );
}
