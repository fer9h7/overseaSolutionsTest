import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dates-list',
  templateUrl: './dates-list.component.html',
  styleUrls: ['./dates-list.component.scss']
})
export class DatesListComponent implements OnInit {
  days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  data = [
  	{ 
      id: 1,
  		date: new Date(),
  		appointments: [
  			{
  				startTime: '08:00',
  				endTime: '09:00',
  				subject: 'Test 1',
  				Description: 'This is a test description'
  			},
  			{
  				startTime: '09:00',
  				endTime: '10:00',
  				subject: 'Test 1',
  				Description: 'This is a test description'
  			},
  			{
  				startTime: '12:00',
  				endTime: '13:00',
  				subject: 'Test 1',
  				Description: 'This is a test description'
  			},
  			{
  				startTime: '15:00',
  				endTime: '19:00',
  				subject: 'Test 1',
  				Description: 'This is a test description'
  			},
  			{
  				startTime: '20:00',
  				endTime: '21:00',
  				subject: 'Test 1',
  				Description: 'This is a test description'
  			},
  		]
  	},
  	{ 
      id: 2,
  		date: new Date(),
  		appointments: [
  			{
  				startTime: '08:00',
  				endTime: '09:00',
  				subject: 'Test 1',
  				Description: 'This is a test description'
  			},
  			{
  				startTime: '09:00',
  				endTime: '10:00',
  				subject: 'Test 1',
  				Description: 'This is a test description'
  			},
  			{
  				startTime: '12:00',
  				endTime: '13:00',
  				subject: 'Test 1',
  				Description: 'This is a test description'
  			},
  			{
  				startTime: '15:00',
  				endTime: '19:00',
  				subject: 'Test 1',
  				Description: 'This is a test description'
  			},
  			{
  				startTime: '20:00',
  				endTime: '21:00',
  				subject: 'Test 1',
  				Description: 'This is a test description'
  			},
  		]
  	},
  	{ 
      id: 3,
  		date: new Date(),
  		appointments: [
  			{
  				startTime: '08:00',
  				endTime: '09:00',
  				subject: 'Test 1',
  				Description: 'This is a test description'
  			},
  			{
  				startTime: '09:00',
  				endTime: '10:00',
  				subject: 'Test 1',
  				Description: 'This is a test description'
  			},
  			{
  				startTime: '12:00',
  				endTime: '13:00',
  				subject: 'Test 1',
  				Description: 'This is a test description'
  			},
  			{
  				startTime: '15:00',
  				endTime: '19:00',
  				subject: 'Test 1',
  				Description: 'This is a test description'
  			},
  			{
  				startTime: '20:00',
  				endTime: '21:00',
  				subject: 'Test 1',
  				Description: 'This is a test description'
  			},
  		]
  	},
  	{ 
      id: 4,
  		date: new Date(),
  		appointments: [
  			{
  				startTime: '08:00',
  				endTime: '09:00',
  				subject: 'Test 1',
  				Description: 'This is a test description'
  			},
  			{
  				startTime: '09:00',
  				endTime: '10:00',
  				subject: 'Test 1',
  				Description: 'This is a test description'
  			},
  			{
  				startTime: '12:00',
  				endTime: '13:00',
  				subject: 'Test 1',
  				Description: 'This is a test description'
  			},
  			{
  				startTime: '15:00',
  				endTime: '19:00',
  				subject: 'Test 1',
  				Description: 'This is a test description'
  			},
  			{
  				startTime: '20:00',
  				endTime: '21:00',
  				subject: 'Test 1',
  				Description: 'This is a test description'
  			},
  		]
  	},
  	{ 
      id: 5,
  		date: new Date(),
  		appointments: [
  			{
  				startTime: '08:00',
  				endTime: '09:00',
  				subject: 'Test 1',
  				Description: 'This is a test description'
  			},
  			{
  				startTime: '09:00',
  				endTime: '10:00',
  				subject: 'Test 1',
  				Description: 'This is a test description'
  			},
  			{
  				startTime: '12:00',
  				endTime: '13:00',
  				subject: 'Test 1',
  				Description: 'This is a test description'
  			},
  			{
  				startTime: '15:00',
  				endTime: '19:00',
  				subject: 'Test 1',
  				Description: 'This is a test description'
  			},
  			{
  				startTime: '20:00',
  				endTime: '21:00',
  				subject: 'Test 1',
  				Description: 'This is a test description'
  			},
  		]
  	},
  	{ 
      id: 6,
  		date: new Date(),
  		appointments: [
  			{
  				startTime: '08:00',
  				endTime: '09:00',
  				subject: 'Test 1',
  				Description: 'This is a test description'
  			},
  			{
  				startTime: '09:00',
  				endTime: '10:00',
  				subject: 'Test 1',
  				Description: 'This is a test description'
  			},
  			{
  				startTime: '12:00',
  				endTime: '13:00',
  				subject: 'Test 1',
  				Description: 'This is a test description'
  			},
  			{
  				startTime: '15:00',
  				endTime: '19:00',
  				subject: 'Test 1',
  				Description: 'This is a test description'
  			},
  			{
  				startTime: '20:00',
  				endTime: '21:00',
  				subject: 'Test 1',
  				Description: 'This is a test description'
  			},
  		]
  	}
  ];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  selectDate(item: any){
    this.router.navigate(['/dates/' + item.id]);
  }

}
