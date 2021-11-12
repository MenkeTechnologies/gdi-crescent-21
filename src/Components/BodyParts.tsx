import React, { useState } from 'react';
import TricepsAnatomy from './TricepsAnatomy';
import Model, { IExerciseData, IMuscleStats } from 'react-body-highlighter';

//Link to npm for react-body-highlighter: https://www.npmjs.com/package/react-body-highlighter //

export default function BodyParts() {
  const data: IExerciseData[] = [
    { name: 'Bench Press', muscles: ['triceps'] },
  ];
  const [clickableMuscle, setClickableMuscle] = useState(``);

  const handleClick = React.useCallback(({ muscle}: IMuscleStats) => {
    setClickableMuscle(`${muscle}`);
    alert(`You clicked the ${muscle}! Scroll down to learn more!`)

  }, [data]);

  //we could switch this to if clickableMuscle is a string? then have it as props for the h1 of the next page; then another if statement: if props=triceps show the triceps page, else "coming soon"
if (clickableMuscle === `triceps`) {
  return (
  <div className='BodyParts'>
      <TricepsAnatomy />
  </div>) } else {
      return (
        <div className='BodyParts'>
          <div className="row">
          <div className="col-md-3">
            <h2>No muscle left behind.</h2>
              <ul className='motto'>
                <li>You have one body.</li>
                <li>Crescent is for every body.</li>
                <li>Train, Learn and Strengthen.</li>
              </ul>
            </div>
            <div className="col-md-9">
          <div className='ClickableBody'>
            <Model
              data={data}
              style={{ width: '30rem' }}
              onClick={handleClick}
            />
         </div>
         </div>
         </div>
        </div>);
  }

  
}