class Book {
  constructor(title, author, rating){
    this.title = title;
    this.author = author;
    this.rating = rating;
  }
  
  isPopular(){
    return this.rating >= 80 
      ? `"${this.title}" is a popular book` 
      : `"${this.title}" is not a popular book`;
  }
  
  static showAllBooks(library){
    library.sort((a,b) => b.rating - a.rating);
  
    for(let book of library){
      console.log(`Title: ${book.title}, Author: ${book.author}, Rating: ${book.rating}`);
      console.log(book.isPopular());
      console.log('-----------------');
    }
  }
} 

const library = [
 new Book('Sapiens', 'Harari', 89),
 new Book('Dragons', 'Alex', 49),
 new Book('Trains', 'John', 79),
 new Book('War', 'Hill', 80),
 new Book('Habit', 'James', 80),
]

Book.showAllBooks(library);