import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { jsonpCallbackContext } from '../../node_modules/@angular/common/http/src/module';
import { stringify } from '../../node_modules/@angular/compiler/src/util';
import { Jsonp } from '@angular/http';
import { providerDef } from '../../node_modules/@angular/core/src/view';
import { IpService } from './ip.service';

@Component({
    selector: 'app-ip',
    // template: '<h3>ip address</h3>'
    template: '<h3>{{ responseData }}</h3>',
    providers: [IpService]
})
export class IpComponent {
    responseData;
    constructor(private IpService: IpService) {
            this.IpService.getIp()
            .then(ip => this.responseData = ip)
        // .then(resJson => console.log(resJson))
        // .then(resJson => this.i ip = resJson.ip)
        .catch(err => console.log(err));
    }

    // ngOnInit() {
    //     console.log('abc');
    //     this.http.get('https://reqres.in/api/users/2')
    //     .toPromise()
    //     .then(
    //         (res: Response) => this.responseData = res['data']
    //     )
    //     .then(resJson => this.responseData = resJson.first_name)
    //     .catch(err => console.log)
    //     setTimeout(() => {
    //         console.log('abcd', this.responseData.first_name);
    //     }, 1000)
    // }
}
