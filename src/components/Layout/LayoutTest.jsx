import React from 'react';
import { AppBar, Checkbox, IconButton } from 'react-toolbox';
import { Layout, NavDrawer, Panel, Sidebar } from 'react-toolbox';
import HeaderImage from '../HeaderImage/HeaderImage.jsx';


class LayoutTest extends React.Component {    

    render() {
        return (
            <Layout>
                
                <Panel>
                    <AppBar fixed flat >Outcome Reports</AppBar>
                    <br /><br /><br /><br />
                    <div style={{ display: 'block',  width: '50%', margin: 'auto', padding: 10 }}>
                        <HeaderImage />
                    </div>
                </Panel>
                
            </Layout>
        );
    }
}

export default LayoutTest;