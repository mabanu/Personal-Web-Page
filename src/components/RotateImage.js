import './RotateImage.css';
import logo from '../photos/low-resolution-color-logo.png';
import react from '../photos/react.jpg';
import css from '../photos/css.jpg';
import html from '../photos/html.jpg';

function RotateImage() {
  return (
    <div className="gallery-container">
      <div className="gallery">
        <img src={logo} alt="personal logo" />
        <img src={react} alt="react logo" />
        <img src={html} alt="html logo" />
        <img src={css} alt="css logo" />
      </div>
    </div>
  );
}

export default RotateImage;
