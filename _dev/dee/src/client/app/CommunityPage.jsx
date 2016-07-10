import React from 'react'
var h4Style={
	'textAlign' : 'right',
}
class CommunityPage extends React.Component{
	render() {
		return (
			<div>
				<h1>My Community Network</h1> 
				<h4 style = {h4Style}> Windsor </h4>
				<hr/>
			</div>
		);
	}
}
export default CommunityPage;