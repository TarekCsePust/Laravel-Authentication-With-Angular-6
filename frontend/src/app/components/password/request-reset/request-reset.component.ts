import { Component, OnInit } from '@angular/core';
import { JarwisService } from '../../../Services/jarwis.service';
import { SnotifyModule, SnotifyService } from 'ng-snotify';

@Component({
  selector: 'app-request-reset',
  templateUrl: './request-reset.component.html',
  styleUrls: ['./request-reset.component.css']
})
export class RequestResetComponent implements OnInit {

  public form = {
    email:null
  };

  constructor(private jarwis:JarwisService,private notify:SnotifyService,private Notfiy:SnotifyService) { }

  ngOnInit() {
  }

  onSubmit(){

    this.Notfiy.info('Wait...' ,{timeout:5000})

    this.jarwis.sendPasswordResetLink(this.form).subscribe(
      data=>this.handleResponse(data),
      error=>this.notify.error(error.error.error)
    );

  }

  handleResponse(res){
    //console.log(res);
    this.Notfiy.success(res.data,{timeout:0});
    this.form.email = null;
  }

}
