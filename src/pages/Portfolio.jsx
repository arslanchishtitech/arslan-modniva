import { useEffect, useState } from 'react'
import './Portfolio.css'

import work01 from '../assets/images/work-01.jpg'
import work02 from '../assets/images/work-02.jpg'
import work03 from '../assets/images/work-03.jpg'
import work04 from '../assets/images/work-04.jpg'

const portfolioItems = [
  {
    id: 1,
    category: 'PORTRAIT',
    year: '2026',
    image: work01,
  },
  {
    id: 2,
    category: 'EDITORIAL',
    year: '2026',
    image: work02,
  },
  {
    id: 3,
    category: 'FASHION',
    year: '2026',
    image: work03,
  },
  {
    id: 4,
    category: 'DIGITALS',
    year: '2026',
    image: work04,
  },
]

const categories = [
  'ALL',
  'EDITORIAL',
  'FASHION',
  'PORTRAIT',
  'COMMERCIAL',
  'DIGITALS',
]

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('ALL')
  const [selectedImage, setSelectedImage] = useState(null)

  const filteredItems =
    activeCategory === 'ALL'
      ? portfolioItems
      : portfolioItems.filter(
          (item) => item.category === activeCategory
        )

  const openLightbox = (item) => {
    setSelectedImage(item)
  }

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  const goToNext = () => {
    const currentIndex = filteredItems.findIndex(
      (item) => item.id === selectedImage.id
    )

    const nextIndex =
      (currentIndex + 1) % filteredItems.length

    setSelectedImage(filteredItems[nextIndex])
  }

  const goToPrevious = () => {
    const currentIndex = filteredItems.findIndex(
      (item) => item.id === selectedImage.id
    )

    const previousIndex =
      (currentIndex - 1 + filteredItems.length) %
      filteredItems.length

    setSelectedImage(filteredItems[previousIndex])
  }

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (!selectedImage) return

      if (event.key === 'Escape') {
        closeLightbox()
      }

      if (event.key === 'ArrowRight') {
        goToNext()
      }

      if (event.key === 'ArrowLeft') {
        goToPrevious()
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [selectedImage, filteredItems])

  return (
    <main className="portfolio-page">

      <section className="portfolio-header">
        <p className="portfolio-label">
          PORTFOLIO
        </p>

        <h1>
          A visual study of
          <span>presence & perspective.</span>
        </h1>

        <p className="portfolio-description">
          A curated collection of portraits, editorial
          imagery, fashion studies and digital work.
        </p>
      </section>

      <section className="portfolio-gallery">

        <div className="portfolio-filters">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              className={
                activeCategory === category
                  ? 'filter-button active'
                  : 'filter-button'
              }
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="portfolio-grid">
          {filteredItems.map((item, index) => (
            <article
              className={`portfolio-item portfolio-item-${index + 1}`}
              key={item.id}
            >
              <button
                type="button"
                className="portfolio-image-button"
                onClick={() => openLightbox(item)}
                aria-label={`Open ${item.category} image`}
              >
                <div className="portfolio-image-wrapper">
                  <img
                    src={item.image}
                    alt={`${item.category} — Arslan Modniva`}
                    className="portfolio-image"
                  />

                  <div className="portfolio-overlay">
                    <span>VIEW</span>
                    <span>↗</span>
                  </div>
                </div>
              </button>

              <div className="portfolio-meta">
                <span>{item.category}</span>
                <span>{item.year}</span>
              </div>
            </article>
          ))}
        </div>

      </section>

      {selectedImage && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Portfolio image viewer"
          onClick={closeLightbox}
        >
          <div
            className="lightbox-content"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="lightbox-close"
              onClick={closeLightbox}
              aria-label="Close image viewer"
            >
              ×
            </button>

            <img
              src={selectedImage.image}
              alt={`${selectedImage.category} — Arslan Modniva`}
              className="lightbox-image"
            />

            <div className="lightbox-info">
              <div>
                <span>{selectedImage.category}</span>
                <span>{selectedImage.year}</span>
              </div>

              <div>
                <span>
                  {
                    filteredItems.findIndex(
                      (item) => item.id === selectedImage.id
                    ) + 1
                  }
                </span>

                <span>/ {filteredItems.length}</span>
              </div>
            </div>

            <div className="lightbox-controls">
              <button
                type="button"
                onClick={goToPrevious}
                aria-label="Previous image"
              >
                ← PREVIOUS
              </button>

              <button
                type="button"
                onClick={goToNext}
                aria-label="Next image"
              >
                NEXT →
              </button>
            </div>
          </div>
        </div>
      )}

    </main>
  )
}

export default Portfolio