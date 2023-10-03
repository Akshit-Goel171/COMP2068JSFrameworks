// Akshit 200520836

const connect = require('connect');
const url = require('url');


// calculate function 
function calculate(method, x, y){
    let result;
    switch(method){
        // addition
        case "add":
            result = x + y;
            return `${x} + ${y} = ${result}`

        // subtraction    
        case "subtract":
            result = x - y;
            return `${x} - ${y} = ${result}`
        
        // division
        case "divide":
            result = x / y;
            return `${x} / ${y} = ${result}`

        // multiplication    
        case "multiply":
            result = x * y;
            return `${x} * ${y} = ${result}`  
            
        default:
            return "Invalid choice. Choose between add, subtract, divide, multiply ";
    }
}


// getting request 
const app = connect();

app.use((req, res) => {
  const query = url.parse(req.url, true).query;
  const method = query.method;
  const x = parseFloat(query.x);
  const y = parseFloat(query.y);

    // implementing method
  const resultMessage = calculate(method, x, y);
  res.end(resultMessage);
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});







