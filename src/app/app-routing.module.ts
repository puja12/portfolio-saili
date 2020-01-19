import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { GalleryComponent } from './gallery/gallery.component';
import { PhotosComponent } from './gallery/photos/photos.component';
import { VideosComponent } from './gallery/videos/videos.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: '', redirectTo: '/Home', pathMatch: 'full' },
  { path: 'Home', component: HomepageComponent },
  { path: 'About Me', component: AboutComponent },
  { path: 'My Gallery', component: GalleryComponent },
  { path: 'Talk To Me', component: HomepageComponent },
  { path: 'See my photos', component: PhotosComponent },
  { path: 'See my videos', component: VideosComponent }

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
