import { Card, Col, Row, Statistic } from 'antd'
import {
  UserOutlined,
  ShopOutlined,
  DollarOutlined,
  EyeOutlined,
} from '@ant-design/icons'

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
      <Row gutter={[16, 16]}>
        <Col span={6}>
          <Card>
            <Statistic
              title="Tổng số người dùng"
              value={1128}
              prefix={<UserOutlined />}
            />
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <Statistic
              title="Tổng số kho xưởng"
              value={93}
              prefix={<ShopOutlined />}
            />
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <Statistic
              title="Doanh thu tháng"
              value={11280}
              prefix={<DollarOutlined />}
              suffix="đ"
            />
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <Statistic
              title="Lượt xem"
              value={8846}
              prefix={<EyeOutlined />}
            />
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default Dashboard 