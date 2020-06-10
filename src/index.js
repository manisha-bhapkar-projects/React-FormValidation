import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import Login from './Component/login';
import Forms from './component/form';
import 'bootstrap/dist/css/bootstrap.css';


class Show extends React.Component
{
  
  
  render()
  {
    return(
        <div>
             <Forms/>

        </div>
    ) ;
  }
}

ReactDOM.render(<Show/>, document.getElementById('root'));
// ReactDOM.render(<React.StrictMode><App /></React.StrictMode>,document.getElementById('root'));

