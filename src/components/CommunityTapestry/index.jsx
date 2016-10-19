import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { connect } from 'react-redux';
import * as actionCreators from '../../actions/action_creators';
import { Row, Col } from 'react-flexbox-grid';
import ScoreBoxSimple from '../ScoreBoxSimple';
import style from './style';
import data from './data.json';
import { VictoryPie } from 'victory/dist/victory';
import ReactTooltip from 'react-tooltip';
import { IconButton } from 'react-toolbox';
import { ScoreBox } from '../ScoreBox';
import tableData from './tableData.json';

const colorScale = [
  '#D85F49',
  '#F66D3B',
  '#D92E1D',
  '#D73C4C',
  '#FFAF59',
  '#E28300',
  '#F6A57F',
  '#FF0000'
];

const labelStyle = { labels: { fill: 'white', fontSize: 18} };
const dummyText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis posuere gravida nibh sagittis rutrum. Nam porttitor ante id luctus interdum. Aenean consequat magna eu semper egestas. Sed varius id ex ut gravida. Donec eget eros nec augue luctus luctus. Sed nec elit nibh. Donec ac libero a mauris tempor molestie.'
export const CommunityTapestry = React.createClass({
  mixins: [PureRenderMixin],
   getInitialState() {
    return {
      active: false,
      tableData,
      index: 0 
    };
  },
  testFunction() {
    console.log('test function called!');
  },
  showTable(index) {
    this.setState({ active: true, index });
  },
  getTable(){
    if(this.state.active){
      return (
        <div>
          <div className={style.subHeader}>
            Section Breakdown
          </div>
          <br/>
            <div className={style.reportTable}>        
              {/*Table Container*/}             
                <Row className={style.tableHeader}>
                  <Col xs={4}>Heading 1</Col>
                  <Col xs={4}>Heading 2</Col>
                  <Col xs={4}>Heading 3</Col>
                </Row>
                <div>
                  <Row className={style.tableRow}>
                    <Col xs={4}>{this.state.tableData.data[this.state.index].Heading1}</Col>
                    <Col xs={4}>{this.state.tableData.data[this.state.index].Heading2}</Col>
                    <Col xs={4}>{this.state.tableData.data[this.state.index].Heading3}</Col>               
                  </Row>
                </div>        
              {/*Table Container End*/}
            </div> 
        </div>      
      );
    }
    return null;    
  },

  render() {
    return (
      <div className={style.communityTapestry}>
        <div className={style.header}>
          Community Tapestry
        </div> 
        <div className={style.subgroup}>
          <Row className={style.header}>
            <div className={style.title}>
              Description Text
            </div>
          </Row>
          <Row >
            <div className={style.descriptionText}>
              <br/>
              {dummyText}                  
            </div>
          </Row>
        </div>
        <Row>
        <Col xs={2}/> 
          <Col xs={5}>            
            {/*Pie Chart Container*/}                            
                <VictoryPie
                  labelRadius={120}
                  padding={20}
                  style={labelStyle}
                  data={data}
                  colorScale={colorScale} 
                  events={[
                    {
                      target: "data",
                      eventHandlers: {
                        onClick: () => { 
                          console.log('chart clicked!');
                          this.testFunction();
                          return [
                            {
                              mutation: (props) => {
                                console.log(props.index);
                                this.showTable(props.index);                           
                              }
                            }
                          ];
                        }
                      }
                    }
                  ]}           
                />
            {/*Pie Chart Container End*/} 
          </Col>
          <Col xs={4}>          
            {this.getTable()}
          </Col>
          <Col xs={1}/> 
        </Row>
       
        <div className={style.subgroup}>
          <Row className={style.header}>
            <div className={style.title}>
              Return On Investment
            </div>
          </Row>
          <Row className={style.body}>
            <Col xs={3} />
            <Col xs={3}>
              <ScoreBoxSimple />
            </Col>
            <Col xs={3}>
              <ScoreBoxSimple />
            </Col>
            <Col xs={3} />
          </Row>
        </div>
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

export const CommunityTapestryContainer = connect(
  mapStateToProps,
  actionCreators
)(CommunityTapestry);
