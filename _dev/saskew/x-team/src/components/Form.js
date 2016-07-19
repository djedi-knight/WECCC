import React, {PropTypes} from 'react';
export default React.createClass({

  displayName: 'Form',

  childContextTypes: {
    update: Proptypes.func,
    reset: Proptypes.func,
    submit: Proptypes.func,
    values: Proptypes.object
  },

  getChildContext() {
    return {
      update: this.props.update,
      reset: this.props.reset,
      submit: this.submit,
      values: this.props.values
    };
  },
  propTypes: {
    children: PropTypes.node,
    values: PropTypes.object,
    update: PropTypes.func,
    reset: PropTypes.func,
    onSubmit: PropTypes.func
  },

  render() {
    return (
      <form>
        {this.props.children}
      </form>
            );
  }
});
