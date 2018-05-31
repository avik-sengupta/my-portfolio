import React from 'react';
import { Grid,Cell,List,ListItem,ListItemContent } from 'react-mdl';

class Contact extends React.Component {
  render() {
    return (
	<div className="contact-body">
		<Grid className="contact-grid">
			<Cell col={6}>
				<h1 style={{width : '75%', margin : 'auto', paddingTop: '0.3em'}}>AVIK SENGUPTA</h1>
				<img
				src="https://cdn0.iconfinder.com/data/icons/computer-and-internet-2/600/old-telephone-communication-cable-call-256.png"
				alt="telephone"
				style={{height : '250px'}}/>
				<p style={{width : '75%', margin : 'auto', paddingTop: '1em'}}>
					
				</p>
			</Cell>
			<Cell col={6}>
				<h2 style={{color:'#FFA500'}}>Contact Me</h2>
				<h4>I PROMISE, I WON'T BITE</h4>
				
				<div className="contact-list">
					<List>
						<ListItem>
							<ListItemContent style={{fontSize: '28px', fontFamily: 'Anton'}}>
								<i className="fa fa-phone-square" aria-hidden="true"/>
								(617) 959-5468
							</ListItemContent>
						</ListItem>
						
						
						<ListItem>
							<ListItemContent style={{fontSize: '28px', fontFamily: 'Anton'}}>
								<i className="fa fa-envelope" aria-hidden="true"/>
								sengupta.av@husky.neu.edu
							</ListItemContent>
						</ListItem>
						
						
						
					</List>
				</div>
				
			</Cell>
		</Grid>
	</div>
	);
  }
}

export default Contact;