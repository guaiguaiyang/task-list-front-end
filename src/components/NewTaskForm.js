import React from 'react';
import './NewTaskForm.css';
import PropTypes from 'prop-types';
import { useState } from 'react';

const INITIAL_FORM_DATA = {
  title: 'Complete TaskList Front-End',
  description: 'CSS is not our friend :(',
};

const NewTaskForm = ({ addTask }) => {
  const [formData, setFormData] = useState(INITIAL_FORM_DATA);

  const handleChange = (e) => {
    // console.log(e);
    // console.log(e.target.value);

    const newFormData = {
      ...formData,
      [e.target.name]: e.target.value,
    };

    setFormData(newFormData);
    console.log(newFormData);
  };

  const handleNewTaskSubmit = (e) => {
    e.preventDefault();
    console.log('handleNewBikeSubmit called');
    console.log(formData);
    addTask(formData);
  };

  return (
    <form>
      <label htmlFor="title">Title</label>
      <input
        type="text"
        id="title"
        name="title"
        value={formData.title}
        onChange={handleChange}
      />
      <label htmlFor="description">Description</label>
      <input
        type="text"
        id="description"
        name="description"
        value={formData.description}
        onChange={handleChange}
      />
      <input
        type="submit"
        value="Add Task"
        onClick={handleNewTaskSubmit}
      ></input>
    </form>
  );
};
NewTaskForm.propTypes = {
  addTask: PropTypes.func.isRequired,
};
export default NewTaskForm;
