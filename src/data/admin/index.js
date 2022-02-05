const shape = 'radial';

const gradient = {
  blue: `${shape}-gradient(#54C9FD, #0038FF)`,
  purple: `${shape}-gradient(#D204BE, #0038FF)`,
  red: `${shape}-gradient(#FF5050, #F40000)`,
  green: `${shape}-gradient(#55C04B, #159300)`,
  orange: `${shape}-gradient(#FF9900, #FF5C00)`,
};

const index = [ 
  {
    id: 1,
    label: 'Total Staff',
    count: 20,
    gradient: gradient.blue
  },
  {
    id: 2,
    label: 'Total Branches',
    count: 7,
    gradient: gradient.purple
  },
  {
    id: 3,
    label: 'Active Employees',
    count: 7,
    gradient: gradient.red
  },
  {
    id: 4,
    label: 'Deactivated Employees',
    count: 2,
    gradient: gradient.green
  },
  {
    id: 5,
    label: 'Total Lead Generators',
    count: 10,
    gradient: gradient.green
  },
  {
    id: 6,
    label: 'Lead Generators Outsourced',
    count: 20,
    gradient: gradient.blue
  },
  {
    id: 7,
    label: 'Lead Generators Permanent',
    count: 20,
    gradient: gradient.blue
  },
  {
    id: 8,
    label: 'Sales Individuals',
    count: 5,
    gradient: gradient.orange
  },
  {
    id: 9,
    label: 'Success Unit Managers',
    count: 20,
    gradient: gradient.blue
  },
  {
    id: 10,
    label: 'Success Managers',
    count: 20,
    gradient: gradient.red
  },
  {
    id: 11,
    label: 'Success Managers Supervisor',
    count: 20,
    gradient: gradient.red
  },
  {
    id: 12,
    label: 'Relationship Unit Managers',
    count: 20,
    gradient: gradient.blue
  },
  {
    id: 13,
    label: 'Relationship Managers',
    count: 20,
    gradient: gradient.blue
  },
  {
    id: 14,
    label: 'Finance',
    count: 7,
    gradient: gradient.purple
  },
  {
    id: 15,
    label: 'Branch Staff',
    count: 2,
    gradient: gradient.blue
  },
];

export default index;