

interface Book {
    id: number;
    name: string;
    author: string;
}

const fetchBooks = async (): Promise<Book[]> => {
    const responce = await fetch("https://simple-books-api.glitch.me/books/");
    if (!responce.ok) {
        throw new Error("Failed to fetch data");
    }
    return responce.json();
};


const ServerPage = async () => {
    const books = await fetchBooks();

    return (
        <div className="min-h-screen bg-gray-100">
            <nav className="w-full p-4 bg-blue-600 text-white">
              <h1 className="text-2xl font-bold text-center">Server-Side Data Fetching</h1>
            </nav>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
                {books.map((book) => (
                    <div
                    key={book.id}
                    className="bg-white rounded shadow p-4 flex flex-col items-center"
                    >
                        <h2 className="text-lg font-semibold">{book.name}</h2>
                        <p className="text-gray-500">Author {book.author}</p>
                    </div>
                ))}

            </div>

        </div>
    );
};




export default ServerPage;
