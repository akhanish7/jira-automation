const express = require('express');
const app = express();
const jiraRoutes = require('./routes/jiraRoutes');

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.json());

app.use('/jira', jiraRoutes);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
