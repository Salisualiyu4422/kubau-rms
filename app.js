const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('.main-nav');

if (menuToggle && mainNav) {
  menuToggle.addEventListener('click', () => {
    const isOpen = mainNav.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
    menuToggle.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
  });
}

const complaintForm = document.querySelector('#complaint-form');
const complaintStoreKey = 'klgCitizenReports';

function getCitizenReports() {
  return JSON.parse(localStorage.getItem(complaintStoreKey) || '[]');
}

function renderCitizenReports() {
  const body = document.querySelector('#admin-complaints-body');
  if (!body) return;
  const reports = getCitizenReports();
  body.insertAdjacentHTML('afterbegin', reports.map((report) =>
    `<tr><td class="ref-cell">${escapeHTML(report.id)}</td><td>${escapeHTML(report.area)}</td><td>${escapeHTML(report.name)}</td><td>${escapeHTML(report.category)}: ${escapeHTML(report.message)}</td><td>${escapeHTML(report.date)}</td><td><span class="status-badge status-pending">New report</span></td></tr>`
  ).join(''));
}

if (complaintForm) {
  complaintForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const result = document.querySelector('#complaint-result');
    const formData = new FormData(complaintForm);
    const id = `CMP-${new Date().getFullYear()}-${Math.floor(10000 + Math.random() * 90000)}`;
    const report = {
      id,
      name: formData.get('name').toString().trim(),
      category: formData.get('category').toString(),
      area: formData.get('area').toString().trim(),
      message: formData.get('message').toString().trim(),
      date: new Intl.DateTimeFormat('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }).format(new Date()),
      status: 'New report',
    };
    const reports = getCitizenReports();
    reports.unshift(report);
    localStorage.setItem(complaintStoreKey, JSON.stringify(reports));
    result.classList.remove('error');
    result.innerHTML = `<strong>Report recorded in this browser: ${id}</strong>This is a local demonstration record, not sent to the council. Keep the reference to try the tracking form in this browser.`;
    complaintForm.reset();
  });
}

const trackForm = document.querySelector('#track-form');
if (trackForm) {
  trackForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const result = document.querySelector('#track-result');
    const complaintId = new FormData(trackForm).get('complaintId').toString().trim().toUpperCase();
    const report = getCitizenReports().find((entry) => entry.id.toUpperCase() === complaintId);
    if (!report) {
      result.classList.add('error');
      result.textContent = 'No matching report is saved in this browser. Council complaint records are not connected.';
      return;
    }
    result.classList.remove('error');
    result.innerHTML = `<strong>${escapeHTML(report.status)} · ${escapeHTML(report.id)}</strong>${escapeHTML(report.category)} reported for ${escapeHTML(report.area)} on ${escapeHTML(report.date)}. This is a local demonstration record.`;
  });
}

const receiptForm = document.querySelector('#receipt-form');
const receiptExamples = {
  'KLG-2026-004281': {
    result: 'match',
    receipt: 'KLG-2026-004281',
    revenue: 'Market levy',
    area: 'Anchau Market',
    amount: '₦25,000',
    date: '28 Sep 2026',
  },
  'KLG-2026-009999': { result: 'not-found', receipt: 'KLG-2026-009999' },
};

function showReceiptResult(receiptId) {
  const result = document.querySelector('#receipt-result');
  if (!result) return;
  result.classList.remove('error');
  const sample = receiptExamples[receiptId.trim().toUpperCase()];
  if (!sample) {
    result.classList.add('error');
    result.textContent = 'No matching example record. This lookup cannot confirm authenticity because official council records are not connected.';
    return;
  }
  if (sample.result === 'not-found') {
    result.classList.add('error');
    result.innerHTML = `<strong>No example record found</strong>Receipt ${sample.receipt} is not in the sample list. This is not an official verification result.`;
    return;
  }
  result.innerHTML = `<strong>Example record found — not an official verification</strong><span class="receipt-result-details">Receipt: ${sample.receipt}<br>Revenue: ${sample.revenue}<br>Area: ${sample.area}<br>Amount: ${sample.amount}<br>Example date: ${sample.date}</span>`;
}

if (receiptForm) {
  receiptForm.addEventListener('submit', (event) => {
    event.preventDefault();
    showReceiptResult(new FormData(receiptForm).get('receiptId').toString());
  });
}

document.querySelectorAll('[data-receipt-example]').forEach((button) => {
  button.addEventListener('click', () => {
    const input = document.querySelector('#receipt-form [name="receiptId"]');
    input.value = button.dataset.receiptExample;
    showReceiptResult(input.value);
  });
});

const collectorStoreKey = 'klgCollectorCollections';

function getCollectorRecords() {
  return JSON.parse(localStorage.getItem(collectorStoreKey) || '[]');
}

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, (character) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
  })[character]);
}

renderCitizenReports();

function renderCollectorRecords() {
  const records = getCollectorRecords();
  const transactionBody = document.querySelector('#collector-transactions-body');
  const receiptBody = document.querySelector('#collector-receipts-body');
  const recentBody = document.querySelector('#collector-recent-body');
  const adminBody = document.querySelector('#admin-transactions-body');
  const formatAmount = (amount) => `₦${Number(amount).toLocaleString('en-NG')}`;

  if (transactionBody) {
    transactionBody.insertAdjacentHTML('afterbegin', records.map((record) =>
      `<tr><td class="ref-cell">${escapeHTML(record.transactionId)}</td><td>${escapeHTML(record.area)}</td><td>${escapeHTML(record.type)}</td><td>${escapeHTML(record.method)}</td><td>${escapeHTML(record.date)}</td><td>${formatAmount(record.amount)}</td><td><span class="status-badge">Recorded</span></td></tr>`
    ).join(''));
  }
  if (receiptBody) {
    receiptBody.insertAdjacentHTML('afterbegin', records.map((record) =>
      `<tr><td class="ref-cell">${escapeHTML(record.receiptId)}</td><td>${escapeHTML(record.transactionId)}</td><td>${escapeHTML(record.area)}</td><td>${escapeHTML(record.type)}</td><td>${escapeHTML(record.date)}</td><td>${formatAmount(record.amount)}</td><td><span class="status-badge">Browser entry</span></td></tr>`
    ).join(''));
  }
  if (recentBody) {
    recentBody.insertAdjacentHTML('afterbegin', records.slice(0, 3).map((record) =>
      `<tr><td class="ref-cell">${escapeHTML(record.transactionId)}</td><td>${escapeHTML(record.type)}</td><td>${escapeHTML(record.date)}</td><td>${formatAmount(record.amount)}</td><td><span class="status-badge">Recorded</span></td></tr>`
    ).join(''));
  }
  if (adminBody) {
    adminBody.insertAdjacentHTML('afterbegin', records.map((record) =>
      `<tr><td class="ref-cell">${escapeHTML(record.transactionId)}</td><td>${escapeHTML(record.area)}</td><td>${escapeHTML(record.type)}</td><td>${escapeHTML(record.method)}</td><td>${escapeHTML(record.date)}</td><td>${formatAmount(record.amount)}</td><td><span class="status-badge">Browser entry</span></td></tr>`
    ).join(''));
  }
  updateCollectorTotals(records);
}

function updateCollectorTotals(records) {
  const formatAmount = (amount) => `₦${Number(amount).toLocaleString('en-NG')}`;
  const addedTotal = records.reduce((sum, record) => sum + Number(record.amount), 0);
  const dailyTotal = 340000 + addedTotal;
  const monthlyTotal = 3600000 + addedTotal;
  const dailyProgress = Math.min(100, Math.round((dailyTotal / 500000) * 100));
  const monthlyProgress = Math.min(100, Math.round((monthlyTotal / 5000000) * 100));
  const values = {
    'collector-today-total': formatAmount(dailyTotal),
    'collector-kpi-total': formatAmount(dailyTotal),
    'collector-kpi-count': String(8 + records.length),
    'collector-kpi-transactions': String(8 + records.length),
    'collector-kpi-receipts': String(8 + records.length),
    'collector-daily-progress': `${dailyProgress}%`,
    'collector-kpi-month-progress': `${monthlyProgress}%`,
    'collector-kpi-month-total': `${formatAmount(monthlyTotal)} of ₦5,000,000`,
    'target-daily-collected': formatAmount(dailyTotal),
    'target-daily-progress': `${dailyProgress}% achieved`,
    'target-daily-remaining': `${formatAmount(Math.max(0, 500000 - dailyTotal))} remaining`,
    'target-month-collected': formatAmount(monthlyTotal),
    'target-month-progress': `${monthlyProgress}% achieved`,
    'target-month-remaining': `${formatAmount(Math.max(0, 5000000 - monthlyTotal))} remaining`,
  };
  Object.entries(values).forEach(([id, value]) => {
    const element = document.querySelector(`#${id}`);
    if (element) element.textContent = value;
  });
  const progressBars = [
    ['target-daily-bar', dailyProgress],
    ['target-month-bar', monthlyProgress],
  ];
  progressBars.forEach(([id, progress]) => {
    const bar = document.querySelector(`#${id}`);
    if (bar) bar.style.width = `${progress}%`;
  });
  const ring = document.querySelector('#collector-progress-ring');
  if (ring) {
    ring.style.background = `radial-gradient(closest-side,#1d4969 82%,transparent 84%),conic-gradient(#76c2a5 0 ${dailyProgress}%,rgba(255,255,255,.18) ${dailyProgress}%)`;
  }
}

const collectionForm = document.querySelector('#collection-form');
if (collectionForm) {
  collectionForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(collectionForm);
    const year = new Date().getFullYear();
    const suffix = `${Date.now().toString().slice(-5)}`;
    const record = {
      transactionId: `KLG-TX-${year}-${suffix}`,
      receiptId: `KLG-${year}-${suffix}`,
      type: formData.get('type').toString(),
      amount: Number(formData.get('amount')),
      area: formData.get('area').toString().trim(),
      method: formData.get('method').toString(),
      date: new Intl.DateTimeFormat('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }).format(new Date()),
    };
    const records = getCollectorRecords();
    records.unshift(record);
    localStorage.setItem(collectorStoreKey, JSON.stringify(records));
    const result = document.querySelector('#collection-result');
    result.classList.remove('error');
    result.innerHTML = `<strong>Collection saved in this browser.</strong>Transaction reference: ${record.transactionId}<br>Sample receipt reference: ${record.receiptId}. This is not an official receipt.`;
    collectionForm.reset();
  });
}

renderCollectorRecords();

function attachTableSearch(inputId, bodyId) {
  const input = document.querySelector(`#${inputId}`);
  const body = document.querySelector(`#${bodyId}`);
  if (!input || !body) return;
  input.addEventListener('input', () => {
    const query = input.value.trim().toLocaleLowerCase();
    body.querySelectorAll('tr').forEach((row) => {
      row.hidden = !row.textContent.toLocaleLowerCase().includes(query);
    });
  });
}

attachTableSearch('transaction-search', 'admin-transactions-body');
attachTableSearch('collector-search', 'collector-transactions-body');
attachTableSearch('complaint-search', 'admin-complaints-body');
