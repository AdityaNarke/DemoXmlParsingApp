import { Component } from '@angular/core';
import {AppService} from "./app.service";
import {ResponseInfo} from "./ResponseInfo";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  fileToUpload: File = null;
  public errorMessage: string = null;

  constructor(private appService: AppService ) {
  }
  public handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
  }
  uploadFileToActivity() {
    this.errorMessage = null;
    this.appService.uploadXmlFile(this.fileToUpload).subscribe((resp: ResponseInfo) => {
       if (resp.status === 'failed') {
         this.errorMessage = resp.message;
       }
    }, error => {
      this.errorMessage = error;
    });
  }
}
