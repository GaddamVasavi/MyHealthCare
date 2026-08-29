import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User, Patient, Doctor } from '../../types';

interface AuthState {
  user: User | null;
  patient: Patient | null;
  doctor: Doctor | null;
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}

const savedUser = localStorage.getItem('user');
const savedToken = localStorage.getItem('accessToken');

const initialState: AuthState = {
  user: savedUser ? JSON.parse(savedUser) : null,
  patient: null,
  doctor: null,
  token: savedToken || null,
  isAuthenticated: !!savedToken,
  isLoading: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (
      state,
      action: PayloadAction<{ user: User; patient?: Patient; doctor?: Doctor; accessToken: string; refreshToken?: string }>
    ) => {
      const { user, patient, doctor, accessToken, refreshToken } = action.payload;
      state.user = user;
      state.patient = patient || null;
      state.doctor = doctor || null;
      state.token = accessToken;
      state.isAuthenticated = true;
      localStorage.setItem('user', JSON.stringify(user));
      localStorage.setItem('accessToken', accessToken);
      if (refreshToken) {
        localStorage.setItem('refreshToken', refreshToken);
      }
    },
    updateProfile: (state, action: PayloadAction<{ user?: User; patient?: Patient; doctor?: Doctor }>) => {
      if (action.payload.user) {
        state.user = action.payload.user;
        localStorage.setItem('user', JSON.stringify(action.payload.user));
      }
      if (action.payload.patient) state.patient = action.payload.patient;
      if (action.payload.doctor) state.doctor = action.payload.doctor;
    },
    logout: (state) => {
      state.user = null;
      state.patient = null;
      state.doctor = null;
      state.token = null;
      state.isAuthenticated = false;
      localStorage.removeItem('user');
      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
});

export const { setCredentials, updateProfile, logout, setLoading } = authSlice.actions;
export default authSlice.reducer;
