import { Link } from 'react-router-dom'
import './learnMore.styles.css'

const LearnMore = ({ services }) => {
  return (
    <div className='learn-wrapper'>
      <div className='learn-container'>
        <h2 className='learn-header-text'>
          LEARN MORE ABOUT OUR CONSTRUCTION SERVICES
        </h2>
        <p className='learn-description'>
          We have the know-how needed to tackle a wide variety of construction
          projects. Turn to us for:
        </p>
        <ul className='list'>
          {services.map((service) => (
            <li key={service.id} className='service-card'>
              <Link key={service.id} to={service.link}>
                <span className='service-text'>{service.service}</span>
              </Link>
            </li>
          ))}
        </ul>
        <p className='learn-description'>
          You can look to us for both residential and commercial construction
          services.
        </p>
      </div>
    </div>
  )
}

export default LearnMore
