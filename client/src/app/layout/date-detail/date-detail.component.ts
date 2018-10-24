import { Component, OnInit, Input } from '@angular/core';
import { DatesService } from '../../services/dates.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'date-detail',
  templateUrl: './date-detail.component.html',
  styleUrls: ['../dates-list/dates-list.component.scss']
})
export class DateDetailComponent implements OnInit {
  data: any;
  header: any;

  constructor(private datesService: DatesService, private route: ActivatedRoute) { }

  ngOnInit() {
  	this.route.params.subscribe((params) => {
      const id = params['id'];

      this.datesService.getDate(id).subscribe((date) => {
      	this.data = date;
        this.header = new Date(this.data.date).toLocaleDateString();
      });
  	});
  	
  }

  getClass(){
    let date = new Date(this.data.date).getDate();
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
