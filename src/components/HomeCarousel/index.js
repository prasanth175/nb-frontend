import {Link} from 'react-router-dom'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import './index.css'

const HomeCarousel = () => {
  const settings = {
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
    infinite: true,
    autoplay: true,
  }

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        <div className="carousel-item">
          <div className="carousel-content">
            <p className="web-title">The Novelty Bookstore</p>
            <h1 className="carousel-heading">
              Remember, <br /> A Book Is Always A Gift.
            </h1>
            <p className="poet"> - Sheridan Hay</p>
            <Link to="/books">
              <button className="read-more-btn" type="button">
                <span>Find Books</span>
              </button>
            </Link>
          </div>
          <img
            className="carousel-img"
            src="http://www.bookbestie.in/static/app/images/slider-img.png"
            alt="home-img"
          />
        </div>
        <div className="carousel-item">
          <div className="carousel-content">
            <p className="web-title">The Novelty Bookstore</p>
            <h1 className="carousel-heading">
              Today <br /> a Reader, Tomorrow a Leader.
            </h1>
            <p className="poet">- Margaret Fuller</p>
            <Link to="/books">
              <button className="read-more-btn" type="button">
                <span>Find Books</span>
              </button>
            </Link>
          </div>
          <img
            className="carousel-img"
            src="http://www.bookbestie.in/static/app/images/slider-img.png"
            alt="home-img"
          />
        </div>
      </Slider>
    </div>
  )
}

export default HomeCarousel
