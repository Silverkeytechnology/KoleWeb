export interface Student {
  firstName: string;
  lastName: string;
  middleName: string;
  gender: string;
  _id: string;
  dob: Date;
  admission_date: Date;
  home_address: string;
  academic_year: string;
  academic_term: string;
  grade: string;
  class: string;
  enrolled: boolean;
  date_enrolled: Date;
  paid: boolean;
  date_paid: Date;

  guardian_firstname: string;
  guardian_lastname: string;
  guardian_gender: string;
  guardian_dob: string;
  guardian_address: string;
  guardian_nrc: string;
  relationship: string;
  guardian_phone: string;
  guardian_email: string;

  
}
