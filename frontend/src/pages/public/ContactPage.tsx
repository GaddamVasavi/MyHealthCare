import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';
import { Input } from '../../components/common/Input';
import { Button } from '../../components/common/Button';
import { Alert } from '../../components/common/Alert';

export const ContactPage: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 space-y-12">
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">Contact MyHealthCare Support</h1>
        <p className="text-base text-slate-600 leading-relaxed">
          Need clinical assistance, appointment coordination, or technical support? Our care team is available 24/7.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-5xl mx-auto">
        <div className="lg:col-span-5 space-y-6 bg-slate-900 text-white p-8 rounded-2xl">
          <h3 className="text-xl font-bold">Get In Touch</h3>
          <p className="text-xs text-slate-300 leading-relaxed">
            Our medical staff and administrative support specialists will address your questions promptly.
          </p>

          <div className="space-y-4 pt-4 text-xs text-slate-300">
            <div className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-primary-400" />
              <div>
                <p className="font-semibold text-white">Direct Hotline</p>
                <p>+1 (800) 555-CARE</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-teal-400" />
              <div>
                <p className="font-semibold text-white">Email Inquiries</p>
                <p>support@myhealthcare.internal</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="h-5 w-5 text-rose-400" />
              <div>
                <p className="font-semibold text-white">Headquarters</p>
                <p>100 Healthcare Way, Suite 400, Boston, MA</p>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
          {submitted ? (
            <Alert variant="success" title="Inquiry Received">
              Thank you for contacting MyHealthCare. A representative from our care coordinator team will respond shortly.
            </Alert>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                label="Full Name"
                required
                placeholder="John Doe"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
              <Input
                label="Email Address"
                type="email"
                required
                placeholder="john.doe@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
              <Input
                label="Subject"
                required
                placeholder="Appointment Query / Technical Assistance"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              />
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">Message Content</label>
                <textarea
                  rows={4}
                  required
                  className="block w-full rounded-lg border border-slate-300 py-2.5 px-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
                  placeholder="How can we assist you?"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>
              <Button type="submit" variant="primary" className="w-full" rightIcon={<Send className="h-4 w-4" />}>
                Send Message
              </Button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
