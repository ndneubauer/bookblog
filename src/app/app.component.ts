import { Component } from '@angular/core';
import { ConfigService } from './services/config.service';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
  providers: [ ConfigService, ApiService ]
})
export class AppComponent {
}
