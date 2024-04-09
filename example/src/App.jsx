import AvatarFractal from 'react-avatar-fractal';
import { list } from './data';

export default function App() {
  return (
    <ul style={{ width: '320px', margin: '40px auto', padding: 0, border: '1px solid #eee', borderRadius: 10 }}>
      {list.map((item) => (
        <li
          key={item}
          style={{
            display: 'flex',
            alignItems: 'center',
            borderBottom: '1px solid #eee',
            padding: '8px',
            backgroundColor: '#fafafa',
          }}
        >
          <AvatarFractal
            value={item}
            size={80}
            style={{ borderRadius: '50%', border: '1px solid #eee', marginRight: '16px' }}
          />
          <b>{item}</b>
        </li>
      ))}
    </ul>
  );
}
