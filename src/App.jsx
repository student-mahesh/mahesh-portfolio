import { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Loader from './components/ui/Loader'
import ScrollProgressBar from './components/ui/ScrollProgressBar'
import BackToTop from './components/ui/BackToTop'
import CustomCursor from './components/ui/CustomCursor'
import Home from './pages/Home'
import NotFound from './pages/NotFound'

export default function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 900)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen bg-[var(--color-bg)] text-[var(--color-text)] overflow-x-hidden">
      <Loader show={loading} />
      <CustomCursor />
      <ScrollProgressBar />
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
      <BackToTop />

      <ToastContainer
        position="bottom-right"
        theme="dark"
        toastClassName="font-mono-alt text-sm"
      />
    </div>
  )
}
