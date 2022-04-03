function getTotalBooksCount(books) {
/*takes in a single parameter: An array of book objects
It returns a _number_ that represents the number of book objects inside of the array
*/
let total = 0; 
return books.reduce((books) => books + 1, total);  
             
}

function getTotalAccountsCount(accounts) {
/*takes in a single parameter: An array of accounts
It returns a _number_ that represents the number of account objects inside of the array.
*/
let total = 0;
return accounts.reduce((accounts) => accounts + 1, total);

}

function getBooksBorrowedCount(books) {
/*takes in a single parameter: An array of books
It returns a _number_ that represents the number of books _that are currently checked out of the library._ 
This number can be found by looking at the first transaction object in the `borrows` array of each book.
If the transaction says the book has not been returned (i.e. `returned: false`), the book is currently being borrowed.
*/
let booksBorrowed = books.filter((book) => book.borrows.some((borrow) => borrow.returned === false))
return booksBorrowed.length;

}

function getMostCommonGenres(books) {
/*takes in a single parameter: An array of book objects
It returns an array containing five objects or fewer that represents the most common occurring genres, ordered from most common to least.
Each object in the returned array has two keys:
- The `name` key which represents the name of the genre.
- The `count` key which represents the number of times the genre occurs.
Even if there is a tie, the array should only contain no more than five objects.
*/
let popGenre = [];
  books.forEach((book) =>{
  const genreMatch = genres.find((genre) => genre.name === book.genre);
    if (genreMatch) { 
      genreMatch++
    } else { 
  const genreName = book.genre;
   popGenre.push({name, count :1});
    }
  });
 return popGenre;   
}

function getMostPopularBooks(books) {
/*takes in a single parameter: An array of book objects.
It returns an array containing five objects or fewer that represents the most popular books in the library. 
Popularity is represented by the number of times a book has been borrowed.
Each object in the returned array has two keys:
- The `name` key which represents the title of the book.
- The `count` key which represents the number of times the book has been borrowed.
Even if there is a tie, the array should only contain no more than five objects.
*/

  return books.map((book) => {
    return {name: book.title, count: book.borrows.length};
  }) 
  .sort((a,b) => (a.count < b.count ? 1 : -1))
  .slice(0, 5);
}


function getMostPopularAuthors(books, authors) {
/*takes in two parameters, in the following order:
- An array of book objects.
- An array of author objects.
It returns an array containing five objects or fewer that represents the most popular authors whose books have been checked out the most. 
Popularity is represented by finding all of the books written by the author and then adding up the number of times those books have been borrowed.
Each object in the returned array has two keys:
- The `name` key which represents the first and last name of the author.
- The `count` key which represents the number of times the author's books have been borrowed.
Even if there is a tie, the array should contain no more than five objects.
*/


}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
