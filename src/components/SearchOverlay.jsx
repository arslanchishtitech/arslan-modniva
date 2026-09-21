import { useEffect, useMemo, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { searchData } from '../data/searchData';
import './SearchOverlay.css';

function normalize(value = '') {
  return value.trim().toLowerCase();
}

export default function SearchOverlay({ open, onClose }) {
  const navigate = useNavigate();
  const location = useLocation();

  const inputRef = useRef(null);
  const [query, setQuery] = useState('');

  // Open hone par input focus + background scroll lock.
  useEffect(() => {
    if (!open) return undefined;

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = 'hidden';

    requestAnimationFrame(() => {
      inputRef.current?.focus();
    });

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [open, onClose]);

  // Route change hone par search close + query reset.
  useEffect(() => {
    setQuery('');

    if (open) {
      onClose();
    }
  }, [location.pathname]);

  // Search matching + ranking.
  const results = useMemo(() => {
    const normalizedQuery = normalize(query);

    if (!normalizedQuery) {
      return [];
    }

    return searchData
      .map((item) => {
        const title = normalize(item.title);

        const keywords = item.keywords.map((keyword) =>
          normalize(keyword),
        );

        const haystack = [item.title, item.type, ...item.keywords]
          .join(' ')
          .toLowerCase();

        const exactTitle = title === normalizedQuery;

        const exactKeyword = keywords.some(
          (keyword) => keyword === normalizedQuery,
        );

        const startsWithTitle = title.startsWith(normalizedQuery);

        const includesMatch = haystack.includes(normalizedQuery);

        let score = 0;

        if (exactTitle) score += 100;
        if (exactKeyword) score += 80;
        if (startsWithTitle) score += 40;
        if (includesMatch) score += 10;

        return {
          ...item,
          score,
        };
      })
      .filter((item) => item.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 8);
  }, [query]);

  if (!open) {
    return null;
  }

  // Enter press / arrow button.
  const handleSubmit = (event) => {
    event.preventDefault();

    const normalizedQuery = normalize(query);

    if (!normalizedQuery) {
      return;
    }

    const bestMatch = results[0];

    onClose();

    if (bestMatch) {
      navigate(bestMatch.path);
      return;
    }

    // Unknown search -> custom 404.
    navigate(`/404?query=${encodeURIComponent(query.trim())}`);
  };

  // Result click.
  const handleResultClick = (path) => {
    onClose();
    navigate(path);
  };

  return (
    <div
      id="site-search-dialog"
      className="search-overlay"
      role="dialog"
      aria-modal="true"
      aria-label="Site search"
    >
      {/* Background */}
      <button
        className="search-overlay__backdrop"
        type="button"
        aria-label="Close search"
        onClick={onClose}
      />

      {/* Main search panel */}
      <div className="search-overlay__panel">
        {/* Top line */}
        <div className="search-overlay__topline page-shell">
          <p className="search-overlay__eyebrow">
            ARSLAN MODNIVA / SEARCH
          </p>

          <button
            className="search-overlay__close"
            type="button"
            onClick={onClose}
          >
            CLOSE <span aria-hidden="true">×</span>
          </button>
        </div>

        {/* Search body */}
        <div className="search-overlay__body page-shell">
          <form
            className="search-overlay__form"
            onSubmit={handleSubmit}
          >
            <label
              className="sr-only"
              htmlFor="site-search-input"
            >
              Search the website
            </label>

            <input
              ref={inputRef}
              id="site-search-input"
              className="search-overlay__input"
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search portfolio, pages, projects..."
              autoComplete="off"
              spellCheck="false"
            />

            <button
              className="search-overlay__submit"
              type="submit"
              aria-label="Submit search"
            >
              →
            </button>
          </form>

          {/* Results */}
          <div
            className="search-overlay__content"
            aria-live="polite"
          >
            {/* Empty search */}
            {!normalize(query) && (
              <p className="search-overlay__hint">
                Try: Portfolio, Profile, Digitals, Comp Card,
                Book, Contact, or a project name.
              </p>
            )}

            {/* Matching results */}
            {normalize(query) && results.length > 0 && (
              <div className="search-overlay__results">
                <p className="search-overlay__label">
                  RESULTS
                </p>

                {results.map((result) => (
                  <button
                    key={`${result.type}-${result.path}`}
                    className="search-result"
                    type="button"
                    onClick={() =>
                      handleResultClick(result.path)
                    }
                  >
                    <span>
                      <small>{result.type}</small>
                      <strong>{result.title}</strong>
                    </span>

                    <span aria-hidden="true">
                      ↗
                    </span>
                  </button>
                ))}
              </div>
            )}

            {/* No results */}
            {normalize(query) && results.length === 0 && (
              <div className="search-overlay__empty">
                <p className="search-overlay__label">
                  NO MATCH
                </p>

                <h2>No results found.</h2>

                <p>
                  Nothing on this website matches
                  “{query.trim()}”.
                  Press Enter to open the 404 page.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}