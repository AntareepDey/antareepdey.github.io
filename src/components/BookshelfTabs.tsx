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

// CSS styles for the bookshelf component
const styles = `
.bookshelf-content {
    width: 100%;
    margin-bottom: 80px;
}

/* Tab Navigation */
.bs-tabs {
    display: flex;
    gap: 32px;
    border-bottom: 1px solid var(--text-secondary);
    margin-bottom: 40px;
    position: relative;
    width: 100%;
}

.bs-tabs::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: var(--text-primary);
    opacity: 0.15;
    z-index: 0;
}

.bs-tab {
    font-family: 'DM Mono', monospace;
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    padding-bottom: 16px;
    cursor: pointer;
    background: none;
    border: none;
    color: var(--text-primary);
    opacity: 0.5;
    position: relative;
    transition: all 0.2s ease;
    z-index: 1;
}

.bs-tab:hover {
    opacity: 0.7;
}

.bs-tab.active {
    opacity: 1;
    font-weight: 500;
}

.bs-tab.active::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: var(--text-primary);
}

/* Book Grid */
.bs-grid {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 32px;
    width: 100%;
}

.bs-card {
    display: flex;
    flex-direction: column;
}

.bs-cover-wrapper {
    position: relative;
    width: 100%;
    aspect-ratio: 2 / 3;
    border-radius: 4px;
    overflow: hidden;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    margin-bottom: 16px;
    background-color: #f0f0f0;
}

.bs-cover-wrapper:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
}

.bs-cover {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.bs-title {
    font-family: 'Newsreader Variable', serif;
    font-size: 15px;
    font-weight: 600;
    line-height: 1.3;
    margin-bottom: 4px;
    color: var(--text-primary);
    display: -webkit-box;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
}

.bs-author {
    font-family: 'Newsreader Variable', serif;
    font-size: 13px;
    color: var(--text-primary);
    opacity: 0.7;
    line-height: 1.4;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

/* Responsive styles */
@media (max-width: 1024px) {
    .bs-grid {
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 24px;
    }
}

@media (max-width: 768px) {
    .bs-grid {
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 20px;
    }
}

@media (max-width: 480px) {
    .bs-grid {
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 16px;
    }

    .bs-tabs {
        gap: 20px;
        overflow-x: auto;
    }
}
`;

export default function BookshelfTabs({ books }: BookshelfTabsProps) {
    const [activeTab, setActiveTab] = useState('read');

    const filteredBooks = books.filter((book) => book.tab === activeTab);

    return (
        <>
            <style>{styles}</style>
            <section className="bookshelf-content">
                <div className="bs-tabs" role="tablist">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            className={`bs-tab ${activeTab === tab.id ? 'active' : ''}`}
                            role="tab"
                            aria-selected={activeTab === tab.id}
                            onClick={() => setActiveTab(tab.id)}
                        >
                            {tab.label}
                        </button>
                    ))}
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

