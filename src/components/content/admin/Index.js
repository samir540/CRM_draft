import index from '../../../data/admin/index';
import '../../../styles/admin/Index.css';

function Index() {
  return (
    <div className='admin-index'>
      {index.map(d => {
        return (
          <div
            key={d.id}
            className='admin-index-item'
            style={{ backgroundImage: d.gradient }}
          >
            <span className='admin-index-item-label'>{d.label}</span>
            <span className='admin-index-item-count'>{d.count}</span>
          </div>
        );
      })}
    </div>
  );
}

export default Index;
