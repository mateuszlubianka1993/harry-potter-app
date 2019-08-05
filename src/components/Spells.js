import React from 'react';
import {connect} from 'react-redux';
import {getSpells} from '../actions';

class Spells extends React.Component {

    componentDidMount() {
        this.props.getSpells();
    };

    render() {
        return(
            <div className="container">
                <div className="page-header">
                    <h2>List of spells</h2>
                </div>
                <div className="page-list">
                    
                </div>
            </div>
        );
    };
}

const mapStateToProps = (state) => {
    return{
        spells: state.spells
    }
};

export default connect(mapStateToProps, {getSpells}) (Spells);
