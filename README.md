# KUB-ISMIS — Kubau LGA

**Digital Secretariat & Management Information System**
Browser-only frontend prototype for a government-style local administration workspace.

> **Prototype notice:** KUB-ISMIS is a demonstration interface, not an official government website or service. It is not connected to Kubau Local Government Area, government identity systems, payment services, or authoritative records. All people, transactions, receipts, and operational records shown are illustrative sample data. Do not enter real passwords or sensitive information.

## Run the prototype

Open `login.html` directly in a modern browser. Enter any non-empty staff ID/email and password to continue to the dashboard. No server, build step, package manager, or installation is required.

The interface uses HTML, CSS, and vanilla JavaScript. Chart.js, Font Awesome, and Google Fonts are loaded from their public CDNs; an internet connection is needed for those enhanced visuals and icons. Core navigation and record screens are local files.

## Included

- Responsive dashboard shell with collapsible desktop sidebar and off-canvas mobile navigation.
- Secretariat correspondence, memo, directive, and meeting workflows.
- Department and staff directories, document library, and citizen service modules.
- Revenue, collector, expenditure, budget, project, receipt, report, and audit views.
- Search, filters, pagination, local mock-record creation/editing, status actions, modals, notifications, and dark appearance.
- Browser `localStorage` persistence for demonstration records and preferences.

## Data and security

This is a frontend-only prototype. Login is intentionally simulated; credentials are not validated or sent anywhere. Browser storage is not a secure database and should not be used for personal, financial, or confidential information. Receipt printing and downloads are illustrative only and are not proof of payment.
