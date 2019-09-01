import React from 'react';
import {NavLink} from 'react-router-dom'
import './InductionInstructions.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Tony from '../../../assets/images/tony-elumelu.jpg'

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

                <div className="credited-to">
                    <div className="author-image">
                        <img className='circular' src={Tony} alt='Tony Elumelu'/>
                    </div>
                    <div className="author-name">
                        <p>Tony Elumelu</p>
                        <p>Chief Executive officer</p>
                    </div>
                </div>
            </div>
            <div className="instructions-right">
                <div className='video'>

                </div>

                <NavLink to='/profile'>
                    <div className='play-video centeralize'>
                        <div className='circle centeralize'>
                            <FontAwesomeIcon icon='play' size="2x"/>
                        </div>
                    </div>
                </NavLink>

                <h5>Gloria Agugua</h5>
                <h2>HR Analyst</h2>

            </div>
        </section>
    );
};

export default InductionInstructions;