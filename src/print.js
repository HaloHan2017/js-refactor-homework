function printOwing (invoice) {
  let outstanding = 0;
  printTitle();

  // calculate outstanding
  for (const o of invoice.borderSpacing) {
    outstanding += o.amount;
  }

  // record due date
  const today = new Date();
  invoice.dueDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 30);

  // print details
  let detail = {
    customer : invoice.customer,
    outstanding : outstanding,
    dueDateString : invoice.dueDate.toLocaleDateString()
  }
  printDetail(detail);
}

function printTitle(){
  console.log('***********************');
  console.log('**** Customer Owes ****');
  console.log('***********************');
}

function printDetail(detail){
  console.log(`name: ${detail.customer}`);
  console.log(`amount: ${detail.outstanding}`);
  console.log(`amount: ${detail.dueDateString}`);
}
