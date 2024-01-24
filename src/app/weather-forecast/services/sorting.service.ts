import {Injectable} from "@angular/core";
import {Observable, Subject} from "rxjs";

@Injectable({
  providedIn: 'root',
})

export class SortingService {
  private isSorted!: boolean;
  private sortingSubject: Subject<boolean> = new Subject<boolean>();

  setSorting(status: boolean): void {
    this.isSorted = status;
    this.sortingSubject.next(this.isSorted);
  }

  getSorting(): Observable<boolean> {
    return this.sortingSubject.asObservable();
  }
}
