import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { HeartPulse, Lock, Mail, ArrowRight } from 'lucide-react';
import { authService } from '../../services/auth.service';
import { setCredentials } from '../../store/slices/authSlice';
import { Input } from '../../components/common/Input';
import { Button } from '../../components/common/Button';
import { Alert } from '../../components/common/Alert';

const loginSchema = z.object({
  email: z.string().email('Valid email is required'),
  password: z.string().min(1, 'Password is required'),
});

type LoginFormValues = z.infer<typeof loginSchema>;

export const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginFormValues) => {
    setIsLoading(true);
    setErrorMessage(null);
    try {
      const response = await authService.login(data);
      const { user, patient, doctor, accessToken, refreshToken } = response.data;
      dispatch(setCredentials({ user, patient, doctor, accessToken, refreshToken }));

      if (user.role === 'PATIENT') navigate('/patient/dashboard');
      else if (user.role === 'DOCTOR') navigate('/doctor/dashboard');
      else if (user.role === 'ADMIN') navigate('/admin/dashboard');
      else navigate('/');
    } catch (err: any) {
      setErrorMessage(err.response?.data?.message || 'Login failed. Please verify credentials.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleQuickLogin = (role: 'admin' | 'doctor' | 'patient') => {
    if (role === 'admin') {
      setValue('email', 'admin@myhealthcare.com');
      setValue('password', 'Admin@123456');
    } else if (role === 'doctor') {
      setValue('email', 'dr.smith@myhealthcare.com');
      setValue('password', 'Password@123');
    } else if (role === 'patient') {
      setValue('email', 'john.doe@patient.com');
      setValue('password', 'Password@123');
    }
  };

  return (
    <div className="flex min-h-[calc(100vh-8rem)] items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-6 bg-white p-8 rounded-3xl border border-slate-200 shadow-xl">
        <div className="text-center space-y-2">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-600 text-white shadow-md">
            <HeartPulse className="h-7 w-7" />
          </div>
          <h2 className="text-2xl font-bold text-slate-900">Sign in to MyHealthCare</h2>
          <p className="text-xs text-slate-500">
            Access your patient medical records, doctor dashboard, or administration portal
          </p>
        </div>

        {errorMessage && (
          <Alert variant="danger" onDismiss={() => setErrorMessage(null)}>
            {errorMessage}
          </Alert>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <Input
            label="Email Address"
            type="email"
            placeholder="name@domain.com"
            leftIcon={<Mail className="h-4 w-4" />}
            error={errors.email?.message}
            {...register('email')}
          />

          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label className="block text-sm font-medium text-slate-700">Password</label>
              <Link to="/forgot-password" className="text-xs font-semibold text-primary-600 hover:text-primary-700">
                Forgot password?
              </Link>
            </div>
            <Input
              type="password"
              placeholder="••••••••"
              leftIcon={<Lock className="h-4 w-4" />}
              error={errors.password?.message}
              {...register('password')}
            />
          </div>

          <Button type="submit" variant="primary" className="w-full" size="lg" isLoading={isLoading}>
            Sign In
          </Button>
        </form>

        {/* Demo Quick Logins */}
        <div className="pt-4 border-t border-slate-100 space-y-2">
          <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 text-center">
            Demo 1-Click Credentials
          </p>
          <div className="grid grid-cols-3 gap-2">
            <button
              type="button"
              onClick={() => handleQuickLogin('patient')}
              className="px-2 py-1.5 bg-slate-50 hover:bg-slate-100 rounded-lg text-xs font-medium text-slate-700 border border-slate-200 transition-colors"
            >
              Patient Demo
            </button>
            <button
              type="button"
              onClick={() => handleQuickLogin('doctor')}
              className="px-2 py-1.5 bg-slate-50 hover:bg-slate-100 rounded-lg text-xs font-medium text-slate-700 border border-slate-200 transition-colors"
            >
              Doctor Demo
            </button>
            <button
              type="button"
              onClick={() => handleQuickLogin('admin')}
              className="px-2 py-1.5 bg-slate-50 hover:bg-slate-100 rounded-lg text-xs font-medium text-slate-700 border border-slate-200 transition-colors"
            >
              Admin Demo
            </button>
          </div>
        </div>

        <div className="text-center text-xs text-slate-500 pt-2">
          Don't have an account?{' '}
          <Link to="/register" className="font-semibold text-primary-600 hover:text-primary-700">
            Create an Account
          </Link>
        </div>
      </div>
    </div>
  );
};
