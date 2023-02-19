import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  expandSearch() {
    const navbarSearch = document.querySelector(".navbar-search");
    navbarSearch!.classList.add("expanded");
    const navbarNav = document.querySelector('.navbar-nav');
    navbarNav!.classList.add('hidden');
  }

  searchProducts(event: any) {
    const products = [
      {
        name: "Product 1",
        image: "https://via.placeholder.com/150",
        description: "Description of product 1"
      },
      {
        name: "Product 2",
        image: "https://via.placeholder.com/150",
        description: "Description of product 2"
      },
      {
        name: "Product 3",
        image: "https://via.placeholder.com/150",
        description: "Description of product 3"
      }
    ];
    let searchTerm = event.target.value
    const dropdown = <HTMLElement>document.querySelector('.search-dropdown')
    dropdown!.innerHTML = '';

    if (searchTerm.trim() === '') {
      dropdown!.style.display = 'none';
      return;
    }

    const matchingProducts = products.filter(product =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // if (matchingProducts.length > 0) {
    dropdown.style.display = 'block';

    products.forEach(product => {
      const item = document.createElement('div');
      item.classList.add('search-dropdown-item');

      const image = document.createElement('img');
      image.src = product.image;
      item.appendChild(image);

      const info = document.createElement('div');
      info.classList.add('search-dropdown-item-info');

      const name = document.createElement('div');
      name.classList.add('search-dropdown-item-name');
      name.innerText = product.name;
      info.appendChild(name);

      const description = document.createElement('div');
      description.classList.add('search-dropdown-item-description');
      description.innerText = product.description;
      info.appendChild(description);

      item.appendChild(info);
      dropdown.appendChild(item);
    });
    // } else {
    //   dropdown.style.display = 'none';
    // }
  }
}
