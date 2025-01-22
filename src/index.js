import ReactDOM from 'react-dom/client';
import './index.css';
import Btn from './modules/Button';
import Input from './modules/Input';

const divRoot = document.getElementById('root');
const root = ReactDOM.createRoot(divRoot);
root.render(
<div>
  <h2>My App</h2>
  <br/>
  <Input/>
  <Btn/>
</div>
);
