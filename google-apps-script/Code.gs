const SPREADSHEET_ID = '1SFOCh8OpZaKZPiRBAhbZsWUJqrwFAzw6VaF6V_FD4W0';
const SHEET_NAME = 'Form Responses 1';
const WEBSITE_ORIGIN = 'https://shevastraus.com';

function doGet() {
  return HtmlService.createHtmlOutput('RSVP endpoint is running.');
}

function doPost(event) {
  try {
    const response = parseResponse_(event.parameter);
    appendResponse_(response);
    return messagePage_('rsvp-success');
  } catch (error) {
    console.error(error);
    return messagePage_('rsvp-error');
  }
}

function parseResponse_(parameters) {
  const attendance = String(parameters.attendance || '').trim();
  const guestCount = String(parameters.guestCount || '').trim();
  const guestNames = String(parameters.guestNames || '').trim();
  const message = String(parameters.message || '').trim();

  if (!['Yes', 'No'].includes(attendance)) {
    throw new Error('A valid attendance response is required.');
  }

  if (!/^\d+$/.test(guestCount)) {
    throw new Error('Guest count must be a whole number.');
  }

  const guestCountNumber = Number(guestCount);

  if (guestCountNumber > 0 && !guestNames) {
    throw new Error('Guest names are required when the guest count is greater than zero.');
  }

  return {
    attendance,
    guestCount: guestCountNumber,
    guestNames,
    message,
  };
}

function appendResponse_(response) {
  const spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
  const sheet = spreadsheet.getSheetByName(SHEET_NAME);

  if (!sheet) {
    throw new Error(`Sheet tab not found: ${SHEET_NAME}`);
  }

  const lock = LockService.getScriptLock();
  lock.waitLock(30000);

  try {
    sheet.appendRow([
      new Date(),
      response.attendance,
      response.guestCount,
      response.guestNames,
      response.message,
    ]);
  } finally {
    lock.releaseLock();
  }
}

function messagePage_(type) {
  const payload = JSON.stringify({ type });
  const origin = JSON.stringify(WEBSITE_ORIGIN);
  const html = `<!doctype html>
    <html>
      <body>
        <script>
          window.parent.postMessage(${payload}, ${origin});
        <\/script>
      </body>
    </html>`;

  return HtmlService
    .createHtmlOutput(html)
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}
