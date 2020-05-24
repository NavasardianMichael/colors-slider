import React from 'react';
import ChooseArea from './components/ChooseArea';
import OutputArea from './components/OutputArea';

function App() {
  return (
    <div className="App">
      <div className="container">
		<div className="row mt-2">
			<div className="col-lg-6">
				<ChooseArea />
			</div>
			<div className="col-lg-6">
				<OutputArea />
			</div>
		</div>
      </div>
    </div>
  );
}

export default App;
