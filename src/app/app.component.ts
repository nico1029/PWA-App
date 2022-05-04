import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { ImmovablesService } from './services/immovables.service';
import { Types } from './types.interface';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  public types: Types[] = [];
  private notifer = new Subject();

  constructor(
    private immovablesService: ImmovablesService // eslint-disable-line
  ) {} // eslint-disable-line

  public ngOnInit(): void {
    this.immovablesService
      .getOpportunities()
      .pipe(takeUntil(this.notifer))
      .subscribe((x: any) => {
        this.types = x;
      });
  }

  public ngOnDestroy(): void {
    this.notifer.complete();
  }
}
