import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Layout from './ui_elements/main_layout.js';
import ErrorPage from './pages/error_page.js';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
window.onerror = () => {
  // Prevents React from showing the error overlay
  return true;
};
window.addEventListener('error', (e) => {
  e.preventDefault(); // Suppresses the overlay
});
function BuggyComponent() {
  throw new Error("Intentional Error for Testing");
  return <div>This will never render.</div>;
}

class ErrorBoundary extends React.Component {
  constructor(props){
    super(props);
    this.state = {hasError: false, error: "", errorInfo: ""};
  }
  static getDerivedStateFromError(error){
    return {hasError: true, error: error.toString()};
  }
  componentDidCatch(error, info){
    return {error: error.toString(), errorInfo: info.toString()}
  }
  render(){
    if(this.state.hasError){
      return (<div style={{textAlign: "center"}}><h1>Something went wrong.</h1>
      <p>The webpage has encountered an uncaught error and must be restarted.</p>
      <p>{this.state.error} - Extra info: {this.state.errorInfo}</p>
      <p>Report the error above to Palo, and reload the page.</p>
      <p>Sorry for the troubles!</p>
      <a href="javascript:window.location.reload()">Reload the page</a>
      </div>);
    }
    return this.props.children;
  }
}

function PageView(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index path="/" element={<Home/>}></Route>
        </Route>
        <Route path="*" element={<Layout><ErrorPage /></Layout>}></Route>
      </Routes>
    </BrowserRouter>
  )
}
root.render(<ErrorBoundary><PageView/></ErrorBoundary>);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
