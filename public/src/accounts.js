function findAccountById(accounts, id) {
/*takes in two parameters, in the following order:
- An array of account objects.
- A string ID of a single account object.
It returns the account object that has the matching ID.
*/
  
return accounts.find((account) => account.id === id);
}

function sortAccountsByLastName(accounts) {
/*takes in a single parameter: an array of account objects.
It returns a sorted array of the provided account objects. The objects are sorted alphabetically by last name.
*/
accounts.sort((accountA, accountB) => accountA.name.last.toLowerCase() > accountB.name.last.toLowerCase() ? 1 : -1);
              return accounts;
  
}

function getTotalNumberOfBorrows(account, books) {
/*takes in two parameters, in the following order:
- An account object.
- An array of all book objects.
It returns a _number_ that represents the number of times the account's ID appears in any book's `borrows` array.
*/
const accountId = account.id;
let total = 0; 
books.forEach(book => book.borrows.forEach(borrow => accountId === borrow.id && total++));
  return total;
}

function getBooksPossessedByAccount(account, books, authors) {
/*takes in three parameters, in the following order:
- An account object.
- An array of all book objects.
- An array of all author objects.
It returns an array of book objects, including author information, that represents all books _currently checked out_ by the given account. 
Look carefully at the object below, as it's not just the book object; the author object is nested inside of it.
  {
      id: "5f447132320b4bc16f950076",
      title: "est voluptate nisi",
      genre: "Classics",
      authorId: 12,
      author: {
        id: 12,
        name: {
          first: "Chrystal",
          last: "Lester",
        },
  */
 let borrowedBooks = [];
    books.forEach(book=>{
      if (book.borrows.find(item=>item.id === account.id && !item.returned)) {
        borrowedBooks.push(book);
      }
    });
    borrowedBooks.forEach(book=>{
      const authorVar = authors.find(person => person.id === book.authorId);
      book['author'] = authorVar;
    });
    return borrowedBooks;
  

}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
