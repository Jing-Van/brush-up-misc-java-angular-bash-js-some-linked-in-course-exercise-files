// INSTRUCTIONS
// Write a JavaScript function that given the INPUT object returns the OUTPUT object.


var input = 
{
"department": "produce",
"categories": [
"fruit",
"vegetables"
],
"bins": [
{
"category": "fruit",
"type": "apples",
"price": 1.99,
"unit": "pound",
"quantity": 232
},
{
"category": "fruit",
"type": "bananas",
"price": 0.19,
"unit": "each",
"quantity": 112
},
{
"category": "vegetables",
"type": "carrots",
"price": 1.29,
"unit": "bag",
"quantity": 57
},
{
"category": "vegetables",
"type": "tomatoes",
"price": 0.53,
"unit": "each",
"quantity": 0
}
]
}

// output 
// display choice 


var output = {"choices": []};

input.bins.filter(item => item.quantity > 0)
          .map((item) => mapIntoOutput(item))

function mapIntoOutput(item) {
	console.log(item);
    var choice = {};

    choice["kind"] = item["type"];
    choice["priceDisplayLabel"] = item["price"] + " per " + item["unit"];
    choice["available"] = item.quantity;

    output.choices.push(choice);
}

console.log(output);

// OUTPUT
// {
// "choices": [
// {
// "kind": "apples",
// "priceDisplayLabel": "1.99 per pound",
// "available": 232
// },
// {
// "kind": "bananas",
// "priceDisplayLabel": "0.19 per each",
// "available": 112
// },
// {
// "kind": "carrots",
// "priceDisplayLabel": "1.29 per bag",
// "available": 57
// }
// ]
// }