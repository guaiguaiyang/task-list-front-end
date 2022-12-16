import React from 'react';
import PropTypes from 'prop-types';

import './Task.css';

//destructuring to access props
// const Task = ({ id, title, isComplete }) => {
//   const [complete, setComplete] = useState(isComplete);
//   const buttonClass = complete ? 'tasks__item__toggle--completed' : '';

//   return (
//     <li className="tasks__item" key={id}>
//       <button
//         className={`tasks__item__toggle ${buttonClass}`}
//         onClick={() => setComplete(!complete)}
//       >
//         {title}
//       </button>
//       <button className="tasks__item__remove button">x</button>
//     </li>
//   );
// };

// directly accesses through props
const Task = (props) => {
  const updateComplete = props.updateComplete;
  const onCompleteToggle = () => {
    // const updatedTask = {
    //   id: props.id,
    //   title: props.title,
    //   isComplete: !props.isComplete,
    // };
    // updateComplete(updatedTask);
    updateComplete(props.id);
    console.log(props.isComplete);
  };

  const buttonClass = props.isComplete ? 'tasks__item__toggle--completed' : '';

  return (
    <li className="tasks__item" key={props.id}>
      <button
        className={`tasks__item__toggle ${buttonClass}`}
        onClick={() => onCompleteToggle()}
      >
        {props.title}
      </button>
      <button className="tasks__item__remove button">x</button>
    </li>
  );
};

Task.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  isComplete: PropTypes.bool.isRequired,
  updateComplete: PropTypes.func.isRequired,
};

export default Task;
