import './reviews.styles.css';
import Banner from "../../components/banner/banner.component";

const Reviews = ({ reviews }) => {
  console.log(reviews)
  return (
    <section>
      <Banner sectionName="Reviews" />
      <div className='reviews-container'>
        {reviews.map((quote) => (
          <p key={quote.id} >{quote.review}</p>
        ))}
      </div>
    </section>
  );
};

export default Reviews;
