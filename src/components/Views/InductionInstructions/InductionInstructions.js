import React from 'react';
import './InductionInstructions.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const InductionInstructions = () => {
    return (
        <section className='instructions'>
            <div className="instructions-left">
                <h5>Lets get started with your</h5>
                <h2>INDUCTION</h2>

                <q>
                    <p>
                        The difference between a successful and <br/>
                        non-successful leader is the quality of decisions <br/>
                        you make.
                    </p>
                </q>
            </div>
            <div className="instructions-right">
                <video>

                </video>
                <div className='play-video'>
                    <FontAwesomeIcon icon='play' size="4x" inverse/>
                </div>

                <h5>Gloria Agugua</h5>
                <h2>HR Analyst</h2>
            </div>
        </section>
    );
};

export default InductionInstructions;