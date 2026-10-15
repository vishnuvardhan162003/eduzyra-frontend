import { Routes, Route } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import MainLayout from './components/layout/MainLayout'
import AdminLayout from './components/layout/AdminLayout'
import ProtectedRoute from './routes/ProtectedRoute'
import RoleRoute from './routes/RoleRoute'
import StudentSiteGuard from './routes/StudentSiteGuard'
import StudentOnly from './routes/StudentOnly'

import Home from './pages/Home'
import Courses from './pages/Courses'
import CourseDetail from './pages/CourseDetail'
import About from './pages/About'
import Contact from './pages/Contact'
import Feedback from './pages/Feedback'
import Login from './pages/Login'
import AdminLogin from './pages/AdminLogin'
import Signup from './pages/Signup'
import ForgotPassword from './pages/ForgotPassword'
import ResetPassword from './pages/ResetPassword'
import Profile from './pages/Profile'
import Dashboard from './pages/Dashboard'
import InstructorDashboard from './pages/InstructorDashboard'
import AdminDashboard from './pages/AdminDashboard'
import Checkout from './pages/Checkout'
import PaymentSuccess from './pages/PaymentSuccess'
import PaymentFailed from './pages/PaymentFailed'
import CoursePlayer from './pages/CoursePlayer'
import Certificate from './pages/Certificate'
import VerifyCertificate from './pages/VerifyCertificate'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <AuthProvider>
      <Routes>
        {/* Admin login (standalone, no student navbar) */}
        <Route path="/admin/login" element={<AdminLogin />} />

        {/* Admin panel (own layout, admin only) */}
        <Route
          element={
            <RoleRoute allow={['admin']}>
              <AdminLayout />
            </RoleRoute>
          }
        >
          <Route path="/admin" element={<AdminDashboard />} />
        </Route>

        {/* Student site (admin ki block, "View as student" preview lo matrame allow) */}
        <Route element={<StudentSiteGuard />}>
          <Route element={<MainLayout />}>
            {/* Public */}
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/courses/:courseId" element={<CourseDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/feedback" element={<Feedback />} />
            <Route path="/verify-certificate" element={<VerifyCertificate />} />
            <Route path="/certificate/:certificateId" element={<Certificate />} />

            {/* Auth */}
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/reset-password" element={<ResetPassword />} />

            {/* Student only (admin ki block) */}
            <Route
              path="/profile"
              element={
                <ProtectedRoute>
                  <StudentOnly>
                    <Profile />
                  </StudentOnly>
                </ProtectedRoute>
              }
            />
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <StudentOnly>
                    <Dashboard />
                  </StudentOnly>
                </ProtectedRoute>
              }
            />
            <Route
              path="/checkout/:courseId"
              element={
                <ProtectedRoute>
                  <StudentOnly>
                    <Checkout />
                  </StudentOnly>
                </ProtectedRoute>
              }
            />
            <Route
              path="/payment/success"
              element={
                <ProtectedRoute>
                  <StudentOnly>
                    <PaymentSuccess />
                  </StudentOnly>
                </ProtectedRoute>
              }
            />
            <Route
              path="/payment/failed"
              element={
                <ProtectedRoute>
                  <StudentOnly>
                    <PaymentFailed />
                  </StudentOnly>
                </ProtectedRoute>
              }
            />
            <Route
              path="/learn/:courseId"
              element={
                <ProtectedRoute>
                  <StudentOnly>
                    <CoursePlayer />
                  </StudentOnly>
                </ProtectedRoute>
              }
            />

            {/* Instructor only */}
            <Route
              path="/instructor"
              element={
                <RoleRoute allow={['instructor']}>
                  <InstructorDashboard />
                </RoleRoute>
              }
            />

            <Route path="*" element={<NotFound />} />
          </Route>
        </Route>
      </Routes>
    </AuthProvider>
  )
}