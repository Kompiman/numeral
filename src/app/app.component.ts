import { Component } from '@angular/core';
import { startWith, map, debounceTime, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'numeral-test';

  public hasil1: any
  hasil2
  v1
  v2
  ngOnInit() {
    // this.onType()
  }

  count(n) {
    let result = 1;
    for (let i = n; 0 < i; i--) {
      result = result * i;
    }

    console.log(result)
    this.v1 = result
  }

  strain(n) {
    let jumlahTerbanyak = 0;
    let charTerbanyak = "";
    for (let i = 0; i < n.length; i++) {
      let stringCheck = n.charAt(i);
      let jumlahChar = 0;
      for (let j = 0; j < n.length; j++) {
        if (stringCheck === n.charAt(j)) {
          jumlahChar++;
        }
      }
      if (jumlahTerbanyak < jumlahChar) {
        charTerbanyak = stringCheck;
        jumlahTerbanyak = jumlahChar
      }
    }

    console.log(charTerbanyak)
    this.v2 = charTerbanyak
  }
}
