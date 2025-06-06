const connect = require("connect");
const url = require("url");

function calculate(req, res) {
    const queryObject = url.parse(req.url, true).query;
    const method = queryObject.method;
    const x = parseFloat(queryObject.x);
    const y = parseFloat(queryObject.y);

    let result;
    let symbol;

    switch (method) {
        case "add":
            result = x + y;
            symbol = "+";
            break;
        case "subtract":
            result = x - y;
            symbol = "-";
            break;
        case "multiply":
            result = x * y;
            symbol = "*";
            break;
        case "divide":
            if (y === 0) {
                res.end("Error: Division by zero");
                return;
            }
            result = x / y;
            symbol = "/";
            break;
        default:
            res.end("Error: Invalid method");
            return;
    }

    res.end(`${x} ${symbol} ${y} = ${result}`);
}

const app = connect();

app.use("/lab2", calculate);

app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});
