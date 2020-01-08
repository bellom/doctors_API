doctors = [
  {
    'name' => 'Dr. Sam Doe',
    'education' => 'Chicago University',
    'speciality' => 'General Doctor'
  },
  {
    'name' => 'Dr. John Dumelo',
    'education' => 'Harvard University',
    'speciality' => 'Mental Health'
  },
  {
    'name' => 'Dr. Saheed Ayo',
    'education' => 'St.Louis University',
    'speciality' => 'Family Physicians'
  },
  {
    'name' => 'Dr. Bellom Sean',
    'education' => 'Lagos University',
    'speciality' => 'Child Care'
  },
  {
    'name' => 'Dr. Micheal Scoff',
    'education' => 'Florida University',
    'speciality' => 'Skin'
  },
  {
    'name' => 'Dr. Ryan Chales',
    'education' => 'Kenya University',
    'speciality' => 'Dentist'
  },
  {
    'name' => 'Dr. Thomas Doe',
    'education' => 'Chicago University',
    'speciality' => 'General Doctor'
  },
  {
    'name' => 'Dr. Scott Dre',
    'education' => 'Harvard University',
    'speciality' => 'Mental Health'
  },
  {
    'name' => 'Dr. Muller Fred',
    'education' => 'St.Louis University',
    'speciality' => 'Family Physicians'
  },
  {
    'name' => 'Dr. Giggs Jimenzin',
    'education' => 'Florida University',
    'speciality' => 'Skin'
  },
  {
    'name' => 'Dr. Kenny Lawson',
    'education' => 'Kenya University',
    'speciality' => 'Dentist'
  },
]

doctors.each do |i|
  doctor = Doctor.create(name: i['name'], education: i['education'], speciality: i['speciality'])
end