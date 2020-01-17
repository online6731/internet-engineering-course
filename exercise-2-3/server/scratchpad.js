const rp = require('request-promise');

let base = ['http://ms.whoknows.ir', 'http://localhost:30001'][1]

rp.post(base + '/login', { json: { username: '1', password: '1' } })
    .then(res => {
        res;
        token = res.data;
    })
    .catch(err => {
        err;
    })
