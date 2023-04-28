import { Route, Routes } from 'react-router-dom';
import { LoginPage } from '../pages/LoginPage';
import { Layout } from './Layout';
import { BoardPage } from 'pages/BoardPage';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="login" element={<LoginPage />} />
        <Route path="dashboard" element={<BoardPage />} />

        {/* <Route path="*" element={<Navigate to='/' replace />}/> */}
      </Route>
    </Routes>
  );
};
