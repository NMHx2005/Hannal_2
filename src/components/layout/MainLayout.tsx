import { Menu, Drawer } from 'antd'
import { Outlet, useNavigate } from 'react-router-dom'
import FooterPage from '../client/HomePage/Footer'
import './MainLayout.scss'
import { useState } from 'react'

const MainLayout = () => {
  const navigate = useNavigate()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const menuItems = [
    { key: '/', label: 'TRANG CHỦ' },
    {
      key: 'kho-xuong-ban',
      label: 'KHO XƯỞNG BÁN',
      children: [
        { key: 'ban-1', label: 'Kho xưởng bán Long An' },
        { key: 'ban-2', label: 'Kho xưởng bán Bình Dương' },
        { key: 'ban-3', label: 'Kho xưởng bán Đồng Nai' },
      ],
    },
    {
      key: 'kho-xuong-cho-thue',
      label: 'KHO XƯỞNG CHO THUÊ',
      children: [
        { key: 'thue-1', label: 'Kho xưởng cho thuê Long An' },
        { key: 'thue-2', label: 'Kho xưởng cho thuê Bình Dương' },
        { key: 'thue-3', label: 'Kho xưởng cho thuê Đồng Nai' },
      ],
    },
    { key: 'dat-cong-nghiep', label: 'ĐẤT CÔNG NGHIỆP' },
    {
      key: 'dich-vu-khac',
      label: 'DỊCH VỤ KHÁC',
      children: [
        { key: 'dv-1', label: 'Thiết kế nhà xưởng' },
        { key: 'dv-2', label: 'Xây dựng nhà xưởng' },
        { key: 'dv-3', label: 'Tư vấn đầu tư' },
      ],
    },
    { key: 'ky-gui', label: 'KÝ GỬI NHÀ XƯỞNG' },
    { key: 'tin-tuc', label: 'TIN THỊ TRƯỜNG' },
    { key: 'videos', label: 'VIDEOS' },
    { key: 'lien-he', label: 'LIÊN HỆ' },
  ]

  const handleMenuClick = (key: string) => {
    navigate(key)
    setMobileMenuOpen(false)
  }

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
            <a href="#">Giới thiệu</a>
            <a href="#">Thông tin KCN</a>
            <a href="#">Tuyển dụng</a>
            <a href="#">Chính sách hợp tác</a>
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
            items={menuItems}
            onClick={({ key }) => handleMenuClick(key)}
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
            items={menuItems}
            onClick={({ key }) => handleMenuClick(key)}
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

      <FooterPage />
      ©{new Date().getFullYear()} Hannal_2. All rights reserved.
    </div>
  )
}

export default MainLayout 