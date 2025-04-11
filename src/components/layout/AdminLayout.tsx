import { Layout, Menu } from 'antd'
import { Outlet, useNavigate } from 'react-router-dom'

const { Header, Content, Sider } = Layout

const AdminLayout = () => {
  const navigate = useNavigate()

  const menuItems = [
    {
      key: 'dashboard',
      label: 'Dashboard',
      onClick: () => navigate('/admin'),
    },
    // Thêm các menu item khác ở đây
  ]

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header className="bg-white px-4 flex items-center justify-between">
        <div className="text-xl font-bold">Admin Panel</div>
      </Header>
      <Layout>
        <Sider width={200} className="bg-white">
          <Menu
            mode="inline"
            defaultSelectedKeys={['dashboard']}
            style={{ height: '100%', borderRight: 0 }}
            items={menuItems}
          />
        </Sider>
        <Layout style={{ padding: '24px' }}>
          <Content>
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  )
}

export default AdminLayout 