import HeroSection from '../../../components/client/HomePage/HeroSection';
import './About.scss';

const About = () => {



  return (
    <>
      <HeroSection />
      <div className="about-page">
        <div className="about-content">
          <div className="container">
            <div className="company-intro">
              
                <div className="about-banner">
                    <h1>Giới thiệu về Kho Xưởng Đẹp</h1>
                </div>
              <h2>Kho Xưởng Đẹp hay Khoxuongdep.com.vn là ai?</h2>
              <p>
                Kho Xưởng Đẹp ( web: Khoxuongdep.com.vn ) là đơn vị chuyên môn về bất động sản công nghiệp và kho xưởng với khách hàng đối tác phát triển trên toàn quốc, gồm có:
              </p>
              <div className="features">
                <div className="feature-item">
                  <i className="fa-solid fa-check"></i>
                  <span>Khu vực hoạt động chính: Khoxuongdep.com.vn hoạt động chính tại khu vực miền Nam, các tỉnh như thành phố Hồ Chí Minh, Long An, Bình Dương, Đồng Nai, Vũng Tàu, Tây Ninh, Miền Tây, v.v.. Mạng lưới hoạt động khắp toàn Quốc.</span>
                </div>
                <div className="feature-item">
                  <i className="fa-solid fa-check"></i>
                  <span>Nhận thực hiện đơn hàng đặt thuê mua kho xưởng, đất công nghiệp theo yêu cầu.</span>
                </div>
                <div className="feature-item">
                  <i className="fa-solid fa-check"></i>
                  <span>Tư vấn các loại giá thuê, cho thuê, mua bán kho xưởng, đất công nghiệp.</span>
                </div>
                <div className="feature-item">
                  <i className="fa-solid fa-check"></i>
                  <span>Tư vấn thiết kế, xây dựng nhà xưởng, kho chứa hàng, nhà kho xưởng nhà máy, đất CN.</span>
                </div>
                <div className="feature-item">
                  <i className="fa-solid fa-check"></i>
                  <span>Thông tin về bất động sản công nghiệp, kho chứa hàng.</span>
                </div>
                <div className="feature-item">
                  <i className="fa-solid fa-check"></i>
                  <span>Lập dự toán công trình kho sản xuất theo thiết kế.</span>
                </div>
                <div className="feature-item">
                  <i className="fa-solid fa-check"></i>
                  <span>Xin làm các loại sổ đỏ đất đai, đất công nghiệp cho bất động sản công nghiệp.</span>
                </div>
                <div className="feature-item">
                  <i className="fa-solid fa-check"></i>
                  <span>Khảo sát giá mặt bằng, môi giới mua bán cho thuê kho xưởng, đất công nghiệp.</span>
                </div>
              </div>

              <div className="contact-info">
                <p><i className="fa-solid fa-location-dot"></i> 94 Đường 19, Phường Bình Trị Đông B, Quận Bình Tân Tp.HCM</p>
                <p><i className="fa-solid fa-phone"></i> 0909.141.824</p>
                <p><i className="fa-solid fa-envelope"></i> khoxuongdep.com.vn@gmail.com</p>
                <p><i className="fa-solid fa-globe"></i> www.khoxuongdep.com.vn</p>
              </div>

              <div className="vision-mission-values">
                <div className="section vision">
                  <div className="icon">
                    <img src="/images/intro/Gioi-thieu-1.png" alt="" />
                  </div>
                  <h3>TẦM NHÌN</h3>
                  <p>Trở thành một Trang Thông tin Bất động sản Công nghiệp hàng đầu tại Việt Nam</p>
                </div>

                <div className="section mission">
                  <div className="icon">
                    <img src="/images/intro/Gioi-thieu-3.jpg" alt="" />
                  </div>
                  <h3>SỨ MỆNH</h3>
                  <p>Mang đến giá trị cao nhất cho Khách hàng đối tác tại Khoxuongdep.com.vn</p>
                </div>

                <div className="section values">
                  <div className="icon">
                    <img src="/images/intro/Gioi-thieu-2.jpg" alt="" />
                  </div>
                  <h3>GIÁ TRỊ CỐT LÕI</h3>
                  <p>Vì lợi ích chung tại Tận - Chỉnh Trực - Tận Tâm - Chuyên Nghiệp. Tin tưởng mang lại cho quý khách Hàng và đối Tác sự tin yêu và hiệu quả!</p>
                </div>
              </div>

              <div className="partners">
                <h2>ĐỐI TÁC CỦA CHÚNG TÔI</h2>
              </div>

              <div className="win-win">
                <img src="/images/intro/win.jpg" alt="Win-Win Partnership" />
                <p>Cùng nhau cùng Win-Win! Cùng có lợi!</p>
              </div>

              <div className="footer-info">
                <p>Khoxuongdep.com.vn – Hotline:Zalo: 0901632248 hoặc 0909141824. Trân trọng và hợp tác!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About; 