const mongoose = require('mongoose');

mongoose.connect(
  ' mongodb+srv://danishabbas:kazmi12345@eventextractor.5h9okqe.mongodb.net/',
  { useNewUrlParser: true, useUnifiedTopology: true }
)
.then(() => console.log('MongoDB Atlas Connected'))
.catch(err => console.log('Error:', err));