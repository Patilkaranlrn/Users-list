import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';

bootstrapApplication(AppComponent, {
  ...appConfig,  // Spread the configuration object
  providers: [provideHttpClient()],  // Ensure HttpClient is provided
})
  .catch((err) => console.error(err));
