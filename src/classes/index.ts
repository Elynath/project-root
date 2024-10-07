import { Book } from /Book;
import { Library } from /Library;
import { User } from /User;




const library = new Library();


const book1 = new Book(1, "1984", "George Orwell", 15.99);
const book2 = new Book(2, "Brave New World", "Aldous Huxley", 12.99);
const book3 = new Book(3, "Fahrenheit 451", "Ray Bradbury", 13.99);


library.addBook(book1);
library.addBook(book2);
library.addBook(book3);


console.log("Könyvtár tartalma:");
console.log(library.listAllBooks());


const user = new User(1, "John Doe", "john.doe@example.com");


console.log("\nJohn Doe kölcsönöz egy könyvet:");
user.borrowBook(library, 2); 


console.log("\nKönyvtár frissített tartalma:");
console.log(library.listAllBooks());


console.log("\nJohn Doe által kölcsönzött könyvek:");
console.log(user.borrowedBooks);
