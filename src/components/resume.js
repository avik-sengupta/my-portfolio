import React from 'react';
import { Grid,Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skill from './skill';
import Hobby from './hobby';

class Resume extends React.Component {
  render() {
    return (
	<div className="resume-grid">
		<Grid>
			<Cell className="resume-left-col" col={8}>
				<h2>Education</h2>
				<Education startYear="September 2017"
				endYear="Present"
				collegeName="Northeastern University"
				collegeDescription="College of Computer and Information Science"
				collegeCourse="Candidate for a Master of Science in Computer Science"/>
				
				<Education startYear="May 2007"
				endYear="June 2011"
				collegeName="Jaypee University of Engineering & Technology"
				collegeDescription="Bachelor of Technology in Computer Science"/>
				
				<hr style={{borderTop: '3px solid #e22947'}}/>
				
				<h2>Experience</h2>
				<Experience startYear="July 2016"
				endYear="July 2017"
				jobName="Recaho Digital Private Limited"
				jobDescription="Technical Analyst"/>
				
				<Experience startYear="July 2011"
				endYear="July 2016"
				jobName="INFOSYS LIMITED"
				jobDescription="Technical Analyst"/>
				
				<hr style={{borderTop: '3px solid #e22947'}}/>
				
				<h2>Interests</h2>
				<Hobby hobby="Swimming & eSPORTS"/>
				
				
			</Cell>
			
			<Cell  col={4}>
				<div style={{width: '100%',margin:'auto'}}> 
					<h2>Skills</h2>
					<Skill type="Languages :"
						   value="Java, shellscripting"/>
					<Skill type="Web Technologies :"
						   value="Node.js,JSP, JavaScript, HTML,CSS"/>
					<Skill type="Frameworks :"
						   value="Hibernate, Spring MVC"/>
					<Skill type="Tools :"
						   value="Ant,Maven,Apache Tomcat,Jenkins,Git,SVN,JIRA"/>
					<Skill type="Database and Servers :"
						   value="Cloudant, MongoDB,MySQL"/>
				</div>
			</Cell>
		</Grid>
	</div>
	)
	
  }
}

export default Resume;