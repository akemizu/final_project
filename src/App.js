import Layout from './components/layout/Layout';

import { Routes, Route } from 'react-router-dom';
import Home from './pages/homepage/Home';
import Reservation from './pages/reservation/Reservation';
import ConfirmReservation from './pages/reservation/ConfirmReservation';
import NotFound from './pages/not-found/NotFound';

function App() {
  return (
    <>
      <Layout >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/reservations" element={<Reservation />} />
          <Route
            path="/confirmedReservation"
            element={<ConfirmReservation />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
