import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { InlineComponent } from './app/components/inline.component';

bootstrapApplication(InlineComponent, appConfig)
  .catch((err) => console.error(err));
