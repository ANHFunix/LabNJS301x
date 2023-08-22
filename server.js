const http = require('http');
const server = http.createServer((req, res) => {
    const url = req.url;
    if (url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write(`
        <html>
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
        </head>
        <body>
            <form method="POST" action="/create-user" >
            <input type="text" name="user" /><button>send</button>
            </form>
        </body>
        </html>`);
        res.write('<html>');
        return res.end();
    }
    if (url === '/users') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write(`
        <html>
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
        </head>
        <body>
        <ul>
        <li>user 1</li>
        <li>user 2</li>
       </ul>
        </body>
        </html>`
        );
        res.write('<html>');
        return res.end();
    }
    if (url === '/create-user') {
        const body = []
        req.on('data', (chunk) => {
            body.push(chunk);
        })
        req.on('end', () => {
            const bodyString = Buffer.concat(body).toString();
            console.log(bodyString);
        })
        res.statusCode = 302;
        res.setHeader('Location', '/');
        res.end()
    }
})

server.listen(3000, () => {
    console.log('Server is listening on port 3000');
})