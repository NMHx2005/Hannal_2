import React from 'react';
import { useParams } from 'react-router-dom';
import './CategoryDetail.scss';
import BlogPostsData from './BlogPostsData';

interface CategoryData {
    id: string;
    title: string;
    content: string;
    detailContent?: string;
    image: string;
}

const categories: CategoryData[] = [
    {
        id: '1',
        title: 'NHÀ XƯỞNG CẦN MUA BẢO HIỂM CHÁY NỔ BỨC KHÔNG?',
        content: 'Nhà xưởng cần mua bảo hiểm cháy nổ bức không? Vì sao mua bảo hiểm cháy nổ bức không...',
        image: 'https://via.placeholder.com/300x180',
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
    // Các mục khác giữ nguyên như trong mảng categories ở Category.tsx
];

const CategoryDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const category = categories.find(cat => cat.id === id);

    if (!category || !category.detailContent) {
        return <div>Không tìm thấy bài viết</div>;
    }

    // Phân tích nội dung chi tiết thành các phần tử HTML
    const renderContent = (content: string) => {
        const lines = content.split('\n');
        let elements: JSX.Element[] = [];
        let currentList: JSX.Element[] = [];

        lines.forEach((line, index) => {
            if (line.startsWith('### ')) {
                if (currentList.length > 0) {
                    elements.push(<ul key={`list-${index}`}>{currentList}</ul>);
                    currentList = [];
                }
                elements.push(
                    <h2 key={index} className="section-title">
                        {line.replace('### ', '')}
                    </h2>
                );
            } else if (line.startsWith('- ')) {
                currentList.push(
                    <li key={index} dangerouslySetInnerHTML={{ __html: line.replace('- ', '') }} />
                );
            } else if (line.trim()) {
                if (currentList.length > 0) {
                    elements.push(<ul key={`list-${index}`}>{currentList}</ul>);
                    currentList = [];
                }
                elements.push(
                    <p key={index} dangerouslySetInnerHTML={{ __html: line }} />
                );
            }
        });

        if (currentList.length > 0) {
            elements.push(<ul key="final-list">{currentList}</ul>);
        }

        return elements;
    };

    return (
        <>
            <div className='container'>
                <div className='container-detail'>
                    <div className="category-detail">
                        <h1 className="category-title">{category.title}</h1>
                        <div className="category-content">
                            <img
                                src="/images/Category/cham-dut-logo.jpg"
                                alt="Contract"
                                className="main-image"
                            />
                            {renderContent(category.detailContent)}
                        </div>
                    </div>
                    <div className='blog-posts-data'>
                        <BlogPostsData />
                    </div>
                </div>
            </div>
        </>
    );
};

export default CategoryDetail;