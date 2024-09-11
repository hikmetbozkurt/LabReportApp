import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Report {
  fileNumber: string;
  firstName: string;
  lastName: string;
  patientId: string;
  diagnosisTitle: string;
  diagnosisDetails: string;
  reportDate: Date | null;
  reportImages: File[];
}

interface ReportState {
  reports: Report[];
}

const initialState: ReportState = {
  reports: []
};

const reportSlice = createSlice({
  name: 'reports',
  initialState,
  reducers: {
    addReport: (state, action: PayloadAction<Report>) => {
      state.reports.push(action.payload);
    },
    // Other actions like deleteReport, updateReport could go here if needed
  }
});

export const { addReport } = reportSlice.actions;
export default reportSlice.reducer;
