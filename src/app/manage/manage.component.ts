import { map, switchMap, switchMapTo, take } from 'rxjs/operators';
import { AutoService } from './auto.service';
import { Auto } from './model/auto.vm';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css']
})
export class ManageComponent implements OnInit {

  autos$: Observable<Auto[]>;

  constructor(private autoService: AutoService) { }

  ngOnInit(): void {
    this.autos$ = this.autoService.getMany().pipe(
      map(resAutoDtos => resAutoDtos.map<Auto>(auto => new Auto(auto))),
      take(1)
    );
  }

  deleteAuto(autoId: number) {
    this.autos$ = this.autoService.deleteOne(autoId).pipe(
      switchMapTo(this.autoService.getMany()),
      map(resAutoDtos => resAutoDtos.map<Auto>(auto => new Auto(auto))),
      take(1)
    );
  }
}
