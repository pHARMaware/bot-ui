import React, { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './home';
import AuthenticatePage from './authenticate';
import UnauthenticatedPage from './unauthenticated';
import GuildPage from './guild';
import NotFoundPage from './not-found';

const Pages: FC = function Pages() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/authenticate/:sessionId" element={<AuthenticatePage />} />
      <Route path="/unauthenticated" element={<UnauthenticatedPage />} />
      <Route path="/guild" element={<GuildPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default Pages;
