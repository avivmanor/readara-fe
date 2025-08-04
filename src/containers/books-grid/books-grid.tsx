import { Book } from "../../components/book/book"
import { useBooks } from "../../services/books.service";
import { useBookSearchStore } from "../../store/bookStore";
import "./books-grid.css";

export const BooksGrid = () => {
    const { searchTerm } = useBookSearchStore();
    const { data: books, isLoading: isLoadingBooks, isError: isErrorBooks} = useBooks(searchTerm);

    const renderContent = () => {
        if (isLoadingBooks) {
            return <div>Loading books...</div>;
        }

        if (isErrorBooks) {
            return <div>Error loading books. Please try again.</div>;
        }

        if (books && books.length === 0) {
            return <div>No books found.</div>;
        }

        if (!books) {
            return <div>search to find books</div>;
        }

        return (
            <div className="books-grid">
                {books.map((book) => (
                    <Book key={book.id} {...book} />
                ))}
            </div>
        );
    };

    return (
        <div className="books-grid-container">
            {renderContent()}
        </div>
    )
} 