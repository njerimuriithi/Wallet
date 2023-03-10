import React, { useCallback, useState } from 'react';
import 'devextreme/dist/css/dx.light.css';
//import './App.css'
import 'devextreme/data/odata/store';

import {
  DataGrid,
  ColumnChooser,
  ColumnFixing,
  Column,
  RequiredRule,
  FilterRow,
  SearchPanel,
  GroupPanel,
  Selection,
  Summary,
  GroupItem,
  Editing,
  Grouping,
  Toolbar,
  Item,
  MasterDetail,
  Export
} from 'devextreme-react/data-grid';
import { Button } from 'devextreme-react/button';

import { transactions } from '../Transactions/transactiondetails';
import { Workbook } from 'exceljs';
import saveAs from 'file-saver';
import { exportDataGrid } from 'devextreme/excel_exporter';
import { jsPDF } from 'jspdf';
import { exportDataGrid as exportDataGridToPdf} from 'devextreme/pdf_exporter';

const exportFormats = ['xlsx', 'pdf'];

function SelectedTransaction(props) {
  if(props.transactions) {
    return (
      <p id="selected-transaction">
        Selected transaction: {props.transactions.TransactionName}
      </p>
    );
  }
  return null;
}

function DetailSection(props) {
  const transaction = props.data.data;
  return (
    <div>
      <img
        className="employee-photo"
        alt={transaction.TransactionName}
        src={transaction.Evidencepayment}
      />
      <p className="employee-notes">{transaction.Notes}</p>
    </div>
  );
}

function exportGrid(e) {
  if (e.format === 'xlsx') {
    const workbook = new Workbook(); 
    const worksheet = workbook.addWorksheet("Main sheet"); 
    exportDataGrid({ 
      worksheet: worksheet, 
      component: e.component,
    }).then(function() {
      workbook.xlsx.writeBuffer().then(function(buffer) { 
        saveAs(new Blob([buffer], { type: "application/octet-stream" }), "DataGrid.xlsx"); 
      }); 
    }); 
    e.cancel = true;
  } 
  else if (e.format === 'pdf') {
    const doc = new jsPDF();
    exportDataGridToPdf({
      jsPDFDocument: doc,
      component: e.component,
    }).then(() => {
      doc.save('DataGrid.pdf');
    });
  }
}

function App() {
  const [SelectedTransaction, setSelectedTransaction] = useState();
  const [expanded, setExpanded] = useState(true);
  const selectTransaction = useCallback((e) => {
    e.component.byKey(e.currentSelectedRowKeys[0]).done(transaction => {
        setSelectedTransaction(transaction);
    });
  }, []);

  return (
    <div className="App">
      <DataGrid
        id="dataGrid"
        dataSource={transactions}
        keyExpr="T_ID"
        allowColumnResizing={true}
        columnAutoWidth={true}
        allowColumnReordering={true}
        onSelectionChanged={selectTransaction}
        onExporting={exportGrid}>
        <ColumnChooser enabled={true} />
        <Column dataField="TransactionName">
          <RequiredRule />
        </Column>
        <Column dataField="VendorName">
          <RequiredRule />
        </Column>
        <Column
          dataField="TransactioDate"
          dataType="date"
          width={100}>
          <RequiredRule />
        </Column>
     
        <Column dataField="AmountSpent" />
      
        <Column dataField="TransactionCost" />
        <Column dataField="Category" width={100}/>
        <Column dataField="ModeOfPayment" visible={false} />
        <ColumnFixing enabled={true} />
        <FilterRow visible={true} />
        <SearchPanel visible={true} />
        <GroupPanel visible={true} />
        <Selection mode="single" />
        <Summary>
          <GroupItem
            summaryType="count"
          />
        </Summary>
        <Editing
          mode="popup"
          allowUpdating={true}
          allowDeleting={true}
          allowAdding={true}
        />
        <Grouping autoExpandAll={expanded} />
        <Toolbar>
          <Item name="groupPanel" />
          <Item location="after">
            <Button
                text={expanded ? 'Collapse All' : 'Expand All'}
                width={136}
                onClick={() => setExpanded(prevExpanded => !prevExpanded)}
            />
          </Item>
          <Item name="addRowButton" showText="always" />
          <Item name="exportButton" />
          <Item name="columnChooserButton" />
          <Item name="searchPanel" />
        </Toolbar>
        <MasterDetail
          enabled={true}
          component={DetailSection}
        />
        <Export enabled={true} formats={exportFormats} />
      </DataGrid>
      <selectTransaction employee={selectTransaction} />
    </div>
  );
}

export default App;
