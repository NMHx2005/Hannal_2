import { Menu, Drawer } from 'antd';
import { Link, Outlet, useNavigate, useLocation } from 'react-router-dom';
import FooterPage from '../client/Footer/Footer';
import './MainLayout.scss';
import { useState, useEffect } from 'react';
import FooterLogo from '../client/Footer/FooterLogo';

const MainLayout = () => {
  const navigate = useNavigate();
  const location = useLocation(); // Thêm useLocation để lấy URL hiện tại
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedKeys, setSelectedKeys] = useState<string[]>([]);

  const menuItems = [
    { key: '/', label: 'TRANG CHỦ', path: '/' },
    {
      key: 'kho-xuong-ban',
      label: 'KHO XƯỞNG BÁN',
      path: '/kho-xuong-ban',
      children: [
        { key: 'ban-1', label: 'Kho xưởng bán Trong KCN', path: '/kho-xuong-ban/trong-kcn' },
        { key: 'ban-2', label: 'Kho xưởng bán Ngoài KCN', path: '/kho-xuong-ban/ngoai-kcn' }
      ],
    },
    {
      key: 'kho-xuong-cho-thue',
      label: 'KHO XƯỞNG CHO THUÊ',
      path: '/kho-xuong-cho-thue',
      children: [
        { key: 'thue-1', label: 'Kho xưởng thuê Trong KCN', path: '/kho-xuong-thue/trong-kcn' },
        { key: 'thue-2', label: 'Kho xưởng thuê Ngoài KCN', path: '/kho-xuong-thue/ngoai-kcn' }
      ],
    },
    { key: 'dat-cong-nghiep', label: 'ĐẤT CÔNG NGHIỆP', path: '/dat-cong-nghiep' },
    {
      key: 'dich-vu-khac',
      label: 'DỊCH VỤ KHÁC',
      path: '/dich-vu-khac',
      children: [
        { key: 'dv-1', label: 'Thiết kế nhà xưởng', path: '/dich-vu-khac/thiet-ke' },
        { key: 'dv-2', label: 'Xây dựng nhà xưởng', path: '/dich-vu-khac/xay-dung' },
        { key: 'dv-3', label: 'Tư vấn đầu tư', path: '/dich-vu-khac/tu-van' },
      ],
    },
    { key: 'ky-gui', label: 'KÝ GỬI NHÀ XƯỞNG', path: '/ky-gui' },
    { key: 'tin-tuc', label: 'TIN THỊ TRƯỜNG', path: '/tin-tuc' },
    { key: 'videos', label: 'VIDEOS', path: '/videos' },
    { key: 'lien-he', label: 'LIÊN HỆ', path: '/lien-he' },
  ];

  // Logic để xác định selectedKeys dựa trên URL hiện tại
  useEffect(() => {
    const currentPath = location.pathname;
    let activeKey = '';

    // Tìm menu item khớp với URL hiện tại
    for (const item of menuItems) {
      if (item.path === currentPath) {
        activeKey = item.key;
        break;
      }
      if (item.children) {
        const childMatch = item.children.find(child => child.path === currentPath);
        if (childMatch) {
          activeKey = item.key; // Nếu URL khớp với child, chọn key của parent
          break;
        }
      }
    }

    setSelectedKeys(activeKey ? [activeKey] : []);
  }, [location.pathname]);

  const renderMenuItems = (items: any[]) => {
    return items.map(item => {
      if (item.children) {
        return {
          key: item.key,
          label: (
            <span
              onClick={() => handleMenuClick(item.path)}
              style={{ cursor: 'pointer' }}
            >
              {item.label}
            </span>
          ),
          children: item.children.map((child: any) => ({
            key: child.key,
            label: child.label,
            onClick: () => handleMenuClick(child.path),
          })),
        };
      }
      return {
        key: item.key,
        label: item.label,
      };
    });
  };

  const handleMenuClick = (path: string) => {
    navigate(path);
    setMobileMenuOpen(false);
  };

  return (
    <div className="main-layout">
      {/* Top Bar */}
      <div className="top-bar">
        <div className="container">
          <div className="social-links">
            <a href="#"><i className="fa-brands fa-facebook"></i></a>
            <a href="#"><i className="fa-brands fa-instagram"></i></a>
            <a href="#"><i className="fa-brands fa-twitter"></i></a>
            <a href="#"><i className="fa-solid fa-phone"></i></a>
            <a href="#"><i className="fa-solid fa-envelope"></i></a>
            <a href="#"><i className="fa-brands fa-youtube"></i></a>
          </div>
          <div className="working-hours">
            <i className="fa-solid fa-clock"></i> Mon – Fri: 8:00 – 20:00
          </div>
          <div className="top-menu">
            <Link to="/gioi-thieu">Giới thiệu</Link>
            <Link to="/thong-tin-kcn">Thông tin KCN</Link>
            <Link to="/tuyen-dung">Tuyển dụng</Link>
            <Link to="/chinh-sach-hop-tac">Chính sách hợp tác</Link>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="main-header">
        <div className="container">
          <button className="mobile-menu-button" onClick={() => setMobileMenuOpen(true)}>
            <i className="fa-solid fa-bars"></i>
          </button>

          <div className="logo">
            <img src="/images/logo.png" alt="Kho Xưởng Đẹp" />
          </div>

          <div className="header-right">
            <div className="address">
              <i className="fa-solid fa-location-dot icon"></i>
              <div className="text">
                337 Đường Số 1, P. Bình Trị Đông B,
                Quận Bình Tân Tp.HCM (Khu Tên Lửa)
              </div>
            </div>
            <div className="social-buttons">
              <a href="#" className="btn zalo">CHAT ZALO</a>
              <a href="#" className="btn facebook">FACEBOOK</a>
              <a href="#" className="btn youtube">
                <i className="fa-brands fa-youtube"></i> YouTube
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Menu */}
      <div className="main-menu">
        <div className="container">
          <Menu
            mode="horizontal"
            items={renderMenuItems(menuItems)}
            selectedKeys={selectedKeys} // Thêm selectedKeys để đánh dấu active
            onClick={({ key }) => {
              const item = menuItems.find(i => i.key === key);
              if (item && !item.children) {
                handleMenuClick(item.path);
              }
            }}
          />
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <Drawer
        title="Menu"
        placement="left"
        onClose={() => setMobileMenuOpen(false)}
        open={mobileMenuOpen}
        className="mobile-menu-drawer"
        width={300}
      >
        <div className="drawer-content">
          <Menu
            mode="inline"
            items={renderMenuItems(menuItems)}
            selectedKeys={selectedKeys} // Thêm selectedKeys cho Drawer
            onClick={({ key }) => {
              const item = menuItems.find(i => i.key === key);
              if (item && !item.children) {
                handleMenuClick(item.path);
              }
            }}
          />
          <div className="drawer-contact">
            <div className="drawer-address">
              <i className="fa-solid fa-location-dot icon"></i>
              <div className="text">
                337 Đường Số 1, P. Bình Trị Đông B,
                Quận Bình Tân Tp.HCM (Khu Tên Lửa)
              </div>
            </div>
            <div className="drawer-social">
              <a href="#" className="btn zalo">CHAT ZALO</a>
              <a href="#" className="btn facebook">FACEBOOK</a>
              <a href="#" className="btn youtube">
                <i className="fa-brands fa-youtube"></i> YouTube
              </a>
            </div>
          </div>
        </div>
      </Drawer>

      {/* Main Content */}
      <main>
        <Outlet />
      </main>

      <div className="contact-buttons">
        <a href="tel:0966695386" className="contact-button hotline">
          Hotline
        </a>
        <a
          href="https://zalo.me/0966695386"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-button zalo"
        >
          Chat Zalo
        </a>
        <a
          href="https://www.facebook.com/yourpage"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-button facebook"
        >
          Chat Facebook
        </a>
      </div>
      <FooterLogo />
      <FooterPage />
      <div className="footerRight">
        <div className="container">
          ©{new Date().getFullYear()} Hannal_2. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default MainLayout;