# 1) What happens when we press the `Calculate ` button ?
- When inserting two numbers (num1, num2) and pressing the `Calculate` button, we currently receive an error message `Cannot POST /index.html` on the web page.
- In the Chrome Developer Tools, in the `Network tab`, we see an error message `Name: index.html --- Status: 404`.

# HTTP return codes
- <b>1** Hold on
- <b>2** Here you go
- <b>3** Go away
- <b>4** You f*cked up
- <b>5** I f*cked up

- Docs.: https://en.wikipedia.org/wiki/List_of_HTTP_status_codes
- 4** : client-side error

# 2) The problem
- from 1), we need to make our server accept post requests.
- Afterwards, we need to use the npm package `body-parser`, install with
`npm install body-parser` to process the response body.
  