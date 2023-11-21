import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {


  color1:any=""
  
    product:any=[
      {image:"https://img.freepik.com/free-vector/cartoon-blue-milk-cardboard-package-concept_1284-37540.jpg?size=626&ext=jpg&ga=GA1.1.1783498268.1700125159&semt=ais",name:"MILK",price:"67",gram:"1L"},
      {image:"https://img.freepik.com/premium-photo/fresh-milk-glass-white-background_55883-8781.jpg?size=626&ext=jpg&ga=GA1.1.1783498268.1700125159&semt=ais",name:"A2 Cow Milk",price:"121",gram:"1L"},
      {image:"https://img.freepik.com/free-vector/pouring-milk-with-splash-illustration-poster_1284-7205.jpg?size=626&ext=jpg&ga=GA1.1.1783498268.1700125159&semt=ais",name:"Buffalo Milk",price:"51",gram:"450 ml"},
      {image:"https://img.freepik.com/premium-photo/milk-juice-box-3d_274626-2111.jpg?size=626&ext=jpg&ga=GA1.1.1783498268.1700125159&semt=ais",name:"Low Fat Cow Milk",price:"42.5",gram:"450 ml"},
      {image:"https://img.freepik.com/premium-photo/slices-bread-isolated-white-background-top-view_530649-32.jpg?size=626&ext=jpg&ga=GA1.1.1783498268.1700125159&semt=ais",name:"White Bread",price:"51.5",gram:"400 gm"},
      {image:"https://img.freepik.com/premium-photo/sliced-whole-grain-bread-with-oat-flakes-wholemeal-bread-isolated-white-background_1004691-241.jpg?size=626&ext=jpg&ga=GA1.1.1783498268.1700125159&semt=ais",name:"Brown Bread",price:"55.5",gram:"400 gm"},
      ]
    product2:any=[
      {image:"https://img.freepik.com/free-photo/sweet-caramel-candy_144627-17559.jpg?size=626&ext=jpg&ga=GA1.1.1783498268.1700125159&semt=ais",name:"Buffalo Ghee",price:"2000",gram:"1kg"},
      {image:"https://img.freepik.com/free-photo/delicious-cheese_144627-43572.jpg?size=626&ext=jpg&ga=GA1.1.1783498268.1700125159&semt=ais",name:"Chizz",price:"70",gram:"100gm"},
      {image:"https://img.freepik.com/premium-photo/glass-can-full-honey-wooden-stick-white-space-clipping-path_220507-2060.jpg?w=740",name:"Cow Butter",price:"400",gram:"1kg"},
      {image:"https://img.freepik.com/premium-photo/ice-cream-ball_770606-2445.jpg?size=626&ext=jpg&ga=GA1.1.1783498268.1700125159&semt=ais",name:"Ice-Cream",price:"100",gram:"300gm"},
      {image:"https://img.freepik.com/premium-photo/greek-feta-cheese-cubes-bowl_693588-3503.jpg?size=626&ext=jpg&ga=GA1.1.1783498268.1700125159&semt=sph",name:"Panner",price:"200",gram:"250 gm"},
      {image:"https://img.freepik.com/free-photo/delicious-piece-cheese_144627-43345.jpg?size=626&ext=jpg&ga=GA1.1.1783498268.1700125159&semt=ais",name:"cow Ghee",price:"1800",gram:"1kg"},
    ]
}