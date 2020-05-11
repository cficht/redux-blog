# Redux Blog

Create all the redux state management for a blog.

# --------------------

## Rubric
* 3 points for actions
  * 1 point for each action
  * 0.5 points for each test
* 4 points for reducers
  * 1 points for each case
  * 1 point for each test
* 3 points for selectors
  * 1 point for each selector
  * 0.5 points for each test

# --------------------

## actions
- [X] - postActions
  * [X] - posts have an title and body
  * [X] - you can create a post
  * [X] - you can delete a post
  * [X] - BONUS: you can update a post by passing an id and new body
- [X] - postActions.test
- [] - commentActions (STRETCH)
  * [] - create an action to create a comment for a post (by post index)
  * [] - create an action to delete a comment for a post (by post index and comment index)

## reducers
- [] - postReducer
  * [X] - store an array of posts
  * [X] - handle create a post
  * [X] - handle delete a post
  * [] - BONUS: handle update a post by index
- [] - postReducer.test
- [] - commentReducer (STRETCH)
  * [] - store comments for each post (create an object where the key is a posts index) and the value is an array of comments
  * [] - handle create a comment
  * [] - handle delete a comment
  * [] - delete post should also delete all comments

## selectors
- [X] - postSelectors
  * [X] - get all posts
  * [X] - get a post by index
- [] - postSelectors.test
- [] - commentSelectors (STRETCH)
  * [] - get all comments by post

# --------------------

## Steps
- create postReducer
- postActions title and body
- postActions create a post
- postActions.test
- postReducer.test
- postSelectors

- delete a post action
- handle delete a post