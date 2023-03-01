import React from 'react';
import 'devextreme/data/odata/store';
import { Button } from 'devextreme-react/button';
import { useNavigate } from 'react-router-dom';
import DataGrid, {
  Column,
  Pager,
  Paging,
  FilterRow,
  Lookup
} from 'devextreme-react/data-grid';

export default function Transactions() {
  const navigate = useNavigate();
  return (

    <React.Fragment>
      <h2 className={'content-block'}>Transactions
      <Button
       onClick={()=>navigate("/addnewtransactions")} 
        text="Add New Transaction"
      />
      </h2>
     

      <DataGrid
        className={'dx-card wide-card'}
        //dataSource={dataSource}
        showBorders={false}
        focusedRowEnabled={true}
        defaultFocusedRowIndex={0}
        columnAutoWidth={true}
        columnHidingEnabled={true}
      >
        <Paging defaultPageSize={10} />
        <Pager showPageSizeSelector={true} showInfo={true} />
        <FilterRow visible={true} />

        <Column dataField={'Transaction_ID'} width={90} hidingPriority={2} />
        <Column
          dataField={'T_Name'}
          width={190}
          caption={'Transaction Name'}
          hidingPriority={8}
        />
        <Column
          dataField={'T_Vendor'}
          caption={'Vendor'}
          hidingPriority={6}
        />
        <Column
          dataField={'T_Amount'}
          dataType={'Number'}
          caption={'Priority'}
          hidingPriority={5}
        >
          {/* <Lookup
            dataSource={priorities}
            valueExpr={'value'}
            displayExpr={'name'}
          />*/}
        </Column>
        <Column
          dataField={'T_TransactionCost'}
          caption={'Transaction Cost'}
          dataType={'Number'}
          hidingPriority={7}
        />
        <Column
          dataField={'T_DateofTransaction'}
          caption={'Start Date'}
          dataType={'date'}
          hidingPriority={3}
        />
         <Column
          dataField={'T_Priority'}
          caption={'Priority'}
          dataType={'boolean'}
          hidingPriority={4}
        />
        {/*
        <Column
          dataField={'Task_Priority'}
          caption={'Priority'}
          name={'Priority'}
          hidingPriority={1}
        />
        <Column
          dataField={'Task_Completion'}
          caption={'Completion'}
          hidingPriority={0}
        />*/}
      </DataGrid>
    </React.Fragment>
)}

{/*const dataSource = {
  store: {
    type: 'odata',
    key: 'Transaction_ID',
    url: 'https://js.devexpress.com/Demos/DevAV/odata/Tasks'
  },
  expand: 'ResponsibleEmployee',
  select: [
    'Transaction_ID',
    'T_Name',
    'T_Vendor',
    'T_Amount',
    'T_TransactionCost',
    'T_DateofTransaction',
    'T_Priority',
    
  ]
};

const priorities = [
  { name: 'High', value: 4 },
  { name: 'Urgent', value: 3 },
  { name: 'Normal', value: 2 },
  { name: 'Low', value: 1 }
];
*/}