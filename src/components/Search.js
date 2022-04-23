import "../styles/search.scss";

export const Search = () => {
  return (
    <div className="search">
      <div class="search-container">
        <input
          type="text"
          name="search"
          placeholder="Search..."
          class="search-input"
        />
        <a href="#" class="search-btn">
          <i class="fas fa-search"></i>
        </a>
      </div>
    </div>
  );
};
