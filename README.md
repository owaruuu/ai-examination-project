# Examination Project

## Table of contents

-   [Setup Instructions](#setup-instructions)
-   [Assumptions](#assumptions)
-   [Implemented Features](#implemented-features)
-   [Technical Decisions](#technical-decisions)
-   [Known Problems](#known-problems)
-   [Areas for Improvement](#areas-for-improvement)
-   [Author](#author)

## Setup Instructions

-   Made with Node v20.18.0 and Npm v11.1.0

*   Clone repo
*   Run `npm i`
*   Add `NEXT_PUBLIC_BASE_URL=http://localhost:3000` to a .env.local file for testing
*   Run `npm run dev`
*   Go To http://localhost:3000/messages

## Assumptions

-   I am assuming that the messages I get from the DB are always with the newest messages last and that they are in order
-   The dev server is on port 3000

## Implemented Features

-   [x] Initial load
-   [x] Fetch messages from API
-   [x] Show loading screen
-   [x] Handle error on fetch
-   [ ] Show a more useful message on error
-   [x] Show list of messages
-   [x] Sticky jump to bottom button
-   [x] Jump to bottom button function
-   [x] Jump to bottom on load
-   [x] Separate messages by date
-   [x] Sticky date headers
-   [x] Add message user name
-   [x] Separate message between user and bot
-   [x] Show timestamp in messages
-   [x] Prettier scroll bar

## Technical Decisions

-   When calculating dates always use UTC dates
-   Show dates and timestamps in local time zone
-   Stay with tailwind v3 because of time limit
-   Since all the messages are from the same number, no chat separation was made

## Known Problems

-   [ ] Need to add logic to handle local time
-   [x] Fix date footer inside messages to have leading 0s
-   [x] Fix bug when showing date dividers, it is showing 'yesterday' two times in a row
-   [x] Fix the bug with 'this week' since it is just calculating 7 days difference but not if it is inside the week

## Areas for Improvement

-   Implement a redirect or move the messages to the home page
-   Hide floating divider after a while
-   Add onClick to the divider to jump to that 'date'
-   Separate the messages into conversations if the message has 'reply_to_id: null'
-   Implement better queries
-   Add animation on show to 'jump to bottom button'

## Author

-   Linkedin - [Josue Marquez](https://www.linkedin.com/in/josuemarquez/)
