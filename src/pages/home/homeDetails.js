export const homepageContents=[
    {
        "H_ID":"1",
        "Title":"Total Income",
        "image":process.env.PUBLIC_URL +'/Images/HomeImages/Money/MoneyIcon.png',
        "Amount":"10000"

    },
    {
        "H_ID":"2",
        "Title":"Total Debt",
        "image":process.env.PUBLIC_URL +'/Images/HomeImages/debtIcon/det.png',
 
        "Amount":"12000"

    },
    {
        "H_ID":"3",
        "Title":"Total Savings",
        "image":process.env.PUBLIC_URL +'/Images/HomeImages/saveIcon/save.png',
         "Amount":"10000"

    },

]


export const latestTransactions = [
    {
    key: 'Latest Transactions',
    items: [
        { name: "Transport Home", Vendor: "Nduth",Amount:50 },
        { name: "BreakFast", Vendor: "Stella",Amount:50 },
        { name: "Supper Meat", Vendor: "Alwi Butchery",Amount:150 }
    ]
  }
 
]
export const ListItem = (data) => {
    return (
        <p style={{ margin: '0px' }}>{ data.name } - { data.Vendor } - {data.Amount}</p>
    );
};
 
export const Category =[
    {
        name: 'Food',
        percent: 50,
     
    },
    {
        name: 'Transport',
        percent: 25,
     
    },
    {
        name: 'Personal',
        percent: 25,
     
    },
]



