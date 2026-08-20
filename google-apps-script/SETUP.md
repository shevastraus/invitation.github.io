# RSVP Google Apps Script setup

1. Open the Google Sheet where RSVP responses should be stored.
2. Copy the spreadsheet ID from its URL. It is the text between `/d/` and `/edit`.
3. Confirm the name of the response worksheet tab at the bottom of the Sheet. It is commonly `Form Responses 1`.
4. In the Sheet, select **Extensions → Apps Script**.
5. Replace the editor contents with the contents of `Code.gs` from this folder.
6. Replace `PASTE_YOUR_SPREADSHEET_ID_HERE` with the spreadsheet ID from step 2.
7. If necessary, change `SHEET_NAME` to the exact worksheet-tab name from step 3.
8. Select **Deploy → New deployment**.
9. Next to **Select type**, choose **Web app**.
10. Set **Execute as** to **Me**.
11. Set **Who has access** to **Anyone**.
12. Select **Deploy** and approve the requested Google permissions.
13. Copy the web-app URL ending in `/exec` and provide it for the website configuration.

Do not use the test-deployment URL ending in `/dev`; only the `/exec` URL works for public visitors.
