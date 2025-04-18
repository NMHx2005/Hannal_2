import './footer.scss';

const FooterPage = () => {

    return (
        <div className="footer">
            <div className="footer__info-section">
                <div className='overlay'>
                    <div className="container">
                        <div className='footer__content'>
                            <div className="footer__info-column">
                                <h3 className="footer__info-title">THÔNG TIN LIÊN HỆ KHO XƯỞNG ĐẸP</h3>
                                <p><strong>CÔNG TY TNHH TƯ VẤN ĐẦU TƯ KHO XƯỞNG ĐẸP</strong></p>
                                <p><i className="fa-solid fa-location-dot"></i> Trụ sở tại Tp.HCM: 337 Đường Số 1, P. Bình Trị Đông B, Quận Bình Tân Tp.Hồ Chí Minh</p>
                                <p><i className="fa-solid fa-location-dot"></i> CN Bình Dương: 15/1/9 Phạm Ngọc Thạch, Khu Phố 5, Phường Hiệp Thành, Thành Phố Thủ Dầu Một, Tỉnh Bình Dương</p>
                                <p><i className="fa-solid fa-location-dot"></i> CN Đồng Nai: Số 27, Đường N7, Khu Phố 7, Phường Thống Nhất, Thành Phố Biên Hòa, Tỉnh Đồng Nai</p>
                                <div className="footer__contact-info">
                                    <p><i className="fas fa-phone-alt"></i> <strong>Hotline/Zalo: 0901 626 248 hoặc 0909 161 824</strong></p>
                                    <p className='info__footer'><i className="fas fa-envelope"></i> khoxuongdep.com.vn@gmail.com</p>
                                    <p className='info__footer'><i className="fas fa-globe"></i> www.khoxuongdep.com.vn</p>
                                </div>
                            </div>
                            <div className="footer__info-column">
                                <h3 className="footer__info-title">THÔNG TIN NỔI BẬT</h3>
                                <ul className="footer__info-list">
                                    <li>
                                        <i className="fas fa-chevron-right"></i>
                                        <a href="#">Kho xưởng đẹp cần bán</a>
                                    </li>
                                    <li>
                                        <i className="fas fa-chevron-right"></i>
                                        <a href="#">Kho xưởng đẹp cho thuê</a>
                                    </li>
                                    <li>
                                        <i className="fas fa-chevron-right"></i>
                                        <a href="#">Đất công nghiệp cần bán</a>
                                    </li>
                                    <li>
                                        <i className="fas fa-chevron-right"></i>
                                        <a href="#">Dịch vụ vệ sinh nhà xưởng</a>
                                    </li>
                                    <li>
                                        <i className="fas fa-chevron-right"></i>
                                        <a href="#">Mua bán khung nhà xưởng cũ</a>
                                    </li>
                                    <li>
                                        <i className="fas fa-chevron-right"></i>
                                        <a href="#">Thi công thẩm duyệt PCCC</a>
                                    </li>
                                    <li>
                                        <i className="fas fa-chevron-right"></i>
                                        <a href="#">Dịch vụ pháp lý nhà xưởng</a>
                                    </li>
                                    <li>
                                        <i className="fas fa-chevron-right"></i>
                                        <a href="#">Thông tin Khu công nghiệp</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="footer__info-column footer__facebook-section">
                                <h3 className="footer__info-title">KẾT NỐI FACEBOOK</h3>
                                {/* <img src="https://storage.googleapis.com/a1aa/image/_0qICKlFufXN2KnxWzVE-hcboW388J_BETaJCTYlyGo.jpg" alt="Facebook page of Kho Xưởng Đẹp" /> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FooterPage;