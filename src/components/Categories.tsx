import "./Categories.css"

const Categories = ({ isLightTheme }: { isLightTheme: boolean }) => {
  const categories = [
    { id: 1, number: "01", name: "Action Games" },
    { id: 2, number: "02", name: "Sports Games" },
    { id: 3, number: "03", name: "adventure Games" },
    { id: 4, number: "04", name: "Arcade Games" },
    { id: 5, number: "05", name: "Fantasy Game" },
    { id: 6, number: "06", name: "Strategy Game" },
  ]

  return (
    <div className={`categories ${isLightTheme ? "light" : ""}`}>
      <h2 className="categories-title">Trending Categories</h2>

      <div className="categories-grid">
        {categories.map((category, index) => (
          <div key={category.id} className={`category-card ${index === 6 ? "featured" : ""}`}>
            <div className="category-number">/{category.number}</div>
            <div className="category-content">
              <div className="category-text-container">
                <h3 className="category-name">{category.name}</h3>
                <button className="category-icon">-▶</button>
              </div>
            </div>
          </div>
        ))}

        {/* Featured Shooter Games card */}
        <div className="category-card featured">
          <div className="category-number">/07</div>
          <div className="category-content">
            <h3 className="category-name">Shooter Games</h3>
            <button className="category-icon">-▶</button>
          </div>
          <div className="featured-image">
            <img src="/fortnite-character.png" alt="Shooter Games" />
          </div>
        </div>

        {/* View All card */}
        <div className="category-card view-all">
          <div className="category-number">/04</div>
          <div className="category-content">
            <div className="view-all-label">VIEW ALL</div>
            <h3 className="category-name">All Categories</h3>
            <button className="category-icon">-▶</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Categories
