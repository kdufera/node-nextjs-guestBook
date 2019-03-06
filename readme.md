
# sampleForm

Sample [next](https://github.com/zeit/next.js) app that takes advantage of the
routing capabilities. In particular, notice that the photo route can be attached to _two distinct_ components: in one case rendered as a modal, and in another case rendered independently.

![sampleForm](https://i.imgur.com/KF0KExk.gif)


# Installation

    $ npm install

# Running the app

    $ npm run dev

Challenge: Create a new Github project with NextJS and React that meets the following criteria:

1. Starts with the command `npm i && npm dev`

2. Shows a form with “name” and “message” when it runs at localhost:3000

3. When submitting form, runs a `POST` to `/api/guestbook` and resets with a success message (should show an error if things are missing).

4. A link on the homepage takes you to `/guestbook` and shows all posts that have been submitted from the previous form.

  - A link on that page exists to go back to the homepage

  - You do not need to persist that data in any database, just keep it in memory.

1. Add some UI/UX features

2. Unit tests (coverage)

3. Code linting 