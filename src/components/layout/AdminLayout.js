import AdminNavigation from '../navigation/AdminNavigation';

import '../../styles/admin/Layout.css';

function AdminLayout({ children }) {
  return (
    <div className='admin-layout'>
      <div className='admin-sider'>
        <AdminNavigation />
      </div>
      <div className='admin-content'>{children}</div>
    </div>
  );
}

export default AdminLayout;
