const fs = require('fs');
const path = require('path');

module.exports = {
	index: (req, res) => {
        res.render('home')
    }
};