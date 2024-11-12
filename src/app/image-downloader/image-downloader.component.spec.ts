import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageDownloaderComponent } from './image-downloader.component';

describe('ImageDownloaderComponent', () => {
  let component: ImageDownloaderComponent;
  let fixture: ComponentFixture<ImageDownloaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImageDownloaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageDownloaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
