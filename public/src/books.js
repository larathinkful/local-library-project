function findAuthorById(authors, id) {
 /*takes in two parameters, in the following order:
  - An array of author objects.
  - An integer ID of a single author object.
  It returns the author object that has the matching ID.
  */
  return authors.find((author) => author.id === id);

}

function findBookById(books, id) {
/*takes in two parameters, in the following order:
- An array of book objects.
- A string ID of a single book object.
It returns the book object that has the matching ID.
*/
let foundBook = books.find((book) => book.id === id);
 return foundBook;

}

function partitionBooksByBorrowedStatus(books) {
/*takes in a single parameter: an array of book objects
It returns an array with two arrays inside of it. All of the inputted books are present in either the first or second array.
The first array contains book objects that represent the books _that are currently checked out_, 
while the second array contains book objects that represent the books _that have been returned_.
You can check for the return status by looking at the first transaction object in the `borrows` array.
*/
let booksCheckedOut = books.filter((book) => book.borrows.some((borrow) => borrow.returned === false));
let booksReturned = books.filter((book) => book.borrows.every((borrow) => borrow.returned === true));
let booksArray = [[...booksCheckedOut], [...booksReturned]];
 return booksArray;
 

}

function getBorrowersForBook(book, accounts) {
/*takes in two parameters, in the following order:
- A book object.
- An array of all account objects.
It should return an array of ten or fewer account objects that represents the accounts given by the IDs in the provided book's `borrows` array. 
However, each account object should include the `returned` entry from the corresponding transaction object in the `borrows` array.
*/
return book.borrows.map((borrow) => {
   let account = accounts.find((account) => account.id === borrow.id);
   return { ...borrow, ...account };
  })
  .slice(0, 10);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
