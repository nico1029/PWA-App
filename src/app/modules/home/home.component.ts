import { Component, OnInit } from '@angular/core';
import { ImmovablesService } from 'src/app/services/immovables.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(
    private readonly immovablesService: ImmovablesService // eslint-disable-line
  ) {
    // eslint-disable-line
  }

  public ngOnInit(): void {
    this.immovablesService.getOpportunities().subscribe(
      (x: any) => console.log(x) // eslint-disable-line
    );
  }
}
