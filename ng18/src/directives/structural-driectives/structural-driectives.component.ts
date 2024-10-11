import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-structural-driectives',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './structural-driectives.component.html',
  styleUrl: './structural-driectives.component.scss',
})
export class StructuralDriectivesComponent {
  showContainer: boolean = true;
  selectedCountry: string = '';
  selectedState: string = '';
  selectStudent: string = '';
  maharashtra: string[] = [
    'Amravati',
    'Aurangabad',
    'Chandrapur',
    'Jalgaon',
    'Khandala',
    'Kolhlapur',
    'Nashik',
    'Solapur',
    'Thane',
  ];
  india: string[] = [
    'Andhra Pradesh',
    'Arunachal Pradesh',
    'Assam',
    'Bihar',
    'Chhattisgarh',
    'Goa',
    'Gujarat',
    'Haryana',
    'Himachal Pradesh',
    'Jharkhand',
    'Karnataka',
    'Kerala',
    'Madhya Pradesh',
    'Maharashtra',
    'Manipur',
    'Meghalaya',
    'Mizoram',
    'Nagaland',
    'Odisha',
    'Punjab',
    'Rajasthan',
    'Sikkim',
    'Tamil Nadu',
    'Telangana',
    'Tripura',
    'Uttar Pradesh',
  ];
  studentList: any[] = [
    { studId: 102, name: 'Bhimsen', city: 'Pune', isActive: false },
    { studId: 103, name: 'Saraswati', city: 'Mumbai', isActive: true },
    { studId: 104, name: 'Rajesh', city: 'Delhi', isActive: false },
    { studId: 105, name: 'Amit', city: 'Bangalore', isActive: true },
    { studId: 106, name: 'Meera', city: 'Hyderabad', isActive: false },
    { studId: 107, name: 'Shankar', city: 'Chennai', isActive: true },
    { studId: 108, name: 'Neha', city: 'Kolkata', isActive: false },
    { studId: 109, name: 'Vijay', city: 'Jaipur', isActive: true },
    { studId: 110, name: 'Aarti', city: 'Lucknow', isActive: false },
    { studId: 111, name: 'Rohit', city: 'Ahmedabad', isActive: true }
  ];
  

}
