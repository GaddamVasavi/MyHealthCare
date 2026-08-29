import React, { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { authService } from './services/auth.service';
import { setCredentials, logout } from './store/slices/authSlice';

// Layouts
import { PublicLayout } from './components/layout/PublicLayout';
import { PatientLayout, DoctorLayout, AdminLayout } from './components/layout/PortalLayouts';
import { ProtectedRoute } from './components/layout/ProtectedRoute';

// Public Pages
import { HomePage } from './pages/public/HomePage';
import { AboutPage } from './pages/public/AboutPage';
import { ServicesPage } from './pages/public/ServicesPage';
import { DoctorsDirectoryPage } from './pages/public/DoctorsDirectoryPage';
import { ContactPage } from './pages/public/ContactPage';
import { LoginPage } from './pages/public/LoginPage';
import { RegisterPage } from './pages/public/RegisterPage';
import { ForgotPasswordPage, ResetPasswordPage } from './pages/public/PasswordRecoveryPages';

// Patient Pages
import { PatientDashboard } from './pages/patient/PatientDashboard';
import { BookAppointmentPage } from './pages/patient/BookAppointmentPage';
import { MyAppointmentsPage } from './pages/patient/MyAppointmentsPage';
import { VitalsTrackerPage } from './pages/patient/VitalsTrackerPage';
import { MedicalRecordsPage } from './pages/patient/MedicalRecordsPage';
import { PrescriptionsPage, MedicationsPage } from './pages/patient/PrescriptionsAndMedicationsPages';
import { LabReportsPage } from './pages/patient/LabReportsPage';
import { DocumentsPage } from './pages/patient/DocumentsPage';
import { BillingPage } from './pages/patient/BillingPage';
import { InsurancePage } from './pages/patient/InsurancePage';
import { PatientProfilePage, HealthProfilePage } from './pages/patient/ProfileAndHealthPages';
import { NotificationsPage } from './pages/patient/NotificationsPage';
import { RemoteMonitoringPage } from './pages/patient/RemoteMonitoringPage';

// Doctor Pages
import { DoctorDashboard } from './pages/doctor/DoctorDashboard';
import { DoctorSchedulePage } from './pages/doctor/DoctorSchedulePage';
import { DoctorAppointmentsPage } from './pages/doctor/DoctorAppointmentsPage';
import { DoctorPatientsPage } from './pages/doctor/DoctorPatientsPage';
import { DoctorClinicalRecordPage } from './pages/doctor/DoctorClinicalRecordPage';
import { DoctorPrescriptionPage, DoctorLabOrdersPage } from './pages/doctor/PrescriptionsAndLabPages';
import { ClinicalDecisionSupportPage } from './pages/doctor/ClinicalDecisionSupportPage';
import { DicomImagingViewerPage } from './pages/doctor/DicomImagingViewerPage';

// Admin Pages
import { AdminDashboard } from './pages/admin/AdminDashboard';
import { UserManagementPage } from './pages/admin/UserManagementPage';
import { AuditLogsPage } from './pages/admin/AuditLogsPage';
import { ReportsAnalyticsPage, AppointmentManagementPage, BillingManagementPage } from './pages/admin/ReportsAndManagementPages';
import { InteropHubPage } from './pages/admin/InteropHubPage';
import { PopulationHealthPage } from './pages/admin/PopulationHealthPage';

export const App: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    if (token) {
      authService
        .getMe()
        .then((res) => {
          if (res.data) {
            dispatch(
              setCredentials({
                user: res.data,
                patient: res.data.patient,
                doctor: res.data.doctor,
                accessToken: token,
              })
            );
          }
        })
        .catch(() => {
          dispatch(logout());
        });
    }
  }, [dispatch]);

  return (
    <Routes>
      {/* Public Pages */}
      <Route element={<PublicLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/doctors" element={<DoctorsDirectoryPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/reset-password" element={<ResetPasswordPage />} />
      </Route>

      {/* Patient Portal */}
      <Route
        path="/patient"
        element={
          <ProtectedRoute allowedRoles={['PATIENT']}>
            <PatientLayout />
          </ProtectedRoute>
        }
      >
        <Route path="dashboard" element={<PatientDashboard />} />
        <Route path="book-appointment" element={<BookAppointmentPage />} />
        <Route path="appointments" element={<MyAppointmentsPage />} />
        <Route path="vitals" element={<VitalsTrackerPage />} />
        <Route path="records" element={<MedicalRecordsPage />} />
        <Route path="prescriptions" element={<PrescriptionsPage />} />
        <Route path="medications" element={<MedicationsPage />} />
        <Route path="lab-reports" element={<LabReportsPage />} />
        <Route path="documents" element={<DocumentsPage />} />
        <Route path="telemetry" element={<RemoteMonitoringPage />} />
        <Route path="billing" element={<BillingPage />} />
        <Route path="insurance" element={<InsurancePage />} />
        <Route path="profile" element={<PatientProfilePage />} />
        <Route path="health-profile" element={<HealthProfilePage />} />
        <Route path="notifications" element={<NotificationsPage />} />
      </Route>

      {/* Doctor Portal */}
      <Route
        path="/doctor"
        element={
          <ProtectedRoute allowedRoles={['DOCTOR', 'ADMIN']}>
            <DoctorLayout />
          </ProtectedRoute>
        }
      >
        <Route path="dashboard" element={<DoctorDashboard />} />
        <Route path="schedule" element={<DoctorSchedulePage />} />
        <Route path="appointments" element={<DoctorAppointmentsPage />} />
        <Route path="patients" element={<DoctorPatientsPage />} />
        <Route path="clinical-notes" element={<DoctorClinicalRecordPage />} />
        <Route path="prescriptions" element={<DoctorPrescriptionPage />} />
        <Route path="lab-orders" element={<DoctorLabOrdersPage />} />
        <Route path="cds" element={<ClinicalDecisionSupportPage />} />
        <Route path="imaging" element={<DicomImagingViewerPage />} />
        <Route path="profile" element={<DoctorSchedulePage />} />
      </Route>

      {/* Admin Portal */}
      <Route
        path="/admin"
        element={
          <ProtectedRoute allowedRoles={['ADMIN']}>
            <AdminLayout />
          </ProtectedRoute>
        }
      >
        <Route path="dashboard" element={<AdminDashboard />} />
        <Route path="users" element={<UserManagementPage />} />
        <Route path="doctors" element={<UserManagementPage />} />
        <Route path="patients" element={<UserManagementPage />} />
        <Route path="appointments" element={<AppointmentManagementPage />} />
        <Route path="billing" element={<BillingManagementPage />} />
        <Route path="reports" element={<ReportsAnalyticsPage />} />
        <Route path="interop" element={<InteropHubPage />} />
        <Route path="population-health" element={<PopulationHealthPage />} />
        <Route path="audit-logs" element={<AuditLogsPage />} />
      </Route>

      {/* Fallback */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};
