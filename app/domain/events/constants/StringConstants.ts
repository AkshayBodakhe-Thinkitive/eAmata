
export  const infusionData: any = [
    {
      id: 1, 
      type: 'Chemo Therapy',
      status: 'Ongoing',
      startDate: '2024-09-18T00:00:00Z',
      startTime: '09:18:00', 
      endDate: null, 
    },
    {
      id: 2,
      type: 'IV Hydration',
      status: 'Upcoming',
      startDate: '2024-09-18T00:00:00Z',
      startTime: '17:18:00',
      endDate: null,
      eventType : 'normal'
    },
    {
      id: 3,
      type: 'Nurse Assistance',
      status: 'Completed',
      startDate: '2024-09-17T00:00:00Z',
      startTime: '23:00:00',
      endDate: null,
      eventType : 'virtual'
    },
    {
      id: 4,
      type: 'Chemo Therapy',
      status: 'Cancelled',
      startDate: '2024-09-17T00:00:00Z',
      startTime: '23:00:00',
      endDate: null,
    },
    {
      id: 5,
      type: 'Chemo Therapy',
      status: 'Upcoming',
      startDate: '2024-09-16T00:00:00Z',
      startTime: '23:00:00',
      endDate: null,
    },
    {
      id: 6,
      type: 'Chemo Therapy',
      status: 'Upcoming',
      startDate: '2024-09-16T00:00:00Z',
      startTime: '23:00:00',
      endDate: null,
    },
  ];

export const ivInfusionData = [
    {
      title: 'IV Hydration Infusion',
      date: 'Jan 01, 2024 05:18 PM',
      status: 'Upcoming',
      purpose:
        'This IV infusion is prescribed to [insert purpose, e.g., deliver antibiotics to treat a bacterial infection, provide hydration, administer pain relief, etc.]. The medication is delivered directly into the bloodstream for rapid effect and precise dosing.',
      medication: 'Ceftriaxone',
      dosage: '2 grams',
      infusionRate: '100 mL/hr',
      duration: '30 minutes',
      route: 'Intravenous (IV)',
      precautions: [
        'Monitor for signs of infection at the IV site (redness, swelling, pain).',
        'Watch for allergic reactions or side effects, such as rash, difficulty breathing, or changes in vital signs.',
        'Ensure the infusion rate is set correctly to avoid complications like fluid overload.'
      ],
    },
  ];
  