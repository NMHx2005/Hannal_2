const SearchSection = () => {
  return (
    <section className="search-section">
      <div className="container">
        <div className="search-header">
          <h2>TÌM KIẾM NGAY</h2>
          <p>
            Hơn <span>100</span> kho xưởng đẹp cho thuê và bán giá hấp dẫn
          </p>
        </div>

        <div className="search-box">
          <div className="search-tabs">
            <div className="tab-item active">DỰ ÁN CHO THUÊ</div>
            <div className="tab-item">DỰ ÁN BÁN</div>
          </div>

          <div className="search-form">
            <div className="form-row">
              <div className="form-group keyword">
                <label>Tìm kiếm theo từ khoá</label>
                <input type="text" placeholder="Nhập từ khoá..." />
              </div>

              <div className="form-group">
                <label>Danh mục</label>
                <div className="custom-select">
                  <select>
                    <option value="">Chọn danh mục</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label>Tỉnh / Thành</label>
                <div className="custom-select">
                  <select>
                    <option value="">Chọn tỉnh thành</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label>Quận / Huyện</label>
                <div className="custom-select">
                  <select>
                    <option value="">Chọn quận huyện</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Diện tích</label>
                <div className="custom-select">
                  <select>
                    <option value="">Mọi diện tích</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label>Khoảng giá</label>
                <div className="custom-select">
                  <select>
                    <option value="">Mọi khoảng giá</option>
                  </select>
                </div>
              </div>

              <div className="form-group search-btn">
                <button type="button">TÌM KIẾM</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SearchSection 