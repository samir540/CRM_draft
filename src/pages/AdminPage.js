import { Routes, Route, Navigate } from "react-router-dom";

import AdminLayout from "../components/layout/AdminLayout";

import Index from "../components/content/admin/Index";
import Users from "../components/content/admin/Users";
import Roles from "../components/content/admin/Roles";
import Branches from "../components/content/admin/Branches";

function AdminPage() {
  return (
    <AdminLayout>
      <Routes>
        <Route path="/" element={<Navigate replace to="index" />} />
        <Route path="index" element={<Index />} />
        <Route path="users" element={<Users />} />
        <Route path="roles" element={<Roles />} />
        <Route path="branches" element={<Branches />} />
      </Routes>
    </AdminLayout>
  );
}

export default AdminPage;
