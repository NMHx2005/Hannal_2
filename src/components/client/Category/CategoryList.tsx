import React from 'react';
import { Row, Col, Card, Typography } from 'antd';
import { Link } from 'react-router-dom';
import './Category.scss';

const { Title, Paragraph } = Typography;

interface CategoryItem {
  id: string;
  title: string;
  image: string;
  description: string;
  link: string;
}

const categories: CategoryItem[] = [
  {
    id: '1',
    title: 'NHÀ XƯỞNG CÓ CẦN MUA BẢO HIỂM CHÁY NỔ BẮT BUỘC KHÔNG?',
    image: '/images/categories/factory-insurance.jpg',
    description: 'Nhà xưởng có cần mua bảo hiểm cháy nổ bắt buộc không? Việc mua bảo...',
    link: '/dich-vu-khac/bao-hiem-chay-no'
  },
  {
    id: '2',
    title: 'QUY ĐỊNH VỀ BẢO TRÌ, CẢI TẠO NHÀ XƯỞNG KHI CHUYỂN ĐỔI MỤC ĐÍCH SỬ DỤNG',
    image: '/images/categories/factory-maintenance.jpg',
    description: 'Quy định về bảo trì, cải tạo nhà xưởng khi chuyển đổi mục đích sử...',
    link: '/dich-vu-khac/bao-tri-cai-tao'
  },
  {
    id: '3',
    title: 'QUYỀN THUÊ BẤT ĐỘNG SẢN TRONG KHU CÔNG NGHIỆP CỦA DOANH NGHIỆP FDI TẠI VIỆT NAM',
    image: '/images/categories/fdi-rental.jpg',
    description: 'Quyền thuê Bất động sản trong Khu Công nghiệp của Doanh nghiệp FDI tại Việt...',
    link: '/dich-vu-khac/quyen-thue-fdi'
  },
  {
    id: '4',
    title: 'QUY TRÌNH CHUYỂN NHƯỢNG BẤT ĐỘNG SẢN TRONG KHU CÔNG NGHIỆP',
    image: '/images/categories/property-transfer.jpg',
    description: 'Quy trình chuyển nhượng bất động sản trong khu công nghiệp Khu công nghiệp là...',
    link: '/dich-vu-khac/chuyen-nhuong'
  },
  {
    id: '5',
    title: 'HOẠT ĐỘNG SẢN XUẤT TẠI NHÀ XƯỞNG CÓ CẦN GIẤY PHÉP CON?',
    image: '/images/categories/factory-permit.jpg',
    description: 'Hoạt động sản xuất tại nhà xưởng có cần giấy phép con? Nhà xưởng đóng...',
    link: '/dich-vu-khac/giay-phep'
  },
  {
    id: '6',
    title: 'CHO THUÊ LẠI NHÀ XƯỞNG VÀ NHỮNG ĐIỀU CẦN LƯU Ý',
    image: '/images/categories/factory-sublease.jpg',
    description: 'Cho thuê lại Nhà xưởng và những điều cần lưu ý Việc cho thuê lại...',
    link: '/dich-vu-khac/cho-thue-lai'
  },
  {
    id: '7',
    title: 'TRƯỜNG HỢP KCN THAY ĐỔI CHỦ SỞ HỮU, HỢP ĐỒNG THUÊ ĐẤT CÓ CÒN HIỆU LỰC?',
    image: '/images/categories/ownership-change.jpg',
    description: 'Trường hợp KCN thay đổi chủ sở hữu, hợp đồng thuê đất có còn hiệu...',
    link: '/dich-vu-khac/thay-doi-chu-so-huu'
  },
  {
    id: '8',
    title: 'DOANH NGHIỆP CÓ PHẢI ĐÓNG PHÍ SỬ DỤNG HẠ TẦNG KHU CÔNG NGHIỆP KHÔNG?',
    image: '/images/categories/infrastructure-fee.jpg',
    description: 'Doanh nghiệp có phải đóng phí sử dụng hạ tầng khu công nghiệp không? Khu...',
    link: '/dich-vu-khac/phi-ha-tang'
  },
  {
    id: '9',
    title: '03 QUY ĐỊNH VỀ TIÊU CHUẨN XÂY DỰNG CÔNG TRÌNH TRONG KCN',
    image: '/images/categories/construction-standards.jpg',
    description: '03 quy định về tiêu chuẩn xây dựng công trình trong KCN Việc xây dựng...',
    link: '/dich-vu-khac/tieu-chuan-xay-dung'
  },
  {
    id: '10',
    title: 'CÔNG TRÌNH XÂY DỰNG TRÁI PHÉP CÓ THỂ HỢP THỨC HÓA KHÔNG?',
    image: '/images/categories/illegal-construction.jpg',
    description: 'Công trình xây dựng trái phép có thể hợp thức hóa không? Việc xây dựng...',
    link: '/dich-vu-khac/hop-thuc-hoa'
  },
  {
    id: '11',
    title: 'THỦ TỤC HOÀN CÔNG BĐS TRONG KHU CÔNG NGHIỆP MỚI NHẤT 2025',
    image: '/images/categories/completion-procedure.jpg',
    description: 'Thủ tục hoàn công BĐS trong khu công nghiệp mới nhất 2025...',
    link: '/dich-vu-khac/thu-tuc-hoan-cong'
  },
  {
    id: '12',
    title: 'QUY TRÌNH, THỦ TỤC PHÁP LÝ CHI TIẾT XÂY DỰNG KCN NĂM 2025',
    image: '/images/categories/legal-procedure.jpg',
    description: 'Quy trình, thủ tục pháp lý chi tiết xây dựng KCN năm 2025...',
    link: '/dich-vu-khac/quy-trinh-phap-ly'
  }
];

const CategoryList: React.FC = () => {
  return (
    <div className="category-list">
      <Row gutter={[24, 24]}>
        {categories.map((category) => (
          <Col xs={24} sm={12} md={8} key={category.id}>
            <Link to={category.link}>
              <Card
                hoverable
                cover={
                  <img
                    alt={category.title}
                    src={category.image}
                    style={{ height: 200, objectFit: 'cover' }}
                  />
                }
              >
                <Title level={4}>{category.title}</Title>
                <Paragraph>{category.description}</Paragraph>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default CategoryList; 