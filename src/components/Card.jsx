import React from 'react';
import '../styles/Card.css';
import { FaDotCircle } from 'react-icons/fa';
import { FiCircle, FiMoreHorizontal } from 'react-icons/fi';

// RETURNS THE INDIVIDUAL CARD COMPONENT CONSISTING OF THE USER NAME AND ALL THE DETAILS OF THE TICKET ASSOCIATED TO THE PARTULCAR USER
const Card = ({ id, title, tag }) => { 
  return (
    <div className="cardContainer" >
      <div className='cardContent'  >
        <div className="cardHeading flex-sb">
        
          <span className="color-grey text-uppercase">{id}</span>
          <div className="imageContainer relative">
            <img
              className="userPhoto"
              src="https://www.themoviedb.org/t/p/original/4D0PpNI0kmP58hgrwGC3wCjxhnm.jpg"
              alt="Card-User"
            />
            <div className="showStatus"></div>
          </div>
        </div>
        <div className="cardTitle">
          <p>
            <FiCircle size={9} className="circleIcon" />
            {title}
          </p>
        </div>
        <div className="cardTags">
          <div className="tags color-grey">
            <FiMoreHorizontal className="moreIcon" />
          </div>
          {tag?.map((elem, index) => (
            <div key={index} className="tags color-grey">
              <span className="dotIcon">
                <FaDotCircle size={7.5} />
              </span>
              {elem}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
