import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DialogService } from 'src/app/core/services/dialog.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: any;
  editName: string;
  data: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public dialogService: DialogService
  ) { }

  ngOnInit() {
    this.route.data
      .subscribe(data => {
        this.editName = data.user.name;
        this.user = data.user;
      });
  }

  cancel() {
    this.gotoDashboard();
  }

  save() {
    this.user.name = this.editName;
    this.gotoDashboard();
  }

  canDeactivate(): Observable<boolean> | boolean {
    if (this.user.name !== this.editName) {
      return window.confirm('Discard changes?');
    }

    return true;
  }
  gotoDashboard() {
    this.router.navigate(['/dashboard']);
  }
}
