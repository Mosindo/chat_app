require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

//database
mongoose.connect(process.env.MONGO_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true
}, (err) => {
    if (err) {
        console.error(err);
    }
});

app.use(express.static('public'));

app.use(bodyParser.json())
app.use(cors());

//server
app.listen(process.env.PORT, () => {
    console.log('On ecoute sur le port 4000')
})