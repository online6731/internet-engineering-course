express = require('express');
cors = require('cors');
morgan = require('morgan')

User = require('./models/user');
Log = require('./models/log');

app = express();
app.use(express.json());
app.use(morgan());
app.use(cors());

port = 5001;
uri = 'mongodb://root:jHNsog5qKaqBmN8JHlviQDkA@s9.liara.ir:32891/net?authSource=admin&replicaSet=rs0';

User({ username: '1', password: '1' }).save();

app.post('/login', (req, res) => {

    User.find({ username: req.body.username })
        .exec()
        .then((users) => {

            if (users && users.length == 0) {
                res.json({ data: 'نام کاربری اشتباه است' });
            }
            else if (req.body.password != users[0].password) {

                Log({ content: 'یکی خواست وارد بشه رمز واشتبا زد' }).save((err, log) => {
                    console.log(log.content);
                });

                res.json({ data: 'رمز عبور اشتباه است' });

            }
            else {
                res.json({ data: 'خوش آمدید' });
            }
        })
        .catch(err => console.log(err));
});

mongoose.connect(uri, {
    autoReconnect: true
});

mongoose.connection.on('connected', function () {
    console.log(`Mongoose default connection is open to ${uri}`);
});

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
}); // starts the server on specified port

module.exports = app;