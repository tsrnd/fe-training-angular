import { Component, OnInit } from '@angular/core';
import { IProduct } from '../products/product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  womenProducts: IProduct[] = [
    {
      'id': 1,
      'productName': 'Áo khoác kaki',
      'description': 'Áo khoác kaki 2 túi',
      'originalPrice': 19.95,
      'promotionPrice': 16.75,
      'imageUrl': 'assets/images/women/women1.jpg',
      'category': 'women',
    },
    {
      'id': 2,
      'productName': 'Quần Jogger',
      'description': 'Quần Jogger len Gân nữ',
      'originalPrice': 19.95,
      'promotionPrice': 16.75,
      'imageUrl': 'assets/images/women/women2.jpg',
      'category': 'women',
    },
    {
      'id': 3,
      'productName': 'Đầm Beo',
      'description': 'Đầm beo cổ v đắp chéo tùng',
      'originalPrice': 19.95,
      'promotionPrice': 16.75,
      'imageUrl': 'assets/images/women/women3.jpg',
      'category': 'women',
    },
    {
      'id': 4,
      'productName': 'Đầm Maxi',
      'description': 'Đầm Maxi Xô Hai Dây Viền Ren VMX01 - Trắng',
      'originalPrice': 19.95,
      'promotionPrice': 16.75,
      'imageUrl': 'assets/images/women/women4.jpg',
      'category': 'women',
    }
  ];
  
  menProducts: IProduct[] = [
    {
      'id': 5,
      'productName': 'Áo khoác kaki',
      'description': 'Áo khoác kaki 2 túi',
      'originalPrice': 19.95,
      'promotionPrice': 16.75,
      'imageUrl': 'assets/images/men/men1.jpg',
      'category': 'men',
    },
    {
      'id': 6,
      'productName': 'Quần Jogger',
      'description': 'Quần Jogger len Gân nữ',
      'originalPrice': 19.95,
      'promotionPrice': 16.75,
      'imageUrl': 'assets/images/men/men2.jpg',
      'category': 'men',
    },
    {
      'id': 7,
      'productName': 'Đầm Beo',
      'description': 'Đầm beo cổ v đắp chéo tùng',
      'originalPrice': 19.95,
      'promotionPrice': 16.75,
      'imageUrl': 'assets/images/men/men3.jpg',
      'category': 'men',
    },
    {
      'id': 8,
      'productName': 'Đầm Maxi',
      'description': 'Đầm Maxi Xô Hai Dây Viền Ren VMX01 - Trắng',
      'originalPrice': 19.95,
      'promotionPrice': 16.75,
      'imageUrl': 'assets/images/men/men4.jpg',
      'category': 'men',
    }
  ]

  kidProducts: IProduct[] = [
    {
      'id': 9,
      'productName': 'Áo khoác kaki',
      'description': 'Áo khoác kaki 2 túi',
      'originalPrice': 19.95,
      'promotionPrice': 16.75,
      'imageUrl': 'assets/images/kid/kid1.jpg',
      'category': 'kids',
    },
    {
      'id': 10,
      'productName': 'Quần Jogger',
      'description': 'Quần Jogger len Gân nữ',
      'originalPrice': 19.95,
      'promotionPrice': 16.75,
      'imageUrl': 'assets/images/kid/kid2.jpg',
      'category': 'kids',
    },
    {
      'id': 11,
      'productName': 'Đầm Beo',
      'description': 'Đầm beo cổ v đắp chéo tùng',
      'originalPrice': 19.95,
      'promotionPrice': 16.75,
      'imageUrl': 'assets/images/kid/kid3.jpg',
      'category': 'kids',
    },
    {
      'id': 12,
      'productName': 'Đầm Maxi',
      'description': 'Đầm Maxi Xô Hai Dây Viền Ren VMX01 - Trắng',
      'originalPrice': 19.95,
      'promotionPrice': 16.75,
      'imageUrl': 'assets/images/kid/kid4.jpg',
      'category': 'kids',
    }
  ]
  
  constructor() { }

  ngOnInit() {
  }

}
