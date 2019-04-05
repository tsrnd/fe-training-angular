import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DeactiveDialogService } from 'src/app/core/service/deactive-dialog.service';
import { ActivatedRoute } from '@angular/router';
import { Profile } from 'selenium-webdriver/firefox';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  user: any;
  constructor(
    private dialogService: DeactiveDialogService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.data.subscribe((data: { profile: any }) => {
      this.user = data.profile.data;
    });
  }
  canDeactivate(): Observable<boolean> | boolean {
    return this.dialogService.confirm('Do you want to leave?');
  }
}
