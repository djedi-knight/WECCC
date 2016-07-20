var React = require('react');
var ReactDOM = require('react-dom');

var App = React.createClass({
  render : function() {
    return (
      <div>
        <div id="header"></div>
        <div className="container">
          <div className="column">
            <InboxPane />
          </div>
          <div className="column"></div>
          <div className="column"></div>
        </div>
      </div>
    )
  }
});

var InboxPane = React.createClass({
  render : function() {
    return (
      <div id="inbox-pane">
        <h1>Inbox</h1>
        <table>
          <thead>
            <tr>
              <th>Chat Received</th>
              <th>Name</th>
              <th>Address</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <InboxItem />
          </tbody>
        </table>
      </div>
    )
  }
});

var InboxItem = React.createClass({
  render: function(){
    return (
      <tr>
        <td ref="name">5PM</td>
        <td>Julia C    </td>
        <td>ABC st.</td>
        <td>Order Sent</td>
      </tr>
    )
  }
});

ReactDOM.render(<App/>, document.getElementById('main'));

var LikeButton = React.createClass({
    getInitialState: function(){
        return {liked: false};
    },
    handleClick: function(event){
      this.setState({liked: !this.state.liked});
    },
    render: function(){
      var text= this.state.liked ? 'like': 'haven\'t liked';
      return(
        <p onClick={this.handleClick}>
          You {text} this. Click to toggle.
        </p>  
      );
    }
});

ReactDOM.render(
  <LikeButton/>, document.getElementById('example')
);


