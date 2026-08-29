import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HeartPulse, Mail, ArrowLeft, Send } from 'lucide-react';
import { authService } from '../../services/auth.service';
import { Input } from '../../components/common/Input';
import { Button } from '../../components/common/Button';
import { Alert } from '../../components/common/Alert';

export const ForgotPasswordPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage(null);
    try {
      await authService.forgotPassword(email);
      setSubmitted(true);
    } catch (err: any) {
      setErrorMessage(err.response?.data?.message || 'Failed to send password reset email.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex min-h-[calc(100vh-8rem)] items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-6 bg-white p-8 rounded-3xl border border-slate-200 shadow-xl">
        <div className="text-center space-y-2">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-600 text-white shadow-md">
            <HeartPulse className="h-7 w-7" />
          </div>
          <h2 className="text-2xl font-bold text-slate-900">Reset Your Password</h2>
          <p className="text-xs text-slate-500">
            Enter your registered account email and we will dispatch password recovery instructions.
          </p>
        </div>

        {errorMessage && (
          <Alert variant="danger" onDismiss={() => setErrorMessage(null)}>
            {errorMessage}
          </Alert>
        )}

        {submitted ? (
          <div className="space-y-4">
            <Alert variant="success" title="Instructions Dispatched">
              If an account with that email exists, password reset instructions and security tokens have been dispatched.
            </Alert>
            <div className="text-center pt-2">
              <Link to="/reset-password">
                <Button variant="outline" size="sm" className="w-full">
                  Enter Password Reset Token
                </Button>
              </Link>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              label="Email Address"
              type="email"
              required
              placeholder="name@domain.com"
              leftIcon={<Mail className="h-4 w-4" />}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <Button type="submit" variant="primary" className="w-full" size="lg" isLoading={isLoading} rightIcon={<Send className="h-4 w-4" />}>
              Send Reset Instructions
            </Button>
          </form>
        )}

        <div className="text-center text-xs text-slate-500 pt-2">
          <Link to="/login" className="inline-flex items-center gap-1 font-semibold text-primary-600 hover:text-primary-700">
            <ArrowLeft className="h-3.5 w-3.5" /> Back to Sign In
          </Link>
        </div>
      </div>
    </div>
  );
};

export const ResetPasswordPage: React.FC = () => {
  const [token, setToken] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage(null);
    try {
      await authService.resetPassword({ token, newPassword });
      setSubmitted(true);
    } catch (err: any) {
      setErrorMessage(err.response?.data?.message || 'Invalid or expired password reset token.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex min-h-[calc(100vh-8rem)] items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-6 bg-white p-8 rounded-3xl border border-slate-200 shadow-xl">
        <div className="text-center space-y-2">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-600 text-white shadow-md">
            <HeartPulse className="h-7 w-7" />
          </div>
          <h2 className="text-2xl font-bold text-slate-900">Set New Password</h2>
          <p className="text-xs text-slate-500">
            Enter your reset security token and choose a new password.
          </p>
        </div>

        {errorMessage && (
          <Alert variant="danger" onDismiss={() => setErrorMessage(null)}>
            {errorMessage}
          </Alert>
        )}

        {submitted ? (
          <div className="space-y-4">
            <Alert variant="success" title="Password Reset Successful">
              Your password has been reset successfully. You can now sign in with your new password.
            </Alert>
            <div className="text-center pt-2">
              <Link to="/login">
                <Button variant="primary" size="lg" className="w-full">
                  Proceed to Sign In
                </Button>
              </Link>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              label="Reset Security Token"
              required
              placeholder="Paste security token from email"
              value={token}
              onChange={(e) => setToken(e.target.value)}
            />

            <Input
              label="New Password (min 8 chars)"
              type="password"
              required
              placeholder="••••••••"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />

            <Button type="submit" variant="primary" className="w-full" size="lg" isLoading={isLoading}>
              Update Password
            </Button>
          </form>
        )}

        <div className="text-center text-xs text-slate-500 pt-2">
          <Link to="/login" className="inline-flex items-center gap-1 font-semibold text-primary-600 hover:text-primary-700">
            <ArrowLeft className="h-3.5 w-3.5" /> Back to Sign In
          </Link>
        </div>
      </div>
    </div>
  );
};
