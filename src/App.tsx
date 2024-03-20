import React from 'react';
import ImageConstruction from './images/under_construction.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faDev,
    faGithub,
    faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons';
import './App.css';

function App() {
    return (
        <div className='App'>
            <header>denidiasjr.github.io</header>
            <section>
                <img alt='Under construction sign' src={ImageConstruction} />
                Oops! My personal web page in under development.
                <br />
                See you soon! 😄
            </section>
            <footer>
                <a
                    href='https://github.com/denidiasjr'
                    target='_blank'
                    rel='noreferrer'
                >
                    <FontAwesomeIcon icon={faGithub} />
                </a>
                <a
                    href='https://linkedin.com/in/denidiasjr'
                    target='_blank'
                    rel='noreferrer'
                >
                    <FontAwesomeIcon icon={faLinkedinIn} />
                </a>
                <a
                    href='https://dev.to/denidiasjr'
                    target='_blank'
                    rel='noreferrer'
                >
                    <FontAwesomeIcon icon={faDev} />
                </a>
            </footer>
        </div>
    );
}

export default App;
