import './Koz.scss'

import koz from '../../assests/images/icons/koz2.svg';

const Koz = ({adder}) => {
    return (
       <div className="icons-left">
                <img src={koz} alt="" className="icons__img"/>
                <span className="icons__info">{adder}</span>
        </div>
    )
}


export default Koz;