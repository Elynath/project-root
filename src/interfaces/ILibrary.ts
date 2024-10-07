interface ILibrary {
    addBook(book: Book): void;
    removeBook(id: number): void;
    findBookById(id: number): Book | undefined;
    listAllBooks(): Book[];
}

