import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Portfolio.css'

import portfolioData from '../data/portfolioData'
import portfolioHeroImage from '../assets/images/presence-motion-01.jpg'

const tabs = [
  'ALL',
  'FASHION',
  'EDITORIAL',
  'COMMERCIAL',
  'CASTING',
]

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState('ALL')
  const [sortOrder, setSortOrder] = useState('NEWEST')

  const filteredItems =
    activeTab === 'ALL'
      ? portfolioData
      : portfolioData.filter(
          (item) => item.category === activeTab
        )

  const sortedItems = [...filteredItems].sort((a, b) => {
    const yearA = Number(a.year)
    const yearB = Number(b.year)

    return sortOrder === 'NEWEST'
      ? yearB - yearA
      : yearA - yearB
  })

  return (
    <main className="portfolio-page">

      {/* ================= HERO ================= */}

      <section className="portfolio-hero">

        <div className="portfolio-hero-image">
          <img
            src={portfolioHeroImage}
            alt="Arslan Modniva"
          />
        </div>

        <div className="portfolio-hero-overlay" />

        <div className="portfolio-hero-inner">

          <div className="portfolio-hero-label">
            <span className="portfolio-label-line" />
            <span>PORTFOLIO</span>
          </div>

          <h1 className="portfolio-hero-title">
            <span className="portfolio-hero-work">
              WORK
            </span>

            <span className="portfolio-hero-bronze">
              THAT DEFINES
            </span>

            <span className="portfolio-hero-bronze">
              THE JOURNEY.
            </span>
          </h1>

          <p className="portfolio-hero-description">
            A curated collection of fashion, editorial,
            commercial and casting work.
          </p>

        </div>

        <div className="portfolio-hero-bottom">
          <span>ARSLAN MODNIVA</span>

          <span>
            FASHION / EDITORIAL / COMMERCIAL
          </span>
        </div>

      </section>


      {/* ================= SELECTED WORK ================= */}

      <section
        className="portfolio-work-section"
        id="all-work"
      >

        <div className="portfolio-work-container">

          {/* LEFT EDITORIAL COLUMN */}

          <div className="portfolio-work-intro">

            <div className="portfolio-work-meta">
              <span>01 / 05</span>
              <span className="portfolio-work-meta-line" />
            </div>

            <h2 className="portfolio-work-title">
              <span>SELECTED</span>
              <span>WORK</span>
            </h2>

            <p className="portfolio-work-description">
              A visual archive of projects, stories and
              moments that shape the journey.
            </p>

            <Link
              to="/portfolio"
              className="portfolio-view-all"
            >
              <span>VIEW ALL WORK</span>
              <span>→</span>
            </Link>

          </div>


          {/* RIGHT WORK LIBRARY */}

          <div className="portfolio-work-library">

            <div className="portfolio-filter-bar">

              <div className="portfolio-tabs">

                {tabs.map((tab) => (
                  <button
                    key={tab}
                    type="button"
                    className={
                      activeTab === tab
                        ? 'portfolio-tab is-active'
                        : 'portfolio-tab'
                    }
                    onClick={() => setActiveTab(tab)}
                  >
                    {tab}
                  </button>
                ))}

              </div>

              <div className="portfolio-sort">

                <span>SORT BY</span>

                <select
                  value={sortOrder}
                  onChange={(event) =>
                    setSortOrder(event.target.value)
                  }
                  aria-label="Sort portfolio"
                >
                  <option value="NEWEST">
                    Newest
                  </option>

                  <option value="OLDEST">
                    Oldest
                  </option>
                </select>

              </div>

            </div>


            {/* WORK GRID */}

            <div className="portfolio-grid">

              {sortedItems.map((item) => (
                <Link
                  key={item.id}
                  to={`/portfolio/${item.slug}`}
                  className="portfolio-card"
                >

                  <div className="portfolio-card-media">

                    <img
                      src={item.image}
                      alt={`${item.title} — Arslan Modniva`}
                      loading="lazy"
                    />

                    <div className="portfolio-card-overlay" />

                    <div className="portfolio-card-info">

                      <div className="portfolio-card-copy">

                        <span className="portfolio-card-number">
                          {item.id}
                        </span>

                        <h3>
                          {item.title}
                        </h3>

                        <p>
                          {item.category}
                          <span>/</span>
                          {item.year}
                        </p>

                      </div>

                      <span className="portfolio-card-arrow">
                        →
                      </span>

                    </div>

                  </div>

                </Link>
              ))}

            </div>


            {sortedItems.length === 0 && (
              <div className="portfolio-empty">
                NO WORK AVAILABLE.
              </div>
            )}

          </div>

        </div>


        {/* BOTTOM EDITORIAL BAR */}

        <div className="portfolio-bottom-bar">

          <div className="portfolio-bottom-side">

            <span className="portfolio-bottom-line" />

            <span>
              MORE WORKS AWAIT
            </span>

          </div>


          <div className="portfolio-scroll">
            <span>SCROLL</span>
            <span>↓</span>
          </div>


          <div className="portfolio-bottom-side portfolio-bottom-side-right">

            <span>
              EXPLORE THE FULL PORTFOLIO
            </span>

            <span className="portfolio-bottom-line" />

          </div>

        </div>

      </section>

    </main>
  )
}

export default Portfolio