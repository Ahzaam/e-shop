import { Component, OnInit } from '@angular/core';
import { TouchMessage } from 'src/app/Model/touch-message';
import { CommonsService } from 'src/app/Service/commons.service';
import { DatabaseService } from 'src/app/Service/database.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  touch_message: TouchMessage = <TouchMessage>{}

  constructor(private bound: CommonsService, private db: DatabaseService) { }

  ngOnInit(): void {
    this.bound.setBound('perfume');
  }


  sendMessage() {
    console.log(this.touch_message)
    if (this.touch_message.message !== '') {
      this.touch_message.id = this.db.generateDocId()
      this.db.sendMessage(this.touch_message)
      this.touch_message = <TouchMessage>{}
    }

  }
}
