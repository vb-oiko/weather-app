import { Component, OnInit } from '@angular/core';
import { ModuleStateService } from '../../services/module-state.service';

@Component({
  selector: 'app-workplace',
  templateUrl: './workplace.component.html',
  styleUrls: ['./workplace.component.scss'],
  providers: []
})
export class WorkplaceComponent implements OnInit {

  constructor (
    public auth: ModuleStateService,
  ) {}

  ngOnInit() {
  }

}