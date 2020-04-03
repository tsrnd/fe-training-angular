import { Component, OnInit } from '@angular/core';
import { DialogService } from 'src/app/core/services/dialog.service';
import { ActivatedRoute  } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: any;

  constructor(
    private dialogService: DialogService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.data.subscribe((data: { profile: any }) => {
      this.user = data.profile.data;
      console.log(data);
    });
  }
  canDeactivate(): Observable<boolean> | boolean {
    return this.dialogService.confirm('Do you want to leave?');
  }
}
