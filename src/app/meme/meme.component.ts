import { Component, ViewChild } from '@angular/core';
import { ColorEvent } from 'ngx-color';

@Component({
  selector: 'app-meme',
  templateUrl: './meme.component.html',
  styleUrl: './meme.component.css'
})
export class MemeComponent {
  fileEvent:any='';
  topText:string='';
  bottomText:string=''
  textColor:string='#000000'
  backgroundColor:string='#f9f9fb';

  @ViewChild('memeCanvas',{static:false})myCanvas: any;
  preview(e:any){
    this.fileEvent=e;
    let canvas=this.myCanvas.nativeElement;
    let ctx=canvas.getContext('2d');

    let render=new FileReader();
    render.readAsDataURL(e.target.files[0])
    render.onload=function (event)
    {
      const img=new Image();
      
      img.src=event.target?.result as string
      img.onload=function(){
        ctx.drawImage(img,50,150,500,500)
      }
    }
  }
  drawText() {
    let canvas = this.myCanvas.nativeElement;
    let ctx = canvas.getContext('2d');

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = this.backgroundColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    

    // Assuming this.preview(this.fileEvent); is correctly implemented
    this.preview(this.fileEvent);

    ctx.fillStyle = this.textColor;
    ctx.font = '50px Comic Sans MS';
    ctx.textAlign = 'center';
    ctx.fillText(this.topText, canvas.width / 2, 100);
    ctx.fillText(this.bottomText, canvas.width / 2, 750);
  }
  
  canvasTextColor($event:ColorEvent){
    this.textColor=$event.color.hex;
    this.drawText()
  }
  canvasColor($event: ColorEvent) {
    this.backgroundColor = $event.color.hex;
    this.drawText();
  }
  downloadimg(){
    let canvas=this.myCanvas.nativeElement;
    let image=canvas.toDataURL('image/png');
    let link=document.createElement('a')
    link.download='memeImg.png'
    link.href=image;
    link.click()
  }
}
