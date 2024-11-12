import { Routes } from '@angular/router';
import { ImageDownloaderComponent } from './image-downloader/image-downloader.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    { path:'', component: HomeComponent },
    { path:'imageDownloader', component: ImageDownloaderComponent }
];
