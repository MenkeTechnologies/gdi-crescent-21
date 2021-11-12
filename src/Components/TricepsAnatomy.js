import React from "react";
import triceps from '../triceps_image.png';
import './TricepsAnatomy.css';

export default function TricepsAnatomy () {
    
    return (
        <div className="TricepsAnatomy">
            <div className="container">
                <div className="row pt-5">
                    <div className="col-sm-7">
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
                    <div className="col-sm-5">
                        <a href="/index.html"><button type="button" className="btn button p-3">⬅ Back to Whole Body</button></a>
                        <img src={triceps} alt="A skeleton from the back with tricep muscles highlighted." className="img-fluid"></img>
                    </div>
                </div>
                <div className="row pt-5">
                    <div className="col-sm-12">
                        <h2>STRENGTHEN🏋️‍♀️</h2>
                        <h3>TRICEP DIP</h3>
                        <p><em>You needn’t use any fancy equipment.
                        Simply your bodyweight or a barbell can help you to begin to build strength and tone.</em></p>
                        <iframe src="https://giphy.com/embed/eiWRVNBggNJNS" width="480" height="303" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a className="gif" href="https://giphy.com/gifs/arms-eiWRVNBggNJNS">via GIPHY</a></p>
                        <p>It consists of 3 parts:</p>
                        <ol>
                            <li>Find a bench or anything sturdy enough to support you.</li>
                            <li>Face away from the bench and grab the edge with the sarm fully extended. Legs should be extended bent at the waist.</li>
                            <li>Slowly lower your body as you exhale, creating a 90 degree angle with your upper arm and your forearm.</li>
                            <li>Do this for 3 sets of 10 reps</li>
                        </ol>
                        <h2>MOVEMENT💪</h2>
                        <p>It is the muscle principally responsible for extension of the elbow joint (straightening of the arm).
                        </p>
                        <iframe width="846" height="476" src="https://www.youtube.com/embed/0326dy_-CzM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>Tricep Dip Video</iframe>
                    </div>
                </div>
            </div>
        </div>

    );
}