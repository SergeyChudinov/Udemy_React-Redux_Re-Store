function booksRequested() {
  return {
    type: 'FETCH_BOOKS_REQUEST'
  }
}

function booksLoaded(newBooks) {
  return {
    type: 'FETCH_BOOKS_SUCCESS',
		payload: newBooks
  }
}

function booksError(error) {
  return {
    type: 'FETCH_BOOKS_FAILURE',
    payload: error 
  }
}

function bookAddedToCart(bookId) {
  return {
    type: 'BOOK_ADDED_TO_CART',
    payload: bookId
  };
};

export const bookRemovedFromCart = (bookId) => {
  return {
    type: 'BOOK_REMOVED_FROM_CART',
    payload: bookId
  };
};

export const allBooksRemovedFromCart = (bookId) => {
  return {
    type: 'ALL_BOOKS_REMOVED_FROM_CART',
    payload: bookId
  };
};

const fetchBooks = (bookstoreService, dispatch) => () => {
  dispatch(booksRequested())
  bookstoreService.getBooks()
    .then((data) => dispatch(booksLoaded(data)))
    .catch((error) => dispatch(booksError(error)))
}

export {
	fetchBooks,
  bookAddedToCart
}