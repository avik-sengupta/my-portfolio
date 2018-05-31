import React from 'react';
import { Grid,Cell } from 'react-mdl';

class Hobby extends React.Component {
  render() {
    return (
		<Grid style={{paddingTop: '0px'}}>
			<Cell col={12}>
				<h4>{this.props.hobby}</h4>
			</Cell>
		</Grid>
	)
  }
}

export default Hobby;