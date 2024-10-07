class User {
    userId: number;
    name: string;
    email: string;
    borrowedBooks: Book[];

    constructor(userId: number, name: string, email: string) {
        this.userId = userId;
        this.name = name;
        this.email = email;
        this.borrowedBooks = [];
    }

    
    borrowBook(library: Library, bookId: number): void {
        const book = library.books.find(b => b.id === bookId);
        if (book) {
            this.borrowedBooks.push(book);
            library.removeBook(bookId);
            console.log(`${this.name} kölcsönözte a következő könyvet: ${book.title}`);
        } else {
            console.log(`A könyv azonosítóval ${bookId} nem található a könyvtárban.`);
        }
    }
}