import { Component } from '@angular/core';
import * as Tesseract from 'tesseract.js';
import { createWorker, Worker } from 'tesseract.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'tesseract-app';
  ocrResult = '';
  captureProgress = 0;
  
  constructor() {
    // this.doOCR(); 
    this.loadWorker();
  }

  worker!: Tesseract.Worker;
  workerReady = false;
  // image = 'https://tesseract.projectnaptha.com/img/eng_bw.png';
  image = '';

  async loadWorker() {
    this.worker = createWorker({
      logger: progress => {
        // console.log('progress: ', progress);
        if(progress.status == "recognizing text") {
          this.captureProgress = parseInt('' + progress.progress * 100);
        }
      }
    });

    await this.worker.load();
    await this.worker.loadLanguage('eng');
    await this.worker.initialize('eng');
    this.workerReady = true;

  }

  onFileSelected(event: any) {

    if(event.target.files) {
      let reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (e:any) => {
        this.image = e.target.result;
        // console.log('this.image: ', this.image);
      }
    }
  }

  // const file:File = event.target.files[0];
  // if (file) {
  //   this.image = (window.URL || window.webkitURL).createObjectURL(file);
  // }


  async recognizeImage() {
    
    const { data: { text } } = await this.worker.recognize(this.image);
    
    this.ocrResult = text;
    console.log(text);
    await this.worker.terminate();
  }




  // async doOCR() {
  //   const worker = createWorker({
  //     logger: m => console.log(m),
  //   });
  //   await worker.load();
  //   await worker.loadLanguage('eng');
  //   await worker.initialize('eng');
  //   const { data: { text } } = await worker.recognize('https://tesseract.projectnaptha.com/img/eng_bw.png');
  //   this.ocrResult = text;
  //   console.log(text);
  //   await worker.terminate();
  // }
}
