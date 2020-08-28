function printOwing (invoice) {
  printTitle();
  printDetail({
      customer : invoice.customer,
      outstanding : calculateOutstanding(invoice),
      dueDateString : getDueDateString(invoice.dueDate)
  });
}

function getDueDateString(dueDate){
  const today = new Date();
  return new Date(today.getFullYear(), today.getMonth(), today.getDate() + 30).toLocaleDateString();
}

function calculateOutstanding(invoice){
  let outstanding = 0;
  for (const o of invoice.borderSpacing) {
    outstanding += o.amount;
  }
  return outstanding;
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
