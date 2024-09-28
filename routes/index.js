const express = require('express');
const router = express.Router();
const ejs = require('ejs');

router.get('/', async (req, res) => {
  const content = await ejs.renderFile('views/content/home.ejs', {});
  res.render('layout', {
    title: 'Home',
    content: content
  });
});

router.get('/about', async (req, res) => {
  const content = await ejs.renderFile('views/content/about.ejs', {});
  res.render('layout', {
    title: 'About',
    content: content
  });
});

router.get('/contact', async (req, res) => {
  const content = await ejs.renderFile('views/content/contact.ejs', {});
  res.render('layout', {
    title: 'Contact',
    content: content
  });
});

module.exports = router;