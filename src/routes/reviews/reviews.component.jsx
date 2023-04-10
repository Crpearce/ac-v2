import './reviews.styles.css';
import stars from '../../assets/stars.png';
import Banner from "../../components/banner/banner.component";

const Reviews = ({ reviews }) => {
  return (
    <section>
      <Banner sectionName="Reviews" />
      <div className='reviews-container'>
        {reviews.map((quote) => (
          <div key={quote.id} className='review'>
            <img src={stars} alt='five star review' className='stars'/>
            <p className='testimonial'>{quote.review}</p>
            <span>{quote.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Reviews;
