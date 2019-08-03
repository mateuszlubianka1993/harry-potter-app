import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from './Header';
import Spells from './Spells';
import Houses from './Houses';
import Characters from './Characters';

class App extends React.Component {
    render() {
        return(
            <div className="app-container">
                <BrowserRouter>
                    <div>
                        <Header />
                        <Route path="/spells" component={Spells} />
                        <Route path="/houses" component={Houses} />
                        <Route path="/characters" component={Characters} />
                    </div>
                </BrowserRouter>
            </div>
        );
    };
}

export default App;
