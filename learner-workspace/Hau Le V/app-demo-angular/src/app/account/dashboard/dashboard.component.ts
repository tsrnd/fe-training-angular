import { Component, OnInit } from '@angular/core';
import { DialogService } from '../../core/service/dialog.service';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor( private dialogService: DialogService,
    private route: ActivatedRoute) { }
    
  ngOnInit() {
    this.route.data.subscribe((data: { data: any }) => {
    });
  }
  canDeactivate(): Observable<boolean> | boolean {
    return this.dialogService.confirm('Discard changes?');
  }
}
