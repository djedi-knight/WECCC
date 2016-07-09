import React from 'react';

class UpdateForm extends React.Component {

   constructor(props) {
      super(props);
      
      this.state = {
         data: ''
      }

      this.updateState = this.updateState.bind(this);
      this.clearInput = this.clearInput.bind(this);
   };

   updateState(e) {
      this.setState({data: e.target.value});
   }

   clearInput() {
      this.setState({data: ''});
      ReactDOM.findDOMNode(this.refs.myInput).focus();
   }

   render() {
      return (
         <div>
            <input value = {this.state.data} onChange = {this.updateState} 
               ref = "myInput"></input>
            <button onClick = {this.clearInput}>CLEAR</button>
            <h4>{this.state.data}</h4>
         </div>
      );
   }

//    constructor(props) {
//       super(props);
		
//       this.state = {
//          item: 'Update From Textbox'
//       }

//       this.updateState = this.updateState.bind(this); //bind function to component state

//    };

//    updateState(e) {
//       this.setState({item: e.target.value});
//    }

//    render() {
//       return (
//          <div>
//             <input type = "text" value = {this.state.item} 
//                onChange = {this.updateState} />
//             <h4>{this.state.item}</h4>
//          </div>
//       );
//    }
}

export default UpdateForm;