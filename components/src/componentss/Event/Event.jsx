import PropTypes from 'prop-types';
import css from '../Event/Event.module.css';
import { FaPeriscope } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import { FaClock } from "react-icons/fa";
// import { formatEventSrart } from '../../utils/formatEventStart';
// import { formatEventDuration } from '../../utils/formatEventDuration';
import { formatEventDuration, formatEventSrart } from '../../utils/';


export const Event = ({ name, location, speaker, type, start, end }) => {
   const formattedStart = formatEventSrart(start);
   const duration = formatEventDuration(start, end);
    return (
        <div className={css.event}>
            <h2 className={css.title}>{name}</h2>
            <p className={css.info}>
            <FaPeriscope className={css.icon}  />
            {location}
            </p>
            <p className={css.info}>
                <FaUserAlt className={css.icon}/>
                {speaker}
            </p>
            <p className={css.info}>
            <FaCalendarAlt className={css.icon} />
                            {formattedStart}
            </p>
            <p className={css.info}>
                <FaClock className={css.icon} />
                  {duration}
            </p>

        </div>
    )
};

Event.propTypes = {
    name: PropTypes.string,
    location: PropTypes.string,
    speaker: PropTypes.string,
    type: PropTypes.string,
    start: PropTypes.string,
    end: PropTypes.string,

};