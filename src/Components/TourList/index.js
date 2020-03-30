import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Tour from '../Tour/Tour';
import './TourList.scss';
import { tourData } from '../../tourData';

/**
* @author
* @class TourList
**/

class TourList extends Component {
    state = {
        tours: tourData
    }

    removeTour = (id) => {
        const { tours } = this.state;
        const sortedTours = tours.filter(tour => tour.id !== id);
        this.setState({ tours: sortedTours });
    }
    render() {
        const { tours } = this.state;
        return (
            <section className="tourList">
                {tours.map(tour => {
                    return <Tour key={tour.id} tour={tour} removeTour={this.removeTour} />
                })}

            </section>
        )
    }
}


TourList.propTypes = {}
export default TourList