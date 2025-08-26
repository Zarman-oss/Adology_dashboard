// App.tsx
import { Routes, Route, Navigate } from 'react-router';
import './App.css';
import Layout from '@/layout/layout';
import Dashboard from './components/Dashboard';
import Inspire from './pages/Inspire';

// quick stubs (jab tak real pages na ho)
const Brands = () => <div className='dashboard-container p-4'>Brands</div>;
const MarketIntelligence = () => (
  <div className='dashboard-container p-4'>Market Intelligence</div>
);
const AdSpend = () => <div className='dashboard-container p-4'>Ad Spend</div>;
const TrackBand = () => (
  <div className='dashboard-container p-4'>Track Band</div>
);
const BriefModule = () => (
  <div className='dashboard-container p-4'>Brief Module</div>
);
const Inquire = () => <div className='dashboard-container p-4'>Inquire</div>;
const Settings = () => <div className='dashboard-container p-4'>Settings</div>;

export default function App() {
  return (
    <Routes>
      {/* Layout with persistent sidebar */}
      <Route path='/' element={<Layout />}>
        {/* index = "/" */}
        <Route index element={<Dashboard />} />

        {/* your existing route */}
        <Route path='inspire' element={<Inspire />} />

        {/* stubs matching your sidebar links */}
        <Route path='brands' element={<Brands />} />
        <Route path='market-intelligence' element={<MarketIntelligence />} />
        <Route path='ad-spend' element={<AdSpend />} />
        <Route path='track-band' element={<TrackBand />} />
        <Route path='brief-module' element={<BriefModule />} />
        <Route path='inquire' element={<Inquire />} />
        <Route path='settings' element={<Settings />} />

        {/* fallback */}
        <Route path='*' element={<Navigate to='/' replace />} />
      </Route>
    </Routes>
  );
}
