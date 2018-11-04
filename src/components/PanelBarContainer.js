
import React from 'react';
import { PanelBar, PanelBarItem } from '@progress/kendo-react-layout';
import { panelBarData } from '../data/appData';

export default class PanelBarContainer extends React.Component {
  imageUrl(imageName) {
    return 'img/' + imageName + '.jpg';
  }
  render() {
    return (
      <PanelBar >
        <PanelBarItem expanded={true} title="My Teammates">
          <div>
            {panelBarData.teammates.map((item, idx) => (
              <div className={idx === 0 ? 'teammate k-state-selected' : 'teammate'} id={item.firstName+' '+item.lastName} key={idx}>
                <img src={this.imageUrl(item.firstName)} alt="" />
                <span className="mate-info">
                  <h2>{item.firstName+' '+item.lastName}</h2>
                  <p>{item.position}</p>
                </span>
              </div>
            ))}
          </div>
        </PanelBarItem>
        <PanelBarItem title={'Projects'} >
          <PanelBarItem title={'Sales Reports'}  >
            {panelBarData.salesReports.map((item,idx) => (
              <PanelBarItem title={item.title} key={idx}/>
            ))}
          </PanelBarItem >
        </PanelBarItem>
        <PanelBarItem title="Communication" disabled={true} />
      </PanelBar>
    );
  }
}