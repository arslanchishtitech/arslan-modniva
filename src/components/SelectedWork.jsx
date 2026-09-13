import './SelectedWork.css'
import work01 from '../assets/images/work-01.jpg'
import work02 from '../assets/images/work-02.jpg'
import work03 from '../assets/images/work-03.jpg'
import work04 from '../assets/images/work-04.jpg'

const workItems = [
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

const SelectedWork = () => {
  return (
    <section className="selected-work" id="work">
      <div className="selected-work-header">
        <p className="section-label">SELECTED WORK</p>

        <h2>
          A collection of
          <span>presence & perspective.</span>
        </h2>
      </div>

      <div className="work-grid">
        {workItems.map((item, index) => (
          <article
            className={`work-item work-item-${index + 1}`}
            key={item.id}
          >
            <div className="work-image-wrapper">
              <img
                src={item.image}
                alt={`${item.category} — Arslan Modniva`}
                className="work-image"
              />

              <div className="work-overlay">
                <span>VIEW</span>
                <span>↗</span>
              </div>
            </div>

            <div className="work-meta">
              <span>{item.category}</span>
              <span>{item.year}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default SelectedWork