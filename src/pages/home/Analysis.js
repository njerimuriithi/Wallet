import React from 'react'
import PieChart, {
    Legend,
    Series,
    Export,
    Label,
    SmallValuesGrouping,
    Connector,
  } from 'devextreme-react/pie-chart';
  
  import { Category} from './homeDetails';

function Analysis() {

  return (
    <div>
 <PieChart
        id="pie"
        type="doughnut"
        title="Category"
        palette="Soft Pastel"
        dataSource={Category}
      >
         <Series argumentField="name" valueField="percent">
          <SmallValuesGrouping mode="topN" topCount={3} />
          <Label
            visible={true}
            format="fixedPoint"
            customizeText="category"
          >
            <Connector visible={true} width={1} />
          </Label>
        </Series>
        <Export enabled={true} />
        <Legend horizontalAlignment="center" verticalAlignment="bottom" />
      </PieChart>

    </div>
  )
}

export default Analysis