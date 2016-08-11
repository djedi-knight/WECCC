import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import Navigation from 'react-toolbox/lib/navigation';
import Link from 'react-toolbox/lib/link';


export default React.createClass({
  mixins: [PureRenderMixin],
  render() {
    return (
      <div className="MyCommunityBody">
     <nav>
    <Link active href="/#/components/link" label="Individuals have many different needs." icon='Patient needs vary' />
    <Link href="/#/components/link" label="Groups of Patients." icon='Here is the' />
    <Link href="/#/components/link" label="with these comprehensive tools" icon='That will be explored' />
  </nav>
  <br/>
  
  <br/>
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
