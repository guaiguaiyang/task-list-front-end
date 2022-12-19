import React from 'react';
import PropTypes from 'prop-types';

import './Task.css';

// directly accesses through props
const Task = (props) => {
  const updateComplete = props.updateComplete;
  const deleteTask = props.deleteTask;

  const onCompleteToggle = () => {
    updateComplete(props.id, props.isComplete);
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
      <button
        className="tasks__item__remove button"
        onClick={() => deleteTask(props.id)}
      >
        x
      </button>
    </li>
  );
};

Task.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  isComplete: PropTypes.bool.isRequired,
  updateComplete: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
};

export default Task;
