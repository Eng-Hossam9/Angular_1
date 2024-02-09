import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {

  // initializeImageModal() {
  //   const images = document.querySelectorAll<HTMLImageElement>('.rounded-3 img');
  //   images.forEach((image) => {
  //     image.addEventListener('click', () => {
  //       const imageUrl = image.getAttribute('src');

  //       const modalImg = document.querySelector<HTMLImageElement>('.modal img');
  //       modalImg.setAttribute('src', imageUrl || '');

  //       // Show the modal
  //       const modal = document.querySelector('.modal');
  //       if (modal) {
  //         modal.classList.remove('d-none');
  //       }
  //     });
  //   });

  //   const modal = document.querySelector('.modal');
  //   if (modal) {
  //     modal.addEventListener('click', function () {
  //       this.classList.add('d-none');
  //     });
  //   }
  // }


}
