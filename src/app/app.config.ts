import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter, withViewTransitions } from '@angular/router';

import { routes } from './app.routes';
import { HttpClientModule } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(
      routes,
      withViewTransitions(// indica que cada que se cambia a una ruta se va a activar una animación
        {
          skipInitialTransition:true
        }
      ),
    ),
    importProvidersFrom(
      HttpClientModule
    )
    
  ]
};
