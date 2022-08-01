// https://calculator.swiftutors.com/days-sales-in-inventory-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const v4 = document.getElementById('v4');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const daysSalesinInventoryRadio = document.getElementById('daysSalesinInventoryRadio');
const AverageInventoryRadio = document.getElementById('AverageInventoryRadio');
const costofGoodsSoldRadio = document.getElementById('costofGoodsSoldRadio');
const periodofMeasurementRadio = document.getElementById('periodofMeasurementRadio');

let daysSalesinInventory;
let inventoryOpeningBalance = v1;
let inventoryClosingBalance = v2;
let costofGoodsSold = v3;
let periodofMeasurement = v4;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');
const variable3 = document.getElementById('variable3');
const variable4 = document.getElementById('variable4');

daysSalesinInventoryRadio.addEventListener('click', function() {
  variable1.textContent = 'Inventory Opening Balance';
  variable2.textContent = 'Inventory Closing Balance';
  variable3.textContent = 'Cost of Goods Sold';
  variable4.textContent = 'Period of Measurement';
  inventoryOpeningBalance = v1;
  inventoryClosingBalance = v2;
  costofGoodsSold = v3;
  periodofMeasurement = v4;
  result.textContent = '';
  variable4.style.display = 'inline';
  v4.style.display = 'inline';
});

AverageInventoryRadio.addEventListener('click', function() {
  variable1.textContent = 'Days Sales in Inventory (DSI)';
  variable2.textContent = 'Cost of Goods Sold';
  variable3.textContent = 'Period of Measurement';
  daysSalesinInventory = v1;
  costofGoodsSold = v2;
  periodofMeasurement = v3;
  result.textContent = '';
  variable4.style.display = 'none';
  v4.style.display = 'none';
});

costofGoodsSoldRadio.addEventListener('click', function() {
  variable1.textContent = 'Days Sales in Inventory (DSI)';
  variable2.textContent = 'Inventory Opening Balance';
  variable3.textContent = 'Inventory Closing Balance';
  variable4.textContent = 'Period of Measurement';
  daysSalesinInventory = v1;
  inventoryOpeningBalance = v2;
  inventoryClosingBalance = v3;
  periodofMeasurement = v4;
  result.textContent = '';
  variable4.style.display = 'inline';
  v4.style.display = 'inline';
});

periodofMeasurementRadio.addEventListener('click', function() {
  variable1.textContent = 'Days Sales in Inventory (DSI)';
  variable2.textContent = 'Inventory Opening Balance';
  variable3.textContent = 'Inventory Closing Balance';
  variable4.textContent = 'Cost of Goods Sold';
  daysSalesinInventory = v1;
  inventoryOpeningBalance = v2;
  inventoryClosingBalance = v3;
  costofGoodsSold = v4;
  result.textContent = '';
  variable4.style.display = 'inline';
  v4.style.display = 'inline';
});

btn.addEventListener('click', function() {
  
  if(daysSalesinInventoryRadio.checked)
    result.textContent = `Days Sales in Inventory = ${computeDaysSalesinInventory().toFixed(2)} Days`;

  else if(AverageInventoryRadio.checked)
    result.textContent = `Average Inventory = ${computeAverageInventoryOutput().toFixed(2)}`;

  else if(costofGoodsSoldRadio.checked)
    result.textContent = `Cost of Goods Sold = ${computeCostofGoodsSold().toFixed(2)}`;

  else if(periodofMeasurementRadio.checked)
    result.textContent = `Period of Measurement = ${computePeriodofMeasurement().toFixed(2)} Days`;
})

// calculation

function computeDaysSalesinInventory() {
  return (computeAverageInventoryInput() / Number(costofGoodsSold.value)) * Number(periodofMeasurement.value);
}

function computeCostofGoodsSold() {
  return (computeAverageInventoryInput() / Number(daysSalesinInventory.value)) * Number(periodofMeasurement.value);
}

function computePeriodofMeasurement() {
  return (Number(daysSalesinInventory.value) / computeAverageInventoryInput()) * Number(costofGoodsSold.value);
}

function computeAverageInventoryOutput() {
  return (Number(daysSalesinInventory.value) * Number(costofGoodsSold.value)) / Number(periodofMeasurement.value);;
}

function computeAverageInventoryInput() {
  return (Number(inventoryOpeningBalance.value) + Number(inventoryClosingBalance.value)) / 2;
}