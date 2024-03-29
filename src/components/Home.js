import React from 'react';
import '../styles/Home.css';

class Home extends React.Component {
    
    render() {
        return(
            <div className="container-fluid home-container">
                <div className="mask">
                    <div className="page-header home-header">
                        <h2>Welcome to Harry Potter world!</h2>
                    </div>
                    <div className="home-content">
                        <blockquote className="blockquote">
                            <p className="mb-0 content-txt">
                                Harry Potter is a series of fantasy novels written by British author J. K. Rowling. The novels chronicle the lives of a young wizard, Harry Potter, and his friends Hermione Granger and Ron Weasley, all of whom are students at Hogwarts School of Witchcraft and Wizardry. The main story arc concerns Harry's struggle against Lord Voldemort, a dark wizard who intends to become immortal, overthrow the wizard governing body known as the Ministry of Magic and subjugate all wizards and Muggles (non-magical people).
                            </p>
                            <footer className="blockquote-footer">wikipedia.org</footer>
                        </blockquote>
                    </div>
                </div>
            </div>
        );
    };
}

export default Home;
