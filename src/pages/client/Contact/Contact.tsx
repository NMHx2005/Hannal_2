import { Form, Input, Button } from 'antd';
import './Contact.scss';

const { TextArea } = Input;

const Contact = () => {
  const onFinish = (values: any) => {
    console.log('Form values:', values);
    // Handle form submission here
  };

  return (
    <div className="contact-page">
      <div className="map-section">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.6697269378987!2d106.60852937465353!3d10.759893089387325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752c2ad695d247%3A0xb99c8e2a2eef76d6!2zMzM3IMSQxrDhu51uZyBT4buRIDEsIELDrG5oIFRy4buLIMSQw7RuZyBCLCBCw6xuaCBUw6JuLCBUaMOgbmggcGjhu5EgSOG7kyBDaMOtIE1pbmgsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1710340612604!5m2!1svi!2s"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <div className="contact-content">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <h2 className="section-title">LIÊN HỆ KHO XƯỞNG ĐẸP</h2>
              <div className="info-item">
                <i className="fa-solid fa-location-dot"></i>
                <p>337 Đường Số 1, P. Bình Trị Đông B, Quận Bình Tân Tp.Hồ Chí Minh</p>
              </div>
              <div className="info-item">
                <i className="fa-solid fa-phone"></i>
                <p>
                  <a href="tel:0909161824">0909.161.824</a> / <a href="tel:0901626248">0901.626.248</a>
                </p>
              </div>
              <div className="info-item">
                <i className="fa-solid fa-envelope"></i>
                <p>
                  <a href="mailto:khoxuongdep.com.vn@gmail.com">khoxuongdep.com.vn@gmail.com</a>
                </p>
              </div>
              <div className="info-item">
                <i className="fa-solid fa-globe"></i>
                <p>
                  <a href="https://www.khoxuongdep.com.vn" target="_blank" rel="noopener noreferrer">
                    www.khoxuongdep.com.vn
                  </a>
                </p>
              </div>
              <div className="social-links">
                <a href="#" className="social-link facebook">
                  <i className="fa-brands fa-facebook-f"></i>
                </a>
                <a href="#" className="social-link email">
                  <i className="fa-solid fa-envelope"></i>
                </a>
                <a href="#" className="social-link phone">
                  <i className="fa-solid fa-phone"></i>
                </a>
              </div>
            </div>

            <div className="contact-form">
              <Form layout="vertical" onFinish={onFinish} autoComplete="off">
                <Form.Item
                  name="name"
                  rules={[{ required: true, message: 'Vui lòng nhập họ tên!' }]}
                >
                  <Input placeholder="Tên*" />
                </Form.Item>

                <Form.Item
                  name="title"
                  rules={[{ required: true, message: 'Vui lòng nhập tiêu đề!' }]}
                >
                  <Input placeholder="Tiêu đề*" />
                </Form.Item>

                <Form.Item
                  name="email"
                  rules={[
                    { required: true, message: 'Vui lòng nhập email!' },
                    { type: 'email', message: 'Email không hợp lệ!' }
                  ]}
                >
                  <Input placeholder="Email*" />
                </Form.Item>

                <Form.Item
                  name="phone"
                  rules={[{ required: true, message: 'Vui lòng nhập số điện thoại!' }]}
                >
                  <Input placeholder="Điện thoại*" />
                </Form.Item>

                <Form.Item
                  name="message"
                  rules={[{ required: true, message: 'Vui lòng nhập nội dung!' }]}
                >
                  <TextArea rows={4} placeholder="Nội dung*" />
                </Form.Item>

                <Form.Item>
                  <Button type="primary" htmlType="submit" className="submit-button">
                    GỬI LIÊN HỆ
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact; 