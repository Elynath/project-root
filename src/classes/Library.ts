class Library {
    books: Book[];

    constructor() {
        this.books = [];
    }

    
    addBook(book: Book): void {
        this.books.push(book);
    }

    
    removeBook(id: number): void {
        this.books = this.books.filter(book => book.id !== id);
    }
}

class Library implements ILibrary {
    books: Book[];
    
    addBook(book: Book): void {
        this.books.push(book);
    }

    
    removeBook(id: number): void {
        this.books = this.books.filter(book => book.id !== id);
    }

    
    findBookById(id: number): Book | undefined {
        return this.books.find(book => book.id === id);
    }

    
    listAllBooks(): Book[] {
        return this.books;
    }
}
