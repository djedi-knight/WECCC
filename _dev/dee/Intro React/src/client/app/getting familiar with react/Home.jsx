import React from 'react';
import CombinedComponent from './combinedComponents.jsx';
import UpdateForm from './UpdateForm.jsx';
var myStyle = {
         
         color: '#FF00FF'
      }


class Home extends React.Component {
   render() {
      return (
         <div>
            <h1 style = {myStyle}>Home...</h1>
            <CombinedComponent />
            <UpdateForm />
         </div>
      )
   }
}

export default Home;

