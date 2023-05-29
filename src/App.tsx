import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { Search } from './Search/Search';
import { Favourites } from './Favourites/Favourites';
import { NavVar } from './common/NavVar';
import { NotFound } from './common/NotFound';

function App() {
  return (
      <>
        <NavVar />
        <Routes>
          <Route element={<Search />} path="/" />
          <Route element={<Favourites />} path="/favourites" />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </>
  );
}

export default App;
