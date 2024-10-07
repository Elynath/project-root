import { Book } from /Book;
import { Library } from /Library;
import { User } from /User;

// Alkalmazás belépési pontja

// 1. Létrehozunk egy könyvtárat (Library)
const library = new Library();

// 2. Létrehozunk néhány könyvet (Book)
const book1 = new Book(1, "1984", "George Orwell", 15.99);
const book2 = new Book(2, "Brave New World", "Aldous Huxley", 12.99);
const book3 = new Book(3, "Fahrenheit 451", "Ray Bradbury", 13.99);

// 3. Könyvek hozzáadása a könyvtárhoz
library.addBook(book1);
library.addBook(book2);
library.addBook(book3);

// 4. Összes könyv kilistázása
console.log("Könyvtár tartalma:");
console.log(library.listAllBooks());

// 5. Létrehozunk egy felhasználót (User)
const user = new User(1, "John Doe", "john.doe@example.com");

// 6. A felhasználó kölcsönöz egy könyvet
console.log("\nJohn Doe kölcsönöz egy könyvet:");
user.borrowBook(library, 2); // "Brave New World" című könyv kölcsönzése

// 7. Könyvtár frissített tartalma
console.log("\nKönyvtár frissített tartalma:");
console.log(library.listAllBooks());

// 8. A felhasználó kölcsönzött könyvei
console.log("\nJohn Doe által kölcsönzött könyvek:");
console.log(user.borrowedBooks);