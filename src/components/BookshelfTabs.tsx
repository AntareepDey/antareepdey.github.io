import { useState } from 'react';

interface Book {
    id: number;
    title: string;
    author: string;
    coverUrl: string;
    tab: string;
}

interface BookshelfTabsProps {
    books: Book[];
}

const tabs = [
    { id: 'read', label: 'Read' },
    { id: 'reading', label: 'Reading' },
    { id: 'want_to_read', label: 'Want to Read' },
];



export default function BookshelfTabs({ books }: BookshelfTabsProps) {
    const [activeTab, setActiveTab] = useState('read');

    const filteredBooks = books.filter((book) => book.tab === activeTab);

    return (
        <>
            <section className="bookshelf-content">
                <div className="bs-tabs" role="tablist">
                    {tabs.map((tab) => {
                        const count = books.filter((b) => b.tab === tab.id).length;
                        return (
                            <button
                                key={tab.id}
                                className={`bs-tab ${activeTab === tab.id ? 'active' : ''}`}
                                role="tab"
                                aria-selected={activeTab === tab.id}
                                onClick={() => setActiveTab(tab.id)}
                            >
                                {tab.label} ({count})
                            </button>
                        );
                    })}
                </div>

                <div className="bs-grid">
                    {filteredBooks.map((book) => (
                        <article key={book.id} className="bs-card">
                            <div className="bs-cover-wrapper">
                                <img
                                    src={book.coverUrl}
                                    alt={`Cover of ${book.title}`}
                                    className="bs-cover"
                                    loading="lazy"
                                />
                            </div>
                            <h2 className="bs-title">{book.title}</h2>
                            <p className="bs-author">{book.author}</p>
                        </article>
                    ))}
                </div>
            </section>
        </>
    );
}

