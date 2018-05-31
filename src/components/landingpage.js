import React from 'react';
import { Grid,Cell } from 'react-mdl';

class LandingPage extends React.Component {
  render() {
    return (
	<div style={{width: '100%',margin:'auto'}}>
		<Grid className="landing-grid">
			<Cell col={12}>
				<img
				src="https://image.flaticon.com/icons/svg/0/93.svg"
				alt="avatar"
				className="avatar-img"/>
				
				<div className="banner-text">
					<h1> Full Stack Web Developer </h1>
					
					<hr/>
					
					<p> HTML/CSS | Javascipt | jQuery | React | NodeJS | Express | MongoDB </p>
					
					<div className="social-links"> 
						{/*LinkedIn*/}
						<a href="https://www.linkedin.com/in/avik27" rel="noopener noreferrer" target="_blank">
							<i className="fa fa-linkedin-square" aria-hidden="true"></i>
						</a>
						
						{/*Github*/}
						<a href="https://github.com/avik-sengupta" rel="noopener noreferrer" target="_blank">
							<i className="fa fa-github" aria-hidden="true"></i>
						</a>
					</div>
				</div>
			</Cell>
		</Grid>
	</div>
	);
  }
}

export default LandingPage;