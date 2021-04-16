import {useState} from 'react';

import {Link} from 'react-router-dom';

import './BookCard.scss';

import Koz from '../koz'


import star from '../../assests/images/icons/star.svg';

const BookCard = ({title, author, bookImg }) => {

    const [adder, setAdder] = useState(0)


    const bookCardClicker = (evt) => {
        const allCards = document.querySelectorAll('.bookCard')
        allCards.forEach(element => {
            element.classList.remove('active')
        });
        evt.currentTarget.classList.add('active')   
        setAdder(adder + 1)
        
    }

    return (
       <div className="bookCard" onClick={bookCardClicker}>
           <div className="bookCard-inner">
               <div className="bookCard-top">
                  <Link to="/" className="bookCard-top__link">
                       <img src={`https://image.tmdb.org/t/p/w500/${bookImg}`} alt="" className="bookCard-top__Img"/>
                  </Link>
               </div>

               <div className="bookCard-bottom">
                 <Link to="/" className="bookCard-bottom__link1">
                      <h4 className="title title--black">
                        <b>{title}</b>
                        </h4>
                 </Link>

                  <Link to="/" className="title title--grey">
                      <h5 className="">
                            {author} Dikaprio
                    </h5> 
                  </Link>

                  <div className="bookCard-bottom-icons">
                      <Koz adder={adder}/>
                      <div className="icons-right">
                        <img src={star} alt="" className="icons__img"/>
                        <span className="icons__info">14</span>
                      </div>

                  </div>
               </div>
           </div>
       </div>
    )
}


export default BookCard;