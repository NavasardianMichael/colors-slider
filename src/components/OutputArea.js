import React from 'react';
import {connect} from 'react-redux';
import Carousel from 'react-bootstrap/Carousel';
import './slider.css';

function OutputArea(props) {

	const carouselItems = props.itemsToShow.map(item => {
		return (
				(item.indexOf('#') === 0) ?
					<Carousel.Item key={`colorItem${item}`}><div className="border" style={{backgroundColor: item, height: 500}}></div></Carousel.Item> :
					<Carousel.Item key={`imgItem${item}`} className="text-center border"><img src={item} width="100%" style={{height: 500}} alt={item}/></Carousel.Item>
			)
	})
	

	return (
			<Carousel style={{height: 500}} className="border">
			  	{carouselItems.length ? carouselItems : <h4 className="text-center mt-5">Add colors and images to make an amazing slideshow</h4>}
			</Carousel>
	);
}

const mapStateToProps = state => ({ itemsToShow: state.data.itemsToShow })

export default connect(mapStateToProps, null)(OutputArea)