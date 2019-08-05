import React from 'react';
import {connect} from 'react-redux';
import {getSpells} from '../actions';

class Spells extends React.Component {

    componentDidMount() {
        this.props.getSpells();
    };

    render() {
        return(
            <div>Spells</div>
        );
    };
}

const mapStateToProps = (state) => {
    return{
        spells: state.spells
    }
};

export default connect(mapStateToProps, {getSpells}) (Spells);
