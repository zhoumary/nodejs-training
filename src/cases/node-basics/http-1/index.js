const { Random } = require('mockjs');

/*
	
请使用http模块编写一个http server

这个server需要在路径/add下面接受json格式的post请求

请求格式如下

{
    "v1": 123,
    "v2": 321
}

响应内容如下

{
    "result": 444
}

本用例没有断言, 请自行编写并测试


*/

const port = Random.integer(30000, 40000);
const http = require('http');

// http - server
const app = http.createServer((request, response) => {
    switch (request.url) { // dispatch
        case '/add': {
            let d = '';
            request.on('data', data => { // buffer
                d += data.toString();
            });
            request.on('end', () => {
                // parse request body & process here
                response.writeHead(200, { 'Content-Type': 'application/json' });
                const reqBody = JSON.parse(d);
                response.end(JSON.stringify({
                    result: reqBody.v1 + reqBody.v2
                }));
            });
            break;
        }

        default:
            response.writeHead(404, { 'Content-Type': 'text/plain' });
            response.end('404');
            break;
    }
}).listen(port, () => {

    // http - client
    const opt = { method: 'POST', headers: { 'Content-Type': 'application/json' } };

    const req = http.request(`http://localhost:${port}/add`, opt, (res) => {
        let body = '';
        res.on('data', data => body += data.toString());
        res.on('end', () => {
            app.close();
        });
    });

    req.write(Buffer.from(JSON.stringify({
        'v1': 123,
        'v2': 321
    })));

    req.end();
});



module.exports = null;
