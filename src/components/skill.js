import React from 'react';
import { Grid,Cell } from 'react-mdl';

class Experience extends React.Component {
  render() {
    return (
		<Grid >
			<Cell col={4} className="experience-left-cell">
				<p>{this.props.type}</p>
			</Cell>
			<Cell col={8} className="experience-right-cell">
				<p>{this.props.value}</p>
			</Cell>
		</Grid>
	)
  }
}

export default Experience;