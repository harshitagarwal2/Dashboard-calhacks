import React from 'react';
import { Grid, GridColumn as Column } from '@progress/kendo-react-grid';
import { gridData } from '../data/appData';
export default class GridContainer extends React.Component {
    processData = (data) => {
        data.forEach((item) => {
          item.PriceHistory = Array.from({length: 40},() => Math.floor(Math.random()*100));
          return item;
        })
        return data;
      }
      
  render() {
    return (
      <div>
        <Grid style={{ height: '300px' }} data={this.processData(gridData)}>
          <Column field="ProductID" title="ID" width="40px" />
          <Column field="ProductName" title="Name" width="240px" />
          <Column field="Category.CategoryName" title="Category Name" />
          <Column field="UnitPrice" title="Price" width="80px" />
          <Column field="UnitsInStock" title="In stock" width="100px" />
          <Column field="Discontinued" width="130px"
            cell={(props) => (
              <td>
                <input className="k-checkbox" type="checkbox" disabled defaultChecked={props.dataItem[props.field]} />
                <label className="k-checkbox-label"></label>
              </td>
            )} />
        </Grid>
      </div>
    );
  }
}
