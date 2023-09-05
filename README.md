# Ontheboard Text Editor | ╰( ⁰ ਊ ⁰ )━☆ﾟ.*･｡ﾟ
This application is a single page text editor that can run on your browser. Additionally, the user has the option to `install` this application so that they can access it from their desktop offline. To get this running, I have utilized `IndexedDB` database for getting and storing data, and a `idb` as a wrapper around this `IndexedDB` API.

<img width="795" alt="Screen Shot 2023-09-04 at 5 21 57 PM" src="https://github.com/byronontheboard/text-editor/assets/127366720/f1a09956-adf5-4ebc-8411-41c4d199ed86">

----

## Acceptance Criteria

### ***GIVEN*** a text editor web application:
***WHEN*** I open my application in my editor,
- [x] ***THEN*** I should see a client server folder structure.

***WHEN*** I run `npm run start` from the root directory,
- [x] ***THEN*** I find that my application should start up the backend and serve the client.

***WHEN*** I run the text editor application from my terminal,
- [x] ***THEN*** I find that my JavaScript files have been bundled using webpack.

***WHEN*** I run my webpack plugins,
- [x] ***THEN*** I find that I have a generated HTML file, service worker, and a manifest file.

***WHEN*** I use next-gen JavaScript in my application,
- [x] ***THEN*** I find that the text editor still functions in the browser without errors.

***WHEN*** I open the text editor,
- [x] ***THEN*** I find that IndexedDB has immediately created a database storage.

***WHEN*** I enter content and subsequently click off of the DOM window,
- [x] ***THEN*** I find that the content in the text editor has been saved with IndexedDB.

***WHEN*** I reopen the text editor after closing it,
- [x] ***THEN*** I find that the content in the text editor has been retrieved from our IndexedDB.

***WHEN*** I click on the Install button,
- [x] ***THEN*** I download my web application as an icon on my desktop.

***WHEN*** I load my web application,
- [x] ***THEN*** I should have a registered service worker using workbox.

***WHEN*** I register a service worker,
- [x] ***THEN*** I should have my static assets pre cached upon loading along with subsequent pages and static assets.

***WHEN*** I deploy to Heroku,
- [x] ***THEN*** I should have proper build scripts for a webpack application.
