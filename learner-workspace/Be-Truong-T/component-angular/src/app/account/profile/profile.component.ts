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

  constructor(
    private route: ActivatedRoute,
    private dialogService: DeactivateDialogService) { }

  ngOnInit() {
    this.route.paramMap.subscribe( data => {
      this.firstName = data.get('firstName');
      this.lastName = data.get('lastName');
      this.email = data.get('email');
    });
  }

  canDeactivate(): Observable<boolean> | boolean {
    return this.dialogService.confirm('Do you want to leave?');
  }
}
