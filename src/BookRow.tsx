import {BookToRead} from "./BookToRead";
import React from "react";

type BookRowProps = {
    book: BookToRead;
    onMemoChange: (id: number, memo: string) => void;
    onDelete: (id: number) => void;
};

const BookRow = (props: BookRowProps) => {
    const { title, authors, memo } = props.book;

    const handleMemoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        props.onMemoChange(props.book.id, e.target.value);
    };

    const handleDeleteClick = () => {
        props.onDelete(props.book.id);
    };

    return (
        <div className="book-row">
            <div title={title} className="authors">
                {title}
            </div>
            <div title={authors} className="authors">
                {authors}
            </div>
            <input type="text" className="memo" value={memo} onChange={handleMemoChange} />
            <div className="delete-row" onClick={handleDeleteClick}>
                削除
            </div>
        </div>
    );
};

export default BookRow;