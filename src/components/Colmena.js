import './Colmena.css';
import beach from '../nikonD80/beach.jpg';
import betterSunset from '../nikonD80/better_sunset.jpg';
import botesBig from '../nikonD80/botes_big.jpg';
import dulius from '../nikonD80/dulius.jpg';
import Finisterre from '../nikonD80/Finisterre.jpg';
import grass from '../nikonD80/grass.jpg';
import montanas from '../nikonD80/montanas.jpg';

function Colmena() {
  return (
    <div className="colmena-gallery">
      <img src={beach} alt="a house on a mountain" />
      <img src={betterSunset} alt="sime pink flowers" />
      <img src={botesBig} alt="big rocks with some trees" />
      <img src={dulius} alt="a waterfall, a lot of tree and a great view from the sky" />
      <img src={Finisterre} alt="a cool landscape" />
      <img src={grass} alt="inside a town between two big buildings" />
      <img src={montanas} alt="a great view of the sea above the mountain" />
    </div>
  );
}

export default Colmena;
