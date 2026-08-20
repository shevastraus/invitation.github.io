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
  const respondentName = String(parameters.respondentName || '').trim();
  const attendance = String(parameters.attendance || '').trim();
  let guestCount = String(parameters.guestCount || '').trim();
  let additionalGuestNames = String(parameters.additionalGuestNames || '').trim();
  const message = String(parameters.message || '').trim();

  if (!respondentName) {
    throw new Error('The respondent name is required.');
  }

  if (!['Yes', 'No'].includes(attendance)) {
    throw new Error('A valid attendance response is required.');
  }

  if (attendance === 'Yes') {
    if (!/^\d+$/.test(guestCount) || Number(guestCount) < 1) {
      throw new Error('Guest count must be a whole number greater than zero.');
    }

    if (Number(guestCount) > 1 && !additionalGuestNames) {
      throw new Error('Additional guest names are required when more than one person will attend.');
    }
  } else {
    guestCount = '0';
    additionalGuestNames = '';
  }

  const guestCountNumber = Number(guestCount);
  const guestNames = [respondentName, additionalGuestNames]
    .filter(Boolean)
    .join('\n');

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
          window.top.postMessage(${payload}, ${origin});
        <\/script>
      </body>
    </html>`;

  return HtmlService
    .createHtmlOutput(html)
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}
