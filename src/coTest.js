
//No Modificar
class Product {
  constructor(name, sellIn, price) {
    this.name = name;
    this.sellIn = sellIn;
    this.price = price;
  }
}

class CarInsurance {
  constructor(products = []) {
    this.products = products;
  }
  updatePrice(){
  for(var i=; i< this.product.length;i++){
  if(this.products[i].price < 50){
	if(this.products[i].name!='Mega Coverage'){
		if (this.products[i].name != 'Full Coverage'){
			if(this.products[i].name!= 'Special Full Coverage'){
				if(this.products[i].price >0){
					this.products[i].price = this.products[i].price-1;
					this.products[i].sellIn = this.products[i].sellIn-1; 
				}
				else{
					this.products[i].sellIn=this.products[i].sellIn-1;
					this.products[i].price =this.products[i].price -1;
				}
			}else{
				this.products[i].price = this.products[i].price+2;
				this.products[i].sellIn = this.products[i].sellIn-1; 
			}
			}
			}else{
				if(this.products[i].sellIn <11)){
					this.products[i].prince )this.products[i].price+2;
				}else{
					if(this.products[i].sellIn <6){
					this.products[i].prince )this.products[i].price+3;
					}
					else{
					if(this.products[i].sellIn<1){
						this.products.[i].price= 0;
					}
					}
				}
			}
		}
	}
	if(this.products[i].name =='Super Sale'){
		this.products[i].price = this.products[i].price+2;
		this.products[i].sellIn = this.products[i].sellIn-1; 
	}
	return this.products;
	}
	
module.exports = {
  Product,
  CarInsurance
}
 