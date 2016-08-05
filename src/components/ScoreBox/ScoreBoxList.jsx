import React from 'react';
import Link from 'react-toolbox/lib/link';
import PureRenderMixin from 'react-addons-pure-render-mixin';

export default React.createClass({
mixins: [PureRenderMixin],
  render () {
    return (
  <div>
 <nav>
    <Link active href="/#/components/link" label="Peer Comparison"/>
    <Link href="/#/components/link" label="Change Over Time"/>
        <Link href="/#/components/link" label="Show Detail"/>
  </nav>
  </div>
);
}
});
