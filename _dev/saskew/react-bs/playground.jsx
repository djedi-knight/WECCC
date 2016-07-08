var Message = React.createClass({
  render: function(){
    return (

      <div>
        <p className='text'>easydevtuts</p>
        <p className='text'>tutorials</p>
      </div>

    );
  }
});

//render the component with react.
React.render(<Message />, document.getElementById('demo'));
