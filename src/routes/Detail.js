import React from 'react';
import './Detail.css';

// Route에서 전달 받은 props들을 가지고 화면에 뿌려 줄 수 있음
class Detail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;
    if (location.state === undefined) {
      history.push('/');
    }
  }
  render() {
    const { location } = this.props;
    if (location.state) {
      const data = location.state;
      return (
        <div className="detail_movie">
          <img
            src={location.state.poster}
            alt={location.state.title}
            title={location.state.title}
          />
          <div className="movie__data">
            <h3 className="movie__title">{data.title}</h3>
            <h5 className="movie__year">{data.year}</h5>
            <ul className="movie__genres">
              {data.genres.map((genre, index) => (
                <li key={index} className="genres__genre">
                  {genre}
                </li>
              ))}
            </ul>
            <p className="movie__summary">{data.summary}</p>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Detail;
