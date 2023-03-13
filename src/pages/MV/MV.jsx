import React, { useEffect } from "react";

import NotFound from "../../assets/img/not-found.jpg";

import "./MV.scss";
function MV() {
  const images = {
    NotFound,
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container video-container">
      <img className="thumbnail" src={images.NotFound} />
    </div>
  );
}

export default MV;
