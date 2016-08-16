import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import FontIcon from 'react-toolbox/lib/font_icon';
import Table from 'react-toolbox/lib/table';
import theme from '../../theme/default';
import Tooltip from 'react-toolbox/lib/tooltip';
import Link from 'react-toolbox/lib/link';
import Dialog from 'react-toolbox/lib/dialog';
import ListBoxModalView from '../ListBoxModalView/ListBoxModalView.jsx';
import { Button } from 'react-toolbox';


// export const Modal = React.createClass({ 
//  propTypes: { modal: React.PropTypes.func.isRequired},
//   getInitialState() {
//     return { active: false};
//   },   

//   handleToggle () {
//     this.setState({active: !this.state.active});
//   },
//   render(){
//     const actions = [{ label: "OK", onClick: this.handleToggle }];
//     return(
//       <div>
//         <Dialog 
//           actions={this.actions}
//           active={this.state.active}
//           onEscKeyDown={this.handleToggle}
//           onOverlayClick={this.handleToggle}
//           >
//           <ListBoxModalView/>
//         </Dialog>
//       </div>
//     );
//   }

// });

const TooltipLink = new Tooltip(Link);
const title = 'RESPONDING TO NEED';
const subtitle = 'Top 3 Clinical Assessment Protocols [CAPS]';
const ListModel = {
  title: { type: String }
};

const list = [
  { title: <div>{title} <TooltipLink style={{ float: 'right' }} icon="info_outline" tooltip="info popup" /><br />{subtitle}</div> },
  { title: '1. Falls' },
  { title: <div>2. Social Isolation 
              <a href="#" style={{ float: 'right' }}>Show details</a>              
            </div> },
  { title: <div>3. Depression <FontIcon style={{ color: '#FF0000' }} value="warning" /><a href="#" style={{ float: 'right' }}>Show details</a></div> },
  { title: <small><a href="#"><FontIcon value="person" /> Show peer comparison</a></small> }
];

// <TooltipLink style ={{color:'#FF0000'}}  icon='warning' tooltip='Warning info' />

export default React.createClass({
  mixins: [PureRenderMixin],

  getInitialState() {
    return { source: list, active: false };
  },

  handleToggle () {
    this.setState({active: !this.state.active});
  },

  render() {
    return (
      <div style={{ width: '50%', margin: '5px' }} >
        <Table className={theme.ListBox} selectable={false} heading={false} model={ListModel} source={this.state.source} />
        <br />
        <Button label='List Box Modal View' onClick={this.handleToggle} />
                  <Dialog 
                    actions={this.actions}
                    active={this.state.active}
                    onEscKeyDown={this.handleToggle}
                    onOverlayClick={this.handleToggle}
                    >
                    <ListBoxModalView/>
                  </Dialog>
      </div>
    );
  }
});
