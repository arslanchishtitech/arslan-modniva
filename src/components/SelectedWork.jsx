import { Link } from 'react-router-dom'
import './SelectedWork.css'

import work01 from '../assets/images/work-01.jpg'
import work02 from '../assets/images/work-02.jpg'
import work03 from '../assets/images/work-03.jpg'
import work04 from '../assets/images/work-04.jpg'

const works = [
  {
    id: '01',
    slug: 'the-modern-man',
    title: 'THE MODERN MAN',
    category: 'EDITORIAL',
    year: '2024',
    image: work01,
    size: 'large',
  },
  {
    id: '02',
    slug: 'summer-essentials',
    title: 'SUMMER ESSENTIALS',
    category: 'FASHION',
    year: '2024',
    image: work02,
    size: 'medium',
  },
  {
    id: '03',
    slug: 'urban-nights',
    title: 'URBAN NIGHTS',
    category: 'COMMERCIAL',
    year: '2023',
    image: work03,
    size: 'small',
  },
  {
    id: '04',
    slug: 'next-gen',
    title: 'NEXT GEN',
    category: 'CASTING',
    year: '2023',
    image: work04,
    size: 'small',
  },
]

const categories = ['FASHION', 'EDITORIAL', 'COMMERCIAL', 'CASTING']

const SelectedWork = () => {
  return (
    <section className="selected-work-section">
      <div className="selected-work-container">

        <div className="selected-work-heading">

          <div className="selected-work-intro">
            <div className="selected-work-meta">
              <span>03 / 05</span>
              <span className="selected-work-meta-line" />
            </div>

            <h2 className="selected-work-title">
              <span>SELECTED</span>
              <span>WORK</span>
            </h2>

            <p className="selected-work-description">
              A curated selection of campaigns, editorials
              and projects that define the journey.
            </p>

            <Link
              to="/portfolio"
              className="selected-work-link"
            >
              <span>VIEW ALL WORK</span>
              <span className="selected-work-arrow">→</span>
            </Link>
          </div>

          <div className="selected-work-categories">
            {categories.map((category, index) => (
              <span
                key={category}
                className={index === 0 ? 'is-active' : ''}
              >
                {category}
              </span>
            ))}
          </div>

        </div>

        <div className="selected-work-grid">

          {works.map((work) => (
            <Link
              key={work.id}
              to={`/portfolio/${work.slug}`}
             className={`selected-work-card selected-work-card-${work.size}`}
            >
              <img
                src={work.image}
                alt={work.title}
                loading="lazy"
              />

              <div className="selected-work-card-overlay" />

              <div className="selected-work-card-info">
                <div>
                  <h3>{work.title}</h3>

                  <p>
                    {work.category}
                    <span>/</span>
                    {work.year}
                  </p>
                </div>

                <span className="selected-work-card-number">
                  {work.id}
                </span>
              </div>

              <span className="selected-work-card-line" />
            </Link>
          ))}

        </div>

        <div className="selected-work-bottom">
          <span className="selected-work-bottom-line" />

          <div className="selected-work-scroll">
            <span>SCROLL</span>
            <span>↓</span>
          </div>

          <span className="selected-work-bottom-line" />
        </div>

      </div>
    </section>
  )
}

export default SelectedWork