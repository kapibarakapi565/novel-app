import React from 'react'; //ReactパッケージからReactという名前のものを取り込む、という命令。JSXを使うために必要で、Reactのさまざまな機能にアクセスするための準備
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; //react-router-domというライブラリから3つの部品をアプリに取り込んでいる。
import NovelIndex from './components/NovelIndex';
import ChapterIndex from './components/ChapterIndex';
import ContentEdit from './components/ContentEdit';
import NovelList from './components/NovelList';


function App() {

  return (
    <Router>
      <Routes>
        {/* 小説一覧ページ */}
        <Route path='/' element={<NovelIndex/>} />
        
        {/* 章パート一覧 */}
        <Route path='/chapter/:novelId' element={<ChapterIndex/>} />

        {/* チャプター編集画面 */}
        <Route path='/edit/:chapterId' element={<ContentEdit/>}/>
        <Route path='/novel/:listId' element={<NovelList/>}/>
      </Routes>
    </Router>
  );
}

export default App;
