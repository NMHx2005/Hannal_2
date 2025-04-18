import React, { useState } from 'react';
import { Row, Col, Form, Input, Button, Typography, Breadcrumb } from 'antd';
import { Link } from 'react-router-dom';
import './DetailPost.scss';
import SearchSection from '../Search/SearchSection';

const { Title } = Typography;
const { TextArea } = Input;

interface ProjectDetail {
  id: string;
  title: string;
  details: {
    area: string;
    location: string;
    constructionArea: string;
    structure: string;
    wallHeight: string;
    foundation: string;
    electricity: string;
    cleanRoom: string;
    certificates: string;
  };
  images: string[];
  contact: {
    phone: string;
    email: string;
  };
}
// Mock data - thay thế bằng data từ props sau này
const projectData: ProjectDetail = {
  id: '1',
  title: 'BÁN NHÀ XƯỞNG 17394M2 KCN PHƯỚC NHẬT, HÒA BÉ',
  details: {
    area: 'Diện tích đất: 17,394m²',
    location: 'KCN Phước Nhật, Hòa Bé',
    constructionArea: 'Diện tích nhà xưởng xây dựng: 10,436m²',
    structure: 'Kết cấu: Khung kèo thép, mái tôn',
    wallHeight: 'Tường xây gạch cao 6m',
    foundation: 'Nền bê tông đạt tải 3 tấn/m²',
    electricity: 'Điện: Có trạm điện riêng',
    cleanRoom: 'Phòng sạch: 300m²',
    certificates: 'Đầy đủ giấy phép: PCCC, môi trường'
  },
  images: [
    '/images/Ban-dat-khu-cong-nghiep-xuyen-a-711x400.jpg',
    '/images/bg-footer.jpg',
    '/images/dat-ban-khu-cong-nghiep-hai-son-duc-hoa-dong-711x400.jpg',
    '/images/nha-xuong-dep.jpg'
  ],
  contact: {
    phone: '0966.695.386',
    email: 'info@example.com'
  }
};

const DetailPost: React.FC = () => {
  const [form] = Form.useForm();
  const [selectedImage, setSelectedImage] = useState(projectData.images[0]);

  const handleSubmit = (values: any) => {
    console.log('Form values:', values);
  };

  return (
    <>
        <SearchSection/>
          <div className="detail-post">
              <div className="breadcrumb">
                  <Breadcrumb>
                      <Breadcrumb.Item><Link to="/">Trang chủ</Link></Breadcrumb.Item>
                      <Breadcrumb.Item><Link to="/kho-xuong-ban">Kho xưởng bán</Link></Breadcrumb.Item>
                      <Breadcrumb.Item>Kho xưởng bán trong KCN</Breadcrumb.Item>
                  </Breadcrumb>
              </div>

              <Row gutter={[24, 24]}>
                  <Col xs={24} lg={16}>
                      <div className="main-content">
                          <div className="image-gallery">
                              <div className="main-image-container">
                                  <img src={selectedImage} alt={projectData.title} className="main-image" />
                              </div>
                              <div className="thumbnail-list">
                                  {projectData.images.map((image, index) => (
                                      <img
                                          key={index}
                                          src={image}
                                          alt={`Thumbnail ${index + 1}`}
                                          className={`thumbnail ${selectedImage === image ? 'active' : ''}`}
                                          onClick={() => setSelectedImage(image)}
                                      />
                                  ))}
                              </div>
                          </div>

                          <Title level={2}>{projectData.title}</Title>

                          <div className="project-details">
                              <Title level={3}>CHI TIẾT DỰ ÁN</Title>
                              <ul>
                                  {Object.values(projectData.details).map((detail, index) => (
                                      <li key={index}>{detail}</li>
                                  ))}
                              </ul>
                          </div>
                      </div>
                  </Col>

                  <Col xs={24} lg={8}>
                      <div className="contact-form">
                          <Title level={3}>LIÊN HỆ TƯ VẤN</Title>
                          <Form autoComplete="off" form={form} layout="vertical" onFinish={handleSubmit}>
                              <Form.Item name="name" rules={[{ required: true, message: 'Vui lòng nhập họ tên' }]}>
                                  <Input placeholder="Họ tên" />
                              </Form.Item>
                              <Form.Item name="phone" rules={[{ required: true, message: 'Vui lòng nhập số điện thoại' }]}>
                                  <Input placeholder="Số điện thoại" />
                              </Form.Item>
                              <Form.Item name="email">
                                  <Input placeholder="Email" />
                              </Form.Item>
                              <Form.Item name="note">
                                  <TextArea rows={4} placeholder="Ghi chú" />
                              </Form.Item>
                              <Form.Item>
                                  <Button type="primary" htmlType="submit" block className="submit-button">
                                      GỬI YÊU CẦU
                                  </Button>
                              </Form.Item>
                          </Form>

                          <div className="chat-buttons">
                              <Button block className="zalo-button">
                                  Chat Zalo
                              </Button>
                              <Button block className="facebook-button">
                                  Chat Facebook
                              </Button>
                          </div>
                      </div>
                  </Col>
              </Row>
          </div>
    </>
  );
};

export default DetailPost; 