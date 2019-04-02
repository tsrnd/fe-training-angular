import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'exercise7';
  color: string;

  datas = [
    {
      "id": 1,
      "title": "Title1",
      "content": "Looking to quickly add Bootstrap to your project? Use BootstrapCDN, provided for free by the folks at StackPath. Using a package manager or need to download the source files? Head to the downloads page."
    },
    {
      "id": 2,
      "title": "Title2",
      "content": "Copy-paste the stylesheet <link> into your <head> before all other stylesheets to load our CSS."
    },
    {
      "id": 3,
      "title": "Title3",
      "content": "Curious which components explicitly require jQuery, our JS, and Popper.js? Click the show components link below. If you’re at all unsure about the general page structure, keep reading for an example page template."
    }
  ];
}
