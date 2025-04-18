import { useState, useEffect } from 'react';
import "./BlogPostsData.scss"
interface BlogPost {
    id: number;
    title: string;
    url: string;
}

// Mock data for blog posts
const blogPostsData: BlogPost[] = [
    { id: 1, title: 'Đơn phương chấm dứt hợp đồng thuê nhà', url: '/posts/don-phuong-cham-dut-hop-dong-thue-nha' },
    { id: 2, title: 'Quy định mức lương tối thiểu vùng năm 2025 theo Nghị định 74/2024/NĐ-CP', url: '/posts/quy-dinh-muc-luong-toi-thieu-vung-2025' },
    { id: 3, title: 'Quy định về bồi thường thuê đất trong khu công nghiệp mới nhất', url: '/posts/quy-dinh-boi-thuong-thue-dat-kcn' },
    { id: 4, title: 'So sánh đất thuê trả tiền một lần và trả hàng năm trong khu công nghiệp', url: '/posts/so-sanh-dat-thue-tra-tien-mot-lan-va-hang-nam' },
    { id: 5, title: 'Bán đất sản xuất phân bón trong KCN Phước Đông Long An 5000m2, 1 hecta', url: '/posts/ban-dat-san-xuat-phan-bon-kcn-phuoc-dong' },
    { id: 6, title: 'Đất bán KCN Phước Đông, Cần Đước Long An 1-3-5 hecta giá rẻ', url: '/posts/dat-ban-kcn-phuoc-dong-can-duoc-long-an' },
    { id: 7, title: 'Ưu, nhược điểm các hình thức đất thuê trong KCN & quy định bồi thường', url: '/posts/uu-nhuoc-diem-hinh-thuc-dat-thue-kcn' },
    { id: 8, title: 'Điều kiện có hiệu lực của hợp đồng chuyển nhượng QSDĐ khi có tranh chấp', url: '/posts/dieu-kien-hieu-luc-hop-dong-chuyen-nhuong-qsdd' },
    { id: 9, title: 'Bán tài sản gắn liền với đất thuê trả tiền hàng năm', url: '/posts/ban-tai-san-gan-lien-voi-dat-thue' },
    { id: 10, title: 'Từ năm 2024, tổ chức nước ngoài có được nhận chuyển nhượng đất nông nghiệp không?', url: '/posts/to-chuc-nuoc-ngoai-chuyen-nhuong-dat-nong-nghiep-2024' },
    { id: 11, title: 'Ban quản lý Khu công nghiệp Phước An, Đồng Nai – Liên hệ thuê mua đất, kho xưởng', url: '/posts/ban-quan-ly-kcn-phuoc-an-dong-nai' },
    { id: 12, title: 'Chính sách ưu đãi thu hút đầu tư KCN Phước An, Đồng Nai', url: '/posts/chinh-sach-uu-dai-thu-hut-dau-tu-kcn-phuoc-an' },
    { id: 13, title: 'Một tài sản bảo đảm cho nhiều khoản vay Ngân Hàng được không?', url: '/posts/mot-tai-san-bao-dam-cho-nhieu-khoan-vay' },
    { id: 14, title: 'Hợp đồng chuyển nhượng có phần/phần vốn góp có cần công chứng, chứng thực?', url: '/posts/hop-dong-chuyen-nhuong-co-phan-von-gop' },
    { id: 15, title: 'Mỹ áp thuế 46% lên hàng hóa Việt Nam, ngành nào bị ảnh hưởng', url: '/posts/my-ap-thue-hang-hoa-viet-nam' },
];

export default function BlogPostsData() {
    const [loading, setLoading] = useState(true);
    const [posts, setPosts] = useState<BlogPost[]>([]);

    useEffect(() => {
        // Simulate API fetch
        setTimeout(() => {
            setPosts(blogPostsData);
            setLoading(false);
        }, 1000);
    }, []);

    if (loading) {
        return <div className="p-4 text-center text-gray-500">Loading posts...</div>;
    }

    return (
        <div className="bg-gray-50 p-4 rounded-md shadow-sm max-w-md">
            <h2 className="text-lg font-bold mb-2 text-gray-800">BÀI VIẾT MỚI</h2>
            <div className="h-px bg-gray-300 mb-4"></div>
            <ul className="space-y-2">
                {posts.map(post => (
                    <li key={post.id} className="border-b border-gray-200 pb-2 last:border-0">
                        <a href={post.url} className="text-green-700 hover:text-green-900 hover:underline text-sm">
                            {post.title}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}