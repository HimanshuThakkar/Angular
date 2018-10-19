import { Component,OnInit } from '@angular/core';
import { IProduct } from './products'
import { ProductsService } from './products.service';


@Component({
    selector:'pm-products',
    templateUrl:'./product-list.component.html',
    styleUrls:['./product-list.component.css']
})

export class ProductListComponent implements OnInit{
    pageTitle : string ='Products List';
    imageWidth:number=50;
    imageMargin:number=2;
    showImage:boolean=false;
    filteredProductList:IProduct[];
   

    
    
    _productListFilter:string;

    get productListFilter():string{
        return this._productListFilter;
    }
    set productListFilter(value:string){
        this._productListFilter=value;
        
        this.filteredProductList= this.productListFilter ?
         this.gettingFilterValue(this.productListFilter) : this.products;
            
    }
   
   
    products : IProduct[]=[];
    constructor(private _productService : ProductsService)   {
    }
    gettingFilterValue(filterBy : string):IProduct[]{
        
        filterBy=filterBy.toLocaleLowerCase();
       
        return this.products.filter((product:IProduct)=>{
            return product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1;
        } 
    )

    }
    toggleImage():void{
        this.showImage=!this.showImage;
    }

    ngOnInit(): void {
        this.products = this._productService.getProducts();
        console.log(this._productService.getProducts());
        this.filteredProductList=this.products;
    }

    onRatingClicked(message : string):void{
        this.pageTitle= 'Product List:' + message;
    }
}