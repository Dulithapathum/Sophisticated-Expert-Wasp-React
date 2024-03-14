import React from 'react'

import PropTypes from 'prop-types'

import './testimonial-card1.css'

const TestimonialCard1 = (props) => {
  return (
    <div
      className={`testimonial-card1-testimonial-card ${props.rootClassName} `}
    >
      <svg
        viewBox="0 0 950.8571428571428 1024"
        className="testimonial-card1-icon"
      >
        <path
          d="M438.857 182.857v402.286c0 161.143-131.429 292.571-292.571 292.571h-36.571c-20 0-36.571-16.571-36.571-36.571v-73.143c0-20 16.571-36.571 36.571-36.571h36.571c80.571 0 146.286-65.714 146.286-146.286v-18.286c0-30.286-24.571-54.857-54.857-54.857h-128c-60.571 0-109.714-49.143-109.714-109.714v-219.429c0-60.571 49.143-109.714 109.714-109.714h219.429c60.571 0 109.714 49.143 109.714 109.714zM950.857 182.857v402.286c0 161.143-131.429 292.571-292.571 292.571h-36.571c-20 0-36.571-16.571-36.571-36.571v-73.143c0-20 16.571-36.571 36.571-36.571h36.571c80.571 0 146.286-65.714 146.286-146.286v-18.286c0-30.286-24.571-54.857-54.857-54.857h-128c-60.571 0-109.714-49.143-109.714-109.714v-219.429c0-60.571 49.143-109.714 109.714-109.714h219.429c60.571 0 109.714 49.143 109.714 109.714z"
          className=""
        ></path>
      </svg>
      <div className="testimonial-card1-testimonial">
        <span className="testimonial-card1-text">{props.quote}</span>
        <span className="testimonial-card1-text1">{props.name}</span>
        <span className="testimonial-card1-text2">{props.role}</span>
        <img
          alt={props.pictureAlt}
          src={props.pictureSrc}
          className="testimonial-card1-image"
        />
      </div>
    </div>
  )
}

TestimonialCard1.defaultProps = {
  pictureSrc: 'https://img-b.udemycdn.com/user/200_H/25896370_24af_5.jpg',
  pictureAlt: 'profile',
  role: 'SOFTWARE ENGINEER',
  rootClassName: '',
  name: 'Praneeth Piris',
  quote:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lorem lorem, malesuada in metus vitae, scelerisque accumsan ipsum.  Nam pellentesque nulla leo, sagittis vehicula sem commodo nec.',
}

TestimonialCard1.propTypes = {
  pictureSrc: PropTypes.string,
  pictureAlt: PropTypes.string,
  role: PropTypes.string,
  rootClassName: PropTypes.string,
  name: PropTypes.string,
  quote: PropTypes.string,
}

export default TestimonialCard1
