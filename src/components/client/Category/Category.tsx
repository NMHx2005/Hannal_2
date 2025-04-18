import React from 'react';
import { Row, Col, Pagination } from 'antd';
import CategoryItem from './CategoryItem';
import './Category.scss';
import BlogPostsData from './BlogPostsData';

interface CategoryData {
    id: string;
    title: string;
    content: string;
    image: string;
    isFeatured?: boolean;
    detailContent?: string;
}

const categories: CategoryData[] = [
    {
        id: '1',
        title: 'NHÀ XƯỞNG CẦN MUA BẢO HIỂM CHÁY NỔ BỨC KHÔNG?',
        content: 'Nhà xưởng cần mua bảo hiểm cháy nổ bức không? Vì sao mua bảo hiểm cháy nổ bức không...',
        image: '/images/Category/bg-1.jpg',
        detailContent: `
### Đơn phương chấm dứt hợp đồng thuê nhà xưởng

1. **Hiểu đơn chấm dứt hợp đồng thuê nhà xưởng là gì**
   - Đơn phương chấm dứt hợp đồng thuê nhà xưởng là quyền của một bên (bên thuê hoặc bên cho thuê) trong hợp đồng thuê nhà xưởng được quyền chấm dứt hợp đồng trước thời hạn mà không cần sự đồng ý của bên còn lại, dựa trên các căn cứ pháp lý hoặc thỏa thuận trong hợp đồng.
   - Theo quy định tại **Điều 428 Bộ luật Dân sự 2015**, bên thuê hoặc bên cho thuê có thể đơn phương chấm dứt hợp đồng nếu có căn cứ theo pháp luật hoặc thỏa thuận trong hợp đồng.

2. **Quyền đơn phương chấm dứt hợp đồng của bên thuê**
   - Theo **Điều 429 Bộ luật Dân sự 2015**, bên thuê có quyền đơn phương chấm dứt hợp đồng trong các trường hợp sau:
     - Nhà xưởng không còn phù hợp với mục đích sử dụng đã thỏa thuận.
     - Bên cho thuê không bảo trì, sửa chữa nhà xưởng theo đúng thỏa thuận.
     - Giá thuê tăng quá cao so với giá thị trường mà không có thỏa thuận trước.
   - Ngoài ra, nếu hợp đồng có các điều khoản cụ thể về quyền chấm dứt, bên thuê có thể dựa vào đó để thực hiện.

3. **Quyền đơn phương chấm dứt hợp đồng của bên cho thuê**
   - Theo **Điều 429 Bộ luật Dân sự 2015**, bên cho thuê có quyền đơn phương chấm dứt hợp đồng nếu:
     - Bên thuê sử dụng nhà xưởng sai mục đích đã thỏa thuận.
     - Bên thuê không thanh toán tiền thuê đúng hạn sau nhiều lần nhắc nhở.
     - Bên thuê gây thiệt hại nghiêm trọng đến tài sản nhà xưởng.
   - Bên cho thuê cần thông báo trước cho bên thuê theo thời gian quy định trong hợp đồng hoặc pháp luật (thường là 30-90 ngày).

4. **Thủ tục pháp lý khi đơn phương chấm dứt hợp đồng**
   - **Bước 1**: Xác định căn cứ pháp lý hoặc điều khoản hợp đồng cho phép chấm dứt.
   - **Bước 2**: Gửi thông báo bằng văn bản đến bên còn lại, nêu rõ lý do và thời gian chấm dứt (thường 30-90 ngày tùy thỏa thuận).
   - **Bước 3**: Thanh lý hợp đồng, hoàn trả tài sản và giải quyết các nghĩa vụ tài chính còn lại.
   - **Bước 4**: Nếu có tranh chấp, có thể đưa ra tòa án hoặc trọng tài thương mại để giải quyết.

    `,
    },
    {
        id: '2',
        title: 'QUY ĐỊNH VỀ BẢO TRÌ, TẠI SAO NHÀ XƯỞNG KHI CHUYỂN ĐỔI MỤC ĐÍCH SỬ',
        content: 'Quy định về bảo trì, tại sao nhà xưởng khi chuyển đổi mục đích sử...',
        image: 'https://via.placeholder.com/300x180',
    },
    {
        id: '3',
        title: 'QUYEN THUẾ BẤT ĐỘNG SẢN TRONG KHU CÔNG NGHIỆP FDI TẠI VIỆT NAM',
        content: 'Quyền thuê bất động sản trong khu công nghiệp FDI tại Việt Nam...',
        image: 'https://via.placeholder.com/300x180',
    },
    {
        id: '4',
        title: 'BÀI VIẾT MỚI',
        content:
            'Bốn phương thức dự toán hợp đồng thuê nhà xưởng dinh mục tư vấn 2023 Nghỉ tết 74/2024-NC-CP Quy định về bố trí không gian đất trong khu công nghiệp...',
        image: 'https://via.placeholder.com/300x180',
        isFeatured: true,
    },
    {
        id: '5',
        title: 'QUY TRÌNH CHUYỂN NHƯỢNG BẤT ĐỘNG SẢN TRONG KHU CÔNG NGHIỆP',
        content: 'Quy trình chuyển nhượng bất động sản trong khu công nghiệp là...',
        image: 'https://via.placeholder.com/300x180',
    },
    {
        id: '6',
        title: 'HOẠT ĐỘNG SẢN XUẤT TẠI NHÀ XƯỞNG CÓ CẦN GIẤY PHÉP XUẤT KHẨU',
        content: 'Hoạt động sản xuất tại nhà xưởng có cần giấy phép xuất khẩu...',
        image: 'https://via.placeholder.com/300x180',
    },
    {
        id: '7',
        title: 'CÁC LOẠI NHÀ XƯỞNG VÀ NHỮNG ĐIỀU CẦN LƯU Ý',
        content: 'Các loại nhà xưởng và những điều cần lưu ý...',
        image: 'https://via.placeholder.com/300x180',
    },
    {
        id: '8',
        title: 'TRƯỜNG HỢP KCN THUẬT ĐẤT CÓ HIỆU LỰC?',
        content: 'Trường hợp KCN thuật đất có hiệu lực...',
        image: 'https://via.placeholder.com/300x180',
    },
    {
        id: '9',
        title: 'DOANH NGHIỆP CÓ BỔ SUNG PHỤ ĐỘNG HẠ TẦNG KHU CÔNG NGHIỆP KHÔNG?',
        content: 'Doanh nghiệp có bổ sung phụ động hạ tầng khu công nghiệp không...',
        image: 'https://via.placeholder.com/300x180',
    },
    {
        id: '10',
        title: '63 QUY ĐỊNH VỀ TIÊU CHUẨN XÂY DỰNG CÔNG TRÌNH TRONG KCN',
        content: '63 quy định về tiêu chuẩn xây dựng công trình trong KCN...',
        image: 'https://via.placeholder.com/300x180',
    },
    {
        id: '11',
        title: 'CÔNG TRÌNH XÂY DỰNG TRÁI PHÉP CÓ THỂ HỢP THỨC HÓA KHÔNG?',
        content: 'Công trình xây dựng trái phép có thể hợp thức hóa không...',
        image: 'https://via.placeholder.com/300x180',
    },
    {
        id: '12',
        title: 'THỦ TỤC HOẠN CÔNG BDS TRONG KHU CÔNG NGHIỆP MỚI NHẤT 2025',
        content: 'Thủ tục hoàn công bất động sản trong khu công nghiệp mới nhất 2025...',
        image: 'https://via.placeholder.com/300x180',
    },
    {
        id: '13',
        title: 'XÂY TRÌNH, THỦ TỤC PHÁP LÝ CHI TIẾT XÂY KCN NAM 2025',
        content: 'Xây trình, thủ tục pháp lý chi tiết xây KCN Nam 2025...',
        image: 'https://via.placeholder.com/300x180',
    },
];

const Category: React.FC = () => {
    const [currentPage, setCurrentPage] = React.useState(1);
    const pageSize = 12;

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    const regularCategories = categories.filter(category => !category.isFeatured);
    const startIndex = (currentPage - 1) * pageSize;
    const currentCategories = regularCategories.slice(startIndex, startIndex + pageSize);

    return (
        <div className='container'>
            <div className='category-container'>
                <div className="category">
                    <Row gutter={[24, 24]}>
                        {currentCategories.map(category => (
                            <Col xs={24} sm={12} md={8} lg={8} key={category.id}>
                                <CategoryItem category={category} />
                            </Col>
                        ))}
                    </Row>
                    <div className="pagination">
                        <Pagination
                            current={currentPage}
                            pageSize={pageSize}
                            total={regularCategories.length}
                            onChange={handlePageChange}
                            showSizeChanger={false}
                        />
                    </div>
                </div>
                <div className='blog-posts-data'>
                    <BlogPostsData />
                </div>
            </div>
       </div>
    );
};

export default Category;