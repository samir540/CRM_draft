import { branchTableConfig } from '../../../config/admin-table';
import branches from '../../../data/admin/branches';

import AdminTable from '../../ui/AdminTable';

function Branches() {
  return (
    <div className='branches-page'>
      <h1 className='page-title'>All Branches</h1>
      <AdminTable data={branches} config={branchTableConfig} />
    </div>
  );
}

export default Branches;