const express = require('express');
const config = require('config');
const path = require('path');
const Bot = requre('./src/bot');


require('lightrun').start({
    lightrunSecret: 'a27cb17b-2874-4d83-883c-9010621a9551',
});

const app = express();
app.use(express.json({extended: true}));



const PORT = process.env.PORT || 5000;
const mongourl = process.env.MONGODB_URI; 

async function start() {
    try {
/*         await mongoose.connect( mongourl , {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }); */

        app.listen(PORT, () => console.log(`App has been started on port ${PORT}...`));
    } catch (e) {
        console.log('Server Error', e.message);
        process.exit(code = 1);
    }
}

start();