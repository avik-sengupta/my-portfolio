import React from 'react';
import { Grid,Cell } from 'react-mdl';

class AboutMe extends React.Component {
  render() {
    return (
	<div className="me-div">
		<Grid className="me-grid">
			<Cell col={4}>
				<img
				src="https://image.flaticon.com/icons/svg/0/93.svg"
				alt="avatar"
				className="me-avatar-img"/>
				
			</Cell>
			
			<Cell  col={8}>
				<h1>Hello,</h1>
				<h2>a bit about me: </h2>
				<p style={{ width: '75%', margin: 'fixed'}}>
				   I'm a graduate student at Northeastern University studying Computer Science. 
				   I have 5 years of prior work experience with Infosys Limted, India and 1 year 
				   of prior work experience with Recaho Digital Private Limited, India as a 
				   Technical Analyst. I enjoy critical problem-solving with a 
				   keen eye for detail using an analytical approach.
				</p>
			</Cell>
		</Grid>
	</div>
	)
}
}

export default AboutMe;