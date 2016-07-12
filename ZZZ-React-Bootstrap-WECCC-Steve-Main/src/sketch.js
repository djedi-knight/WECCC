var React = require('react');
var moment = require('moment');
var DateRangePicker = require('react-bootstrap-daterangepicker');

export default class sketch extends React.Component {
     render() {
      const aDate = '10';
        function renderSketch (startDate) {
      return (
            <DateRangePicker startDate={moment('1/1/2014')} endDate={moment('3/1/2014')}>
                <div>Click Me To Open Picker!</div>
            </DateRangePicker>
        );
    }

    return <DateRangePicker>{aDate.map(renderSketch)}</DateRangePicker>;
}
}


