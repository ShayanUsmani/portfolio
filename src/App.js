import React from 'react';
import 'antd/dist/antd.css';
import './App.css';
import AppHeader from './components/common/AppHeader'
import AppFooter from './components/common/AppFooter'

import Home from './view/Home'
import { Layout } from 'antd';

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <Layout className="mainLayout">
    <Header>
      <AppHeader />
    </Header>
    <Content>
      <Home />
    </Content>
    <Footer>
    <AppFooter />
    </Footer>
  </Layout>
  )
}



export default App;
