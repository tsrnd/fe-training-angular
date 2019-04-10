import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { DeactivateDialogService } from 'src/app/core/sevices/deactivate-dialog.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  firstName: any;
  lastName: any;
  email: any;
  user: any;

  constructor(
    private route: ActivatedRoute,
    private dialogService: DeactivateDialogService) { }

  ngOnInit() {
    console.log(this.route.data.subscribe);
    this.route.data.subscribe(data => {
      console.log(data.user);
      this.user = data.user;
    });

    this.route.paramMap.subscribe( data => {
      console.log(data);
      this.firstName = data.get('firstName');
      this.lastName = data.get('lastName');
      this.email = data.get('email');
    });
    // this.router.data.subscribe(data => this.userData = data.user.data
  }

  canDeactivate(): Observable<boolean> | boolean {
    return this.dialogService.confirm('Do you want to leave?');
  }
}
