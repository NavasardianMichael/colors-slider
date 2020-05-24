import React from 'react';
import ColorChooseArea from './ColorChooseArea';
import ImgChooseArea from './ImgChooseArea';

function ChooseArea() {
	return (
		<div className="choose-area">
			<div className="row mt-2">
				<div className="col my-2">
					<ColorChooseArea />
				</div>
			</div>
			<div className="row mt-2">
				<div className="col my-2">
					<ImgChooseArea />
				</div>
			</div>
		</div>
	)
}

export default ChooseArea