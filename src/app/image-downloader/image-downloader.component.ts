import { Component } from '@angular/core';
import * as XLSX from 'xlsx';
@Component({
  selector: 'app-image-downloader',
  templateUrl: './image-downloader.component.html',
  styleUrls: ['./image-downloader.component.css']
})
export class ImageDownloaderComponent {
  jsonData = [
    { name: 'Purshotham', age: 30, city: 'India' },
    { name: 'Anil', age: 40, city: 'London' },
    { name: 'Mike', age: 32, city: 'Chicago' },
    { name: 'Jokim', age: 32, city: 'Chicago' },
  ];
  convertJsonToExcel() {
    const worksheet = XLSX.utils.json_to_sheet(this.jsonData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
    XLSX.writeFile(workbook, 'data.xlsx');
  }
  async downloadImage(imageSrc: string, fileName: string): Promise<void> {
    try {
      const response = await fetch(imageSrc, { mode: 'no-cors' });
      const imageBlob = await response.blob();
      const imageURL = URL.createObjectURL(imageBlob);

      const link = document.createElement('a');
      link.href = imageURL;
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Error downloading image:', error);
    }
  }
  async downloadMultipleImages(imageUrls: string[]): Promise<void> {
    for (let i = 0; i < imageUrls.length; i++) {
      const imageUrl = imageUrls[i];
      const fileName = `image-${i + 1}.jpg`;
      await this.downloadImage(imageUrl, fileName);
    }
  }
  triggerDownload(): void {
    const imageUrls = [
      "https://filesamples.com/samples/image/jpg/sample_640%C3%97426.jpg",
      "https://news.solventum.com/image/entp-audiencegroup1-gbl-a.png",
      "https://news.solventum.com/image/Solventum_Logo.jpg"
    ];
    this.downloadMultipleImages(imageUrls);
  }
}