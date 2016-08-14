import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { Card, CardText, CardTitle } from 'react-toolbox/lib/card';
import FontIcon from 'react-toolbox/lib/font_icon';
import AppBar from 'react-toolbox/lib/app_bar';
import Checkbox from 'react-toolbox/lib/checkbox';
import theme from '../../theme/default';


var dummyText='Adverse drug effects are defined by Lorem Ipsum Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem'

export default React.createClass({
  mixins: [PureRenderMixin],
   getInitialState() {
   		var field={check1: false, check2: false,  check3: false };

    return { field };
  },   

  handleChange (field, value) {
   	this.setState({field, [field]: value});
  },

  render() {
    return (
    	<div style={{ width:'100%' }}>
	      	<div>      	  
		      <h3 style={{ background: '#110b31',color:'#FFF', margin: '0px', padding: '12px' }}>Safety Events: Adverse Drug Effects
		      	<FontIcon style={{ float:'right'}}value="close" />
		      </h3>
		      <br/>
			</div> {/* Header*/}
	      	<div style={{border: '1px solid gray', width:'70%', float:'left' }}> {/* first container*/}
		      	<div style={{ border:'1px solid gray', borderStyle: 'hidden hidden solid hidden' }}> {/* Graph title*/}
		      		<h3 style={{ background: '#F2F7FA', color:'#110b31',margin: '0px', padding: '12px' }}>Change Over Time 
		      			<FontIcon style={{ float:'right'}}value="trending_up" />
		      		</h3>
		      	</div>{/* End Graph title*/}
	      		<img style={{width: '200px', height:'150px', padding:'12px'}} src="https://s31.postimg.org/hla3xitq3/imageedit.jpg"/> {/* End image*/}

		      	<div style={{ border:'1px solid gray', borderStyle: 'solid hidden solid hidden' }}>
		      		<h3 style={{ background: '#F2F7FA', color:'#110b31',margin: '0px', padding: '12px' }}>Peer Comparison 
		      			<FontIcon style={{ float:'right'}}value="person" />
		      		</h3>
		      	</div>{/* Peer Comparison*/}
		      	<div>
			      	<p>
			      		<Checkbox   checked={this.state.check1}label="- - High Risk" onChange={this.handleChange.bind(this, 'check1')} />
			      	</p>
			        <p>
			        	<Checkbox style={{ height:'2px', width:'2px', fontSize: '10px'}} checked={this.state.check2} label="- - Medium risk" onChange={this.handleChange.bind(this, 'check2')} />
			        </p>
		           	<p> 
		           		<Checkbox style={{ height:'10px', width:'5px'}} checked={this.state.check3} label="- - Low Risk" onChange={this.handleChange.bind(this, 'check3')} />
		           	</p>
		      	</div>	
		      	  

	           	<div style={{ border:'1px solid gray', borderStyle: 'solid hidden hidden hidden' }}>
	           		<p style={{ background: '#F2F7FA', color:'#110b31',margin: '0px', padding: '12px' }}>{dummyText}</p>
	           	</div>
		    </div>

      		<div style={{border: '1px solid gray',  width:'27%', float:'right', height:'508px', background:'#FADEDE'  }}> {/* Second container*/}
 	     		<div style={{background: '#F00', margin: '0px'}}> 
 	     			<FontIcon style={{color: '#FFF', padding:'5px'}}value="warning" />
 	     		</div>     		
      			<p style={{padding:'2px'}}>There is an indication that your HIGH RISK score is lower than the peer score.</p>     		
	      	</div> 
	    </div>
    );
  }
});


