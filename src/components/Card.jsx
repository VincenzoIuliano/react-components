import image from '../../src/assets/paesaggio.jpeg'
import Button from '../components/Button.jsx'


export default function Card () {
    return (
      <>
        <div className="post-card">
          <div className="card-image">
            <img className="post-thumb" src={image} alt="" />
          </div>
          <div className="card-body">
            <h2 className="post-title">Titolo del post</h2>
            <p className="post-description">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi
              error magni accusamus a! Quasi rem vel quo molestiae id totam
              incidunt, reiciendis cum natus tempora blanditiis amet iusto
              consequatur magnam?
            </p>
          </div>
        </div>
      </>
    );
}