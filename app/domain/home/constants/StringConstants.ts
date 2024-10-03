
export const staticEventData = [
  {name: 'Chemo therapy Infusion'},
  {name: 'Health Check-Up'},
];

export const staticVitalsData = [
  {
    name: 'Blood Pressure',
    value: '115/90',
    unit: 'mmHg',
    date: '2024-09-18T00:00:00Z',
    referenceRange: { min: 60, max: 120 }, // Reference range for Blood Pressure
    data: [
      { value: 120, label: '11 AM' },
      { value: 85, label: '1 PM' },
      { value: 118, label: '2 PM' },
      { value: 122, label: '3 PM' },
      { value: 116, label: '4 PM' },
    ],
    data2: [
      { value: 80, label: '11 AM' },
      { value: 85, label: '1 PM' },
      { value: 86, label: '2 PM' },
      { value: 84, label: '3 PM' },
      { value: 82, label: '4 PM' },
    ],
    unit1 : 'Systolic',
    unit2 : 'Diastolic'
  },
  {
    name: 'Heart Rate',
    value: '115',
    unit: 'bpm',
    date: '2024-09-18T00:00:00Z',
    referenceRange: { min: 60, max: 100 }, // Reference range for Heart Rate
    data: [
      { value: 110, label: '11 AM' },
      { value: 115, label: '1 PM' },
      { value: 120, label: '2 PM' },
      { value: 118, label: '3 PM' },
      { value: 116, label: '4 PM' },
    ],
  },
  {
    name: 'Weight',
    value: '125',
    unit: 'pounds',
    date: '2024-09-18T00:00:00Z',
    referenceRange: { min: 100, max: 150 }, // Reference range for Weight
    data: [
      { value: 125, label: 'Day 1' },
      { value: 124, label: 'Day 2' },
      { value: 125, label: 'Day 3' },
      { value: 126, label: 'Day 4' },
      { value: 125, label: 'Day 5' },
    ],
  },
  {
    name: 'Blood Glucose',
    value: '90',
    unit: 'mg/dL',
    date: '2024-09-18T00:00:00Z',
    referenceRange: { min: 70, max: 130 }, // Reference range for Blood Glucose
    data: [
      { value: 85, label: '8 AM' },
      { value: 90, label: '11 AM' },
      { value: 95, label: '1 PM' },
      { value: 92, label: '3 PM' },
      { value: 88, label: '6 PM' },
    ],
  },
];


