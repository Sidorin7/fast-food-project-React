import './download.css';
import burger from './burger.png'

const Download = () => {
    return ( 
        <div className="download">
        <div className="container">
          <p className="download__title">Download Our Menu</p>
          <a href={burger} className="btn" download>DOWNLOAD</a>
        </div>
      </div>
     );
}
 
export default Download;