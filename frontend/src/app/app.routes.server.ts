import { RenderMode, ServerRoute } from '@angular/ssr';
import { HeroComponent } from './components/hero/hero';

export const serverRoutes: ServerRoute[] = [
  {
    path: '**',
    renderMode: RenderMode.Prerender,
  }
];
