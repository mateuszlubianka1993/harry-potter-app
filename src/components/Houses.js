import React from 'react';
import {connect} from 'react-redux';
import {getHouses} from '../actions';
import '../styles/page.css';

class Houses extends React.Component {

    componentDidMount() {
        this.props.getHouses();
    };

    renderHouses() {
        return this.props.houses.map(house=> {
            return(
                <div className="card" style={{width:'450px'}} key={house._id}>
                    <div className="card-header">
                        <h5 className="card-title">{house.name}</h5>
                        <p className="blockquote-footer">{house.values.map(value=> <span key={value}>{`${value} `}</span>)}</p>
                    </div>
                    <div className="card-body">
                        <p className="card-text">Mascot: {house.mascot}</p>
                        <p className="card-text">Head of house: {house.headOfHouse}</p>
                        <p className="card-text">House ghost: {house.houseGhost}</p>
                        <p className="card-text">Founder: {house.founder}</p>
                        <p className="card-text">Colors: {house.colors.map(color=><span style={{color: `${color}`}} key={color}>{`${color} `}</span>)}</p>
                    </div>
                    <div className="card-footer text-muted">
                        {house.school}
                    </div>
                </div>
            );
        })
    }
    
    render() {
        return(
            <div className="container">
                <div className="page-header">
                    <h2>Hogwarts Houses</h2>
                </div>
                <div className="page-list">
                    {this.renderHouses()}
                </div>
            </div>
        );
    };
}

const mapStateToProps = (state) => {
    return {
        houses: state.houses
    };
};

export default connect(mapStateToProps, {getHouses}) (Houses);
