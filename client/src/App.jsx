import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import ServiceDetail from './pages/ServiceDetail'
import Work from './pages/Work'
import WorkDetail from './pages/WorkDetail'
import Team from './pages/Team'
import Contact from './pages/Contact'
import FAQ from './pages/FAQ'
import NotFound from './pages/NotFound'
import Careers from './pages/Careers'
import Insights from './pages/Insights'
import InsightDetail from './pages/InsightDetail'
import { SiteContentProvider } from './store/SiteContent'
import TeamDetail from './pages/TeamDetail'

export default function App() {
  return (
    <SiteContentProvider><Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="services/:slug" element={<ServiceDetail />} />
        <Route path="work" element={<Work />} />
        <Route path="work/:slug" element={<WorkDetail />} />
        <Route path="team" element={<Team />} />
        <Route path="team/:slug" element={<TeamDetail />} />
        <Route path="faq" element={<FAQ />} />
        <Route path="contact" element={<Contact />} />
        <Route path="careers" element={<Careers />} />
        <Route path="insights" element={<Insights />} />
        <Route path="insights/:slug" element={<InsightDetail />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes></SiteContentProvider>
  )
}
