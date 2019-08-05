import React from 'react';
import {connect} from 'react-redux';
import {getHouses} from '../actions';

class Houses extends React.Component {

    componentDidMount() {
        this.props.getHouses();
    };

    render() {
        console.log(this.props.houses);
        return(
            <div>Houses</div>
        );
    };
}

const mapStateToProps = (state) => {
    return {
        houses: state.houses
    };
};

export default connect(mapStateToProps, {getHouses}) (Houses);
