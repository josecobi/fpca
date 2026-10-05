/**
 * FPCA Membership Form - Google Apps Script
 *
 * SETUP:
 * 1. Update NOTIFICATION_EMAIL with your email
 * 2. Update SPREADSHEET_ID with your Google Sheet ID
 *    (The ID is in the sheet URL: docs.google.com/spreadsheets/d/SPREADSHEET_ID/edit)
 * 3. Deploy > New deployment > Web app
 */

var NOTIFICATION_EMAIL = 'jose.lopez.cobano@gmail.com'; // Current email for testing. Replace with client email.
var SPREADSHEET_ID = '1lFyMxUdPZXGGZCe9oFXSNPjsRyKF4tDmE3K8dVNWpIY'; // This is the actual spreadsheet ID. Do not change.
function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);
    var sheet = SpreadsheetApp.openById(SPREADSHEET_ID).getActiveSheet();

    var timestamp = new Date();
    var formattedDate = Utilities.formatDate(timestamp, 'America/New_York', 'yyyy-MM-dd HH:mm:ss');

    var rowData = [
      formattedDate,
      data.firstName || '',
      data.lastName || '',
      data.address || '',
      data.email || '',
      data.SubscribeNewsletter ? 'TRUE' : 'FALSE',
      data.SubscribeUpdates ? 'TRUE' : 'FALSE',
      data.SubscribeEvents ? 'TRUE' : 'FALSE',
      data.volunteering || '',
      data.referral || ''
    ];

    sheet.appendRow(rowData);
    sendNotificationEmail(data, formattedDate);

    return ContentService
      .createTextOutput(JSON.stringify({success: true}))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({success: false, error: error.toString()}))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet() {
  return ContentService
    .createTextOutput(JSON.stringify({status: 'OK'}))
    .setMimeType(ContentService.MimeType.JSON);
}

function sendNotificationEmail(data, formattedDate) {
  var spreadsheetUrl = 'https://docs.google.com/spreadsheets/d/' + SPREADSHEET_ID + '/edit';

  var body = 'New Membership Application Received\n\n';
  body += 'Submitted: ' + formattedDate + '\n\n';
  body += '--- APPLICANT INFO ---\n';
  body += 'Name: ' + (data.firstName || '') + ' ' + (data.lastName || '') + '\n';
  body += 'Address: ' + (data.address || 'Not provided') + '\n';
  body += 'Email: ' + (data.email || 'Not provided') + '\n\n';

  // Only show subscriptions they opted into
  var subscriptions = [];
  if (data.SubscribeNewsletter) subscriptions.push('Newsletter');
  if (data.SubscribeUpdates) subscriptions.push('City Updates');
  if (data.SubscribeEvents) subscriptions.push('Events');

  body += '--- SUBSCRIPTIONS ---\n';
  if (subscriptions.length > 0) {
    body += '• ' + subscriptions.join('\n• ') + '\n\n';
  } else {
    body += 'None selected\n\n';
  }

  body += '--- ADDITIONAL ---\n';
  body += 'Volunteer: ' + (data.volunteering || 'None') + '\n';
  body += 'Found FPCA: ' + (data.referral || 'Not specified') + '\n\n';
  body += '--- VIEW ALL SUBMISSIONS ---\n';
  body += spreadsheetUrl + '\n';

  GmailApp.sendEmail(
    NOTIFICATION_EMAIL,
    '[FPCA Website] New Membership Application',
    body
  );
}

function testSubmission() {
  var testData = {
    postData: {
      contents: JSON.stringify({
        firstName: 'Test',
        lastName: 'User',
        address: '123 Test St',
        email: 'test@example.com',
        SubscribeNewsletter: true,
        SubscribeUpdates: false,
        SubscribeEvents: true,
        volunteering: 'Test volunteer info',
        referral: 'Testing'
      })
    }
  };
  doPost(testData);
  Logger.log('Test complete - check sheet and email');
}
