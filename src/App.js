import Authen from './pages/authentication/authen'
import { Layout } from "antd";
import { BrowserRouter as Router, Routes, Route  } from "react-router-dom";
import './App.css';

function App() {
  const { Content } = Layout;
  return (
    <div className="App">
      <Layout >
          <Content style={{ padding: "10%", height: "100%", minHeight: "100vh", width: "100%" }}>
              <Router>
                <Routes>
                  <Route path="/" element={<Authen />} />
                </Routes>
            </Router>
          </Content>
      </Layout>
    </div>
  );
}

export default App;
