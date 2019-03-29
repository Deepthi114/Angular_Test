import { Component } from '@angular/core';
import { CdkDragEnd, CdkDragStart, CdkDragMove } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isAdd =  false;
  isSub =  false;
  isFoo =  false;
  isDoSo = false;
  onDragEnded(event: CdkDragEnd, operation: string) {
    console.log('drag end', operation);
    switch (operation) {
      case 'Add':
        this.isAdd = true;
        this.isSub = false;
        this.isFoo = false;
        this.isDoSo = false;
        break;
      case 'Sub':
      this.isAdd = false;
      this.isSub = true;
      this.isFoo = false;
      this.isDoSo = false;
      break;
      case 'Foo':
      this.isAdd = false;
      this.isSub = false;
      this.isFoo = true;
      this.isDoSo = false;
      break;
      case 'doSO':
      this.isAdd = false;
      this.isSub = false;
      this.isFoo = false;
      this.isDoSo = true;
      break;
      default:
      break;
    }
    event.source.reset();
  }
}
