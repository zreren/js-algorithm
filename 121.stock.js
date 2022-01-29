var maxProfit = function(prices){
    if(price.length ===0){
        return 0;
    }
    let minPrice = prices[0],maxProfit=0;
    for(let i=0;i<prices.length;i++){
        if(prices[i]<minPrice){
            minprice = pries[i];
        }else if((prices[i]-minPrice)>maxProfit){
            maxProfit = prices[I]-minPrice;
        }
    }
    return maxProfit;
}