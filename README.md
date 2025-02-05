# Examination Project

## Table of contents

-   [Setup Instructions](#setup-instructions)
-   [Assumptions](#assumptions)
-   [Implemented Features](#implemented-features)
-   [Technical Decisions](#technical-decisions)
-   [Known Problems](#known-problems)
-   [Author](#author)

## Setup Instructions

-   Clone repo
-   Run `npm i`
-   Run `npm run dev`

## Assumptions

-   I am assuming that the messages I get from the DB are always with the newest messages last and that they are in order
-   The dev server is on port 3000

## Implemented Features

-   [x] Initial load
-   [x] Fetch messages from API
-   [x] Show loading screen
-   [x] Handle error on fetch
-   [] Show a more useful message on error
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
-   Stay with tailwind v3 because of time limit
-   Since all the messages are from the same number, no chat separation was made

## Known Problems

-   [] Need to add logic to handle local time
-   [] Fix date footer inside messages to have leading 0s
-   [] Implement better queries
-   [] Add animation on show to 'jump to bottom button'

## Author

-   Linkedin - [Josue Marquez](https://www.linkedin.com/in/josuemarquez/)
