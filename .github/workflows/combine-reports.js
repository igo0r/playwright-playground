// combine-reports.js
const fs = require('fs');

const reports = ['results/test-results-1.json', 'results/test-results-2.json'];
const combinedReport = [];

reports.forEach(reportPath => {
  const data = JSON.parse(fs.readFileSync(reportPath, 'utf-8'));
  combinedReport.push(...data.suites);
});

fs.writeFileSync('results/combined-report.json', JSON.stringify({ suites: combinedReport }, null, 2));
console.log('Combined report created: results/combined-report.json');
