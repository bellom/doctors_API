doctors = [
  {
    'name' => 'Sam',
    'education' => 'Chicago University',
    'speciality' => 'Dermatologists'
  },
  {
    'name' => 'John',
    'education' => 'Harvard University',
    'speciality' => 'Endocrinologits'
  },
  {
    'name' => 'Saheed',
    'education' => 'Lagos University',
    'speciality' => 'Family Physicians'
  },
]

doctors.each do |i|
  doctor = Doctor.create(name: i['name'], education: i['education'], speciality: i['speciality'])
end