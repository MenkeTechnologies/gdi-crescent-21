import React, { useState } from 'react';
import Muscles from './Muscles';
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

if (clickableMuscle === `triceps`) {
  return (
  <div className='BodyParts'>
    <div className='ClickableBody'>
      <Model
        data={data}
        style={{ width: '30rem' }}
        onClick={handleClick}
      />
      <br/>
      <Muscles props={clickableMuscle} />
   </div>
  </div>) } else {
      return (
        <div className='BodyParts'>
          <div className='ClickableBody'>
            <Model
              data={data}
              style={{ width: '30rem' }}
              onClick={handleClick}
            />
         </div>
        </div>);
  }

  
}