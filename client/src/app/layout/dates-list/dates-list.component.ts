import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatesService } from '../../services/dates.service';

@Component({
  selector: 'app-dates-list',
  templateUrl: './dates-list.component.html',
  styleUrls: ['./dates-list.component.scss']
})
export class DatesListComponent implements OnInit {
  daysShort = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  data: any;

  constructor(private router: Router, private datesService: DatesService) {

  }

  ngOnInit() {
    this.datesService.getDatesList().subscribe((list) => {
      this.data = list;
    });    
  }

  selectDate(item: any){
    this.router.navigate(['/dates/' + item.id]);
  }

  getDate(item: any){
    return new Date(item.date);
  }

  getLabel(item: any){
    let date = this.getDate(item).getDate();
    const currentDate = new Date().getDate();

    switch (true) {
      case (date == currentDate -1):
        return "Yesterday";
        break;

      case (date == currentDate):
        return "Today";
        break;
      case (date == currentDate +1):
        return "Tomorrow";
        break;
      default:
        return this.days[this.getDate(item).getDay()];
        break;
    }
  }

  getClass(item: any){
    let date = this.getDate(item).getDate();
    const currentDate = new Date().getDate();

    if (currentDate == date){
      return 'today';
    }else if (currentDate > date){
      return 'past-date'
    }else{
      return 'future-date';
    }
  }

}
