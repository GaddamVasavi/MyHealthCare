import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store';
import { logout } from '../../store/slices/authSlice';
import { authService } from '../../services/auth.service';
import { HeartPulse, Bell, User, LogOut, Calendar, Activity, Shield } from 'lucide-react';
import { Button } from './Button';

export const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, isAuthenticated } = useSelector((state: RootState) => state.auth);
  const { unreadCount } = useSelector((state: RootState) => state.notifications);

  const handleLogout = async () => {
    await authService.logout();
    dispatch(logout());
    navigate('/login');
  };

  const getDashboardLink = () => {
    if (!user) return '/login';
    if (user.role === 'PATIENT') return '/patient/dashboard';
    if (user.role === 'DOCTOR') return '/doctor/dashboard';
    if (user.role === 'ADMIN') return '/admin/dashboard';
    return '/';
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200/80 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2.5">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-primary-600 to-teal-500 text-white shadow-md shadow-primary-500/20">
            <HeartPulse className="h-6 w-6" />
          </div>
          <div>
            <span className="text-lg font-bold tracking-tight text-slate-900">
              My<span className="text-primary-600">Health</span>Care
            </span>
            <span className="hidden sm:inline-block ml-2 text-[10px] font-semibold uppercase tracking-wider text-teal-600 bg-teal-50 px-1.5 py-0.5 rounded border border-teal-200/50">
              Clinical Care
            </span>
          </div>
        </Link>

        {/* Public Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
          <Link to="/" className="hover:text-primary-600 transition-colors">Home</Link>
          <Link to="/doctors" className="hover:text-primary-600 transition-colors">Find Doctors</Link>
          <Link to="/services" className="hover:text-primary-600 transition-colors">Services</Link>
          <Link to="/about" className="hover:text-primary-600 transition-colors">About</Link>
          <Link to="/contact" className="hover:text-primary-600 transition-colors">Contact</Link>
        </nav>

        {/* Auth / Action CTA */}
        <div className="flex items-center gap-3">
          {isAuthenticated && user ? (
            <div className="flex items-center gap-3">
              {user.role === 'PATIENT' && (
                <Link
                  to="/patient/notifications"
                  className="relative p-2 text-slate-500 hover:text-slate-700 hover:bg-slate-100 rounded-full transition-colors"
                >
                  <Bell className="h-5 w-5" />
                  {unreadCount > 0 && (
                    <span className="absolute top-1 right-1 flex h-4 w-4 items-center justify-center rounded-full bg-rose-500 text-[10px] font-bold text-white">
                      {unreadCount}
                    </span>
                  )}
                </Link>
              )}

              <Link to={getDashboardLink()}>
                <Button variant="outline" size="sm" leftIcon={<Activity className="h-4 w-4 text-primary-600" />}>
                  {user.role === 'PATIENT' ? 'Patient Portal' : user.role === 'DOCTOR' ? 'Doctor Portal' : 'Admin Panel'}
                </Button>
              </Link>

              <button
                onClick={handleLogout}
                title="Log out"
                className="p-2 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors"
              >
                <LogOut className="h-5 w-5" />
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-2.5">
              <Link to="/login">
                <Button variant="ghost" size="sm">Sign In</Button>
              </Link>
              <Link to="/register">
                <Button variant="primary" size="sm">Get Started</Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
