import React from "react";
import triceps from '../triceps_image.png';

export default function TricepsAnatomy () {
    
    return (
        <div className="TricepsAnatomy">
            <div className="container">
                <div className="row pt-5">
                    <div className="col-sm-8">
                        <h1>YOUR <br /> TRICEPS</h1>
                        <h2>ANATOMY🧠</h2>
                        <h4>[triceps-brachii]</h4>
                        <p>The arge muscle on the back of the upper limb of many vertebrates.</p>
                        <p>Latin for <em>"three-headed muscle of the arm"</em></p>

                        <p>It consists of 3 parts:</p>
                        <ul>
                            <li>the medial</li>
                            <li>lateral</li>
                            <li>long head</li>
                        </ul>
                        <p>It is the muscle principally responsible for extension of the elbow joint (straightening of the arm).
                        </p>
                        <h2>FUN FACT</h2>
                        <p>More than 90% of a horse's total muscle weight is located at their triceps.</p>
                    </div>
                    <div className="col-sm-4">
                        <button type="button" className="btn btn-secondary"><a href="/index.html">⬅ Back to Whole Body</a></button>
                        <img src={triceps} alt="A skeleton from the back with tricep muscles highlighted." className="img-fluid"></img>
                    </div>
                </div>
            </div>
        </div>

    );
}