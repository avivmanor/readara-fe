import type { IBook } from "../../types/book";
import { IconButton } from "@mui/joy";
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useState } from "react";
import { addToFavorites, deleteFromFavorites } from "../../services/like.service";
import "./book.css";

export const Book = (book: IBook) => {
    // TODO: if not exists - dont show  (user is not authenticated)
    const [isLiked, setIsLiked] = useState(book.isLiked || false);
    const handleLike = () => {
        console.log("clicked");
        if (isLiked) {
            deleteFromFavorites(book.id);
            setIsLiked(false);
        } else {
            addToFavorites(book.id);
            setIsLiked(true);
        }
    }

    const hasImage = book?.imageLinks?.smallThumbnail || book?.imageLinks?.thumbnail;

    return (
        <div className="book-container">
            <h3 className="book-title">{book.title}</h3>
            <p className="book-authors">{book.authors?.join(', ')}</p>
            <div className="book-image-container">
                {hasImage ? (
                    <img 
                        src={book?.imageLinks?.smallThumbnail || book?.imageLinks?.thumbnail} 
                        alt={book.title}
                        className="book-image"
                    />
                ) : (
                    <div className="book-default-image">
                        📚<br/>No Image
                    </div>
                )}
            </div>
            {
                'isLiked' in book && (
            <IconButton onClick={handleLike}>
                {isLiked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
            </IconButton>)}
        </div>
    )
}