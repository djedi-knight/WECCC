import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { Card, CardMedia, CardTitle, CardText, CardActions} from 'react-toolbox/lib/card';
import Button from 'react-toolbox/lib/button';

const dummyText = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.';

export default React.createClass({
  mixins: [PureRenderMixin],
  render() {
    return (
      <div className="AreasOfFocusSection" >
        <Card style={{ width: '320px', background:'#EBE8E8',border: '1px solid gray', float: 'right'}}>
            <h3 style={{ hight: '50px', background:'#4980c7', margin:'0px', padding:"10px"}}>
                THINGS TO CONSIDER
            </h3>
                <CardText>		
                       <div>
                             
                               <label><input type="checkbox" />Does my organizationhave the conections and communciations it needs to engage others?</label><br/><hr/>
                               <label><input type="checkbox" />Is the distribution and outcomes of patients condistent with ourt organizational/HR strategies and in-house expertise?</label><br/><hr/>
                               <label><input type="checkbox" />Does my organization have the staff-wide training programs it needs to ensure we add value?</label><br/><hr/>
                       </div>
                </CardText>
        </Card>
      </div>
    );
  }
});


function mapStateToProps(state) {
  return {
       test: 'Works!',
    state
  };
}
