import Table from './table.js';

const table = new Table({
  columns: ['Name', 'Email', 'Position'],
  data: [
    ['Kevin Durant', 'easymoneysniper@mail.com', 'Power Forward'],
    ['Paul Scholes', 'scholessy18@mail.com', 'Attacking Midfielder'],
    ['Lamar Jackson', 'new_era88@mail.com', 'Quarterback'],
  ],
});

const app = document.getElementById('app');
table.renderTable(app);
