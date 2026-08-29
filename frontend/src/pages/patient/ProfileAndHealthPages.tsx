import React, { useEffect, useState } from 'react';
import { User, Phone, MapPin, Heart, Shield, Save } from 'lucide-react';
import { patientService } from '../../services/patient.service';
import { Patient } from '../../types';
import { Card } from '../../components/common/Card';
import { Input } from '../../components/common/Input';
import { Select } from '../../components/common/Select';
import { Button } from '../../components/common/Button';
import { Alert } from '../../components/common/Alert';
import { BLOOD_GROUP_OPTIONS, GENDER_OPTIONS } from '../../constants';

export const PatientProfilePage: React.FC = () => {
  const [patient, setPatient] = useState<Patient | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    gender: 'MALE',
    bloodGroup: 'UNKNOWN',
    heightCm: '',
    weightKg: '',
    occupation: '',
    street: '',
    city: '',
    state: '',
    postalCode: '',
    emergencyContactName: '',
    emergencyContactRelationship: '',
    emergencyContactPhone: '',
  });

  useEffect(() => {
    patientService.getMyProfile().then((res) => {
      if (res.data) {
        const p = res.data;
        setPatient(p);
        setFormData({
          firstName: p.firstName || '',
          lastName: p.lastName || '',
          phone: p.phone || '',
          gender: p.gender || 'MALE',
          bloodGroup: p.bloodGroup || 'UNKNOWN',
          heightCm: p.heightCm ? String(p.heightCm) : '',
          weightKg: p.weightKg ? String(p.weightKg) : '',
          occupation: p.occupation || '',
          street: p.address?.street || '',
          city: p.address?.city || '',
          state: p.address?.state || '',
          postalCode: p.address?.postalCode || '',
          emergencyContactName: p.emergencyContact?.contactName || '',
          emergencyContactRelationship: p.emergencyContact?.relationship || '',
          emergencyContactPhone: p.emergencyContact?.phone || '',
        });
      }
      setLoading(false);
    });
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    try {
      await patientService.updateProfile({
        ...formData,
        heightCm: formData.heightCm ? parseFloat(formData.heightCm) : undefined,
        weightKg: formData.weightKg ? parseFloat(formData.weightKg) : undefined,
      });
      setMessage('Profile updated successfully.');
    } catch (err) {
      console.error(err);
    } finally {
      setSaving(false);
    }
  };

  if (loading) return <div className="text-center py-12 text-slate-400 text-xs">Loading profile...</div>;

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Patient Personal Profile</h1>
        <p className="text-xs text-slate-500 mt-1">Manage contact info, home address, and emergency contact details.</p>
      </div>

      {message && <Alert variant="success" onDismiss={() => setMessage(null)}>{message}</Alert>}

      <form onSubmit={handleSubmit} className="space-y-6">
        <Card title="Basic Demographics">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Input
              label="First Name"
              required
              value={formData.firstName}
              onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
            />
            <Input
              label="Last Name"
              required
              value={formData.lastName}
              onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
            />
            <Input
              label="Phone Number"
              required
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            />
            <Select
              label="Gender"
              options={GENDER_OPTIONS}
              value={formData.gender}
              onChange={(e) => setFormData({ ...formData, gender: e.target.value as any })}
            />
            <Select
              label="Blood Group"
              options={BLOOD_GROUP_OPTIONS}
              value={formData.bloodGroup}
              onChange={(e) => setFormData({ ...formData, bloodGroup: e.target.value as any })}
            />
            <Input
              label="Occupation"
              placeholder="e.g. Software Engineer"
              value={formData.occupation}
              onChange={(e) => setFormData({ ...formData, occupation: e.target.value })}
            />
            <Input
              label="Height (cm)"
              type="number"
              value={formData.heightCm}
              onChange={(e) => setFormData({ ...formData, heightCm: e.target.value })}
            />
            <Input
              label="Weight (kg)"
              type="number"
              step="0.1"
              value={formData.weightKg}
              onChange={(e) => setFormData({ ...formData, weightKg: e.target.value })}
            />
          </div>
        </Card>

        <Card title="Residential Address">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="sm:col-span-2">
              <Input
                label="Street Address"
                value={formData.street}
                onChange={(e) => setFormData({ ...formData, street: e.target.value })}
              />
            </div>
            <Input
              label="City"
              value={formData.city}
              onChange={(e) => setFormData({ ...formData, city: e.target.value })}
            />
            <Input
              label="State / Province"
              value={formData.state}
              onChange={(e) => setFormData({ ...formData, state: e.target.value })}
            />
            <Input
              label="Postal Code"
              value={formData.postalCode}
              onChange={(e) => setFormData({ ...formData, postalCode: e.target.value })}
            />
          </div>
        </Card>

        <Card title="Emergency Contact">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Input
              label="Contact Name"
              placeholder="e.g. Mary Doe"
              value={formData.emergencyContactName}
              onChange={(e) => setFormData({ ...formData, emergencyContactName: e.target.value })}
            />
            <Input
              label="Relationship"
              placeholder="e.g. Spouse, Parent"
              value={formData.emergencyContactRelationship}
              onChange={(e) => setFormData({ ...formData, emergencyContactRelationship: e.target.value })}
            />
            <Input
              label="Emergency Phone"
              placeholder="+1-555-0199"
              value={formData.emergencyContactPhone}
              onChange={(e) => setFormData({ ...formData, emergencyContactPhone: e.target.value })}
            />
          </div>
        </Card>

        <div className="flex justify-end">
          <Button type="submit" variant="primary" size="lg" isLoading={saving} leftIcon={<Save className="h-4 w-4" />}>
            Save Profile Changes
          </Button>
        </div>
      </form>
    </div>
  );
};

export const HealthProfilePage: React.FC = () => {
  const [patient, setPatient] = useState<Patient | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  const [healthData, setHealthData] = useState({
    smokingStatus: 'NEVER',
    alcoholConsumption: 'NEVER',
    exerciseHabits: 'MODERATE',
    dietaryPreferences: 'NON_VEGETARIAN',
    chronicDiseases: '',
    previousSurgeries: '',
    familyMedicalHistory: '',
    notes: '',
  });

  const [allergyInput, setAllergyInput] = useState({ allergen: '', reaction: '', severity: 'MODERATE' });
  const [conditionInput, setConditionInput] = useState({ name: '', icdCode: '', status: 'ACTIVE' });

  const loadData = async () => {
    setLoading(true);
    try {
      const res = await patientService.getMyProfile();
      if (res.data) {
        setPatient(res.data);
        if (res.data.healthProfile) {
          const hp = res.data.healthProfile;
          setHealthData({
            smokingStatus: hp.smokingStatus || 'NEVER',
            alcoholConsumption: hp.alcoholConsumption || 'NEVER',
            exerciseHabits: hp.exerciseHabits || 'MODERATE',
            dietaryPreferences: hp.dietaryPreferences || 'NON_VEGETARIAN',
            chronicDiseases: hp.chronicDiseases || '',
            previousSurgeries: hp.previousSurgeries || '',
            familyMedicalHistory: hp.familyMedicalHistory || '',
            notes: hp.notes || '',
          });
        }
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleSaveHealthProfile = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    try {
      await patientService.updateHealthProfile(healthData);
      setMessage('Health background updated successfully.');
    } catch (err) {
      console.error(err);
    } finally {
      setSaving(false);
    }
  };

  const handleAddAllergy = async () => {
    if (!allergyInput.allergen) return;
    try {
      await patientService.addAllergy(allergyInput);
      setAllergyInput({ allergen: '', reaction: '', severity: 'MODERATE' });
      loadData();
    } catch (err) {
      console.error(err);
    }
  };

  const handleDeleteAllergy = async (id: string) => {
    try {
      await patientService.deleteAllergy(id);
      loadData();
    } catch (err) {
      console.error(err);
    }
  };

  const handleAddCondition = async () => {
    if (!conditionInput.name) return;
    try {
      await patientService.addCondition(conditionInput);
      setConditionInput({ name: '', icdCode: '', status: 'ACTIVE' });
      loadData();
    } catch (err) {
      console.error(err);
    }
  };

  const handleDeleteCondition = async (id: string) => {
    try {
      await patientService.deleteCondition(id);
      loadData();
    } catch (err) {
      console.error(err);
    }
  };

  if (loading) return <div className="text-center py-12 text-slate-400 text-xs">Loading health background...</div>;

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Health Profile & Medical History</h1>
        <p className="text-xs text-slate-500 mt-1">
          Record allergies, chronic conditions, family medical history, and lifestyle habits.
        </p>
      </div>

      {message && <Alert variant="success" onDismiss={() => setMessage(null)}>{message}</Alert>}

      {/* Allergies Card */}
      <Card title="Known Allergies & Drug Hypersensitivity">
        <div className="space-y-4">
          <div className="flex flex-wrap gap-2">
            {patient?.allergies && patient.allergies.length > 0 ? (
              patient.allergies.map((a) => (
                <div key={a.id} className="flex items-center gap-2 bg-rose-50 border border-rose-200 px-3 py-1.5 rounded-full text-xs text-rose-800">
                  <span className="font-semibold">{a.allergen}</span>
                  <span>({a.reaction} - {a.severity})</span>
                  <button onClick={() => handleDeleteAllergy(a.id)} className="text-rose-400 hover:text-rose-700 font-bold ml-1">×</button>
                </div>
              ))
            ) : (
              <p className="text-xs text-slate-400">No known allergies registered.</p>
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 pt-2 border-t border-slate-100">
            <Input
              placeholder="Allergen (e.g. Penicillin)"
              value={allergyInput.allergen}
              onChange={(e) => setAllergyInput({ ...allergyInput, allergen: e.target.value })}
            />
            <Input
              placeholder="Reaction (e.g. Hives, Swelling)"
              value={allergyInput.reaction}
              onChange={(e) => setAllergyInput({ ...allergyInput, reaction: e.target.value })}
            />
            <Select
              options={[
                { value: 'MILD', label: 'Mild' },
                { value: 'MODERATE', label: 'Moderate' },
                { value: 'SEVERE', label: 'Severe / Anaphylaxis' },
              ]}
              value={allergyInput.severity}
              onChange={(e) => setAllergyInput({ ...allergyInput, severity: e.target.value as any })}
            />
            <Button type="button" variant="outline" onClick={handleAddAllergy}>
              + Add Allergy
            </Button>
          </div>
        </div>
      </Card>

      {/* Chronic Conditions Card */}
      <Card title="Medical Conditions & Diagnoses">
        <div className="space-y-4">
          <div className="flex flex-wrap gap-2">
            {patient?.conditions && patient.conditions.length > 0 ? (
              patient.conditions.map((c) => (
                <div key={c.id} className="flex items-center gap-2 bg-amber-50 border border-amber-200 px-3 py-1.5 rounded-full text-xs text-amber-900">
                  <span className="font-semibold">{c.name}</span>
                  {c.icdCode && <span className="text-slate-500 font-mono">[{c.icdCode}]</span>}
                  <button onClick={() => handleDeleteCondition(c.id)} className="text-amber-400 hover:text-amber-700 font-bold ml-1">×</button>
                </div>
              ))
            ) : (
              <p className="text-xs text-slate-400">No active chronic conditions recorded.</p>
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-2 border-t border-slate-100">
            <Input
              placeholder="Condition Name (e.g. Asthma)"
              value={conditionInput.name}
              onChange={(e) => setConditionInput({ ...conditionInput, name: e.target.value })}
            />
            <Input
              placeholder="ICD-10 Code (optional)"
              value={conditionInput.icdCode}
              onChange={(e) => setConditionInput({ ...conditionInput, icdCode: e.target.value })}
            />
            <Button type="button" variant="outline" onClick={handleAddCondition}>
              + Add Condition
            </Button>
          </div>
        </div>
      </Card>

      {/* Lifestyle & Surgical History */}
      <form onSubmit={handleSaveHealthProfile} className="space-y-6">
        <Card title="Lifestyle Habits & Background">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Select
              label="Smoking Status"
              options={[
                { value: 'NEVER', label: 'Never Smoked' },
                { value: 'FORMER', label: 'Former Smoker' },
                { value: 'OCCASIONAL', label: 'Occasional Smoker' },
                { value: 'REGULAR', label: 'Regular Daily Smoker' },
              ]}
              value={healthData.smokingStatus}
              onChange={(e) => setHealthData({ ...healthData, smokingStatus: e.target.value })}
            />
            <Select
              label="Alcohol Consumption"
              options={[
                { value: 'NEVER', label: 'Non-Drinker' },
                { value: 'OCCASIONAL', label: 'Occasional' },
                { value: 'MODERATE', label: 'Moderate' },
                { value: 'FREQUENT', label: 'Frequent' },
              ]}
              value={healthData.alcoholConsumption}
              onChange={(e) => setHealthData({ ...healthData, alcoholConsumption: e.target.value })}
            />
            <Select
              label="Exercise Habits"
              options={[
                { value: 'SEDENTARY', label: 'Sedentary (Little/No Exercise)' },
                { value: 'LIGHT', label: 'Light Exercise (1-2 days/week)' },
                { value: 'MODERATE', label: 'Moderate Exercise (3-5 days/week)' },
                { value: 'ACTIVE', label: 'Active (Daily Exercise)' },
              ]}
              value={healthData.exerciseHabits}
              onChange={(e) => setHealthData({ ...healthData, exerciseHabits: e.target.value })}
            />
            <Select
              label="Dietary Preferences"
              options={[
                { value: 'NON_VEGETARIAN', label: 'Non-Vegetarian' },
                { value: 'VEGETARIAN', label: 'Vegetarian' },
                { value: 'VEGAN', label: 'Vegan' },
                { value: 'EGGETARIAN', label: 'Eggetarian' },
              ]}
              value={healthData.dietaryPreferences}
              onChange={(e) => setHealthData({ ...healthData, dietaryPreferences: e.target.value })}
            />
          </div>

          <div className="space-y-4 pt-4 border-t border-slate-100 mt-4">
            <Input
              label="Past Surgeries / Major Procedures"
              placeholder="e.g. Appendectomy (2018), Knee Arthroscopy (2021)"
              value={healthData.previousSurgeries}
              onChange={(e) => setHealthData({ ...healthData, previousSurgeries: e.target.value })}
            />
            <Input
              label="Family Medical History"
              placeholder="e.g. Father: Type 2 Diabetes, Mother: Hypertension"
              value={healthData.familyMedicalHistory}
              onChange={(e) => setHealthData({ ...healthData, familyMedicalHistory: e.target.value })}
            />
          </div>
        </Card>

        <div className="flex justify-end">
          <Button type="submit" variant="primary" size="lg" isLoading={saving} leftIcon={<Save className="h-4 w-4" />}>
            Save Health Profile
          </Button>
        </div>
      </form>
    </div>
  );
};
