const express = require('express');
const router = express.Router();
const ejs = require('ejs');

async function renderCommonComponents() {
  try {
    const header = await ejs.renderFile('views/header.ejs', {});
    const sidebar = await ejs.renderFile('views/sidebar.ejs', {});
    const footer = await ejs.renderFile('views/footer.ejs', {});
    return { header, sidebar, footer };
  } catch (error) {
    console.error('Error rendering common components:', error);
    return { header: '', sidebar: '', footer: '' };
  }
}

async function renderPage(res, title, contentPath) {
  try {
    const { header, sidebar, footer } = await renderCommonComponents();
    const content = await ejs.renderFile(contentPath, {});
    res.render('layout', {
      title,
      header,
      content,
      sidebar,
      footer
    });
  } catch (error) {
    console.error('Error rendering page:', error);
    res.status(500).send('Error rendering page');
  }
}

router.get('/', async (req, res) => {
  await renderPage(res, 'Home', 'views/content/home.ejs');
});

router.get('/about', async (req, res) => {
  await renderPage(res, 'About', 'views/content/about.ejs');
});

router.get('/contact', async (req, res) => {
  await renderPage(res, 'Contact', 'views/content/contact.ejs');
});


module.exports = router;