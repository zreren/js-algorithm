var maxProfit = function(prices){
    if(price.length ===0){
        return 0;
    }
    let profit = 0,valley = prices[0],peak = prices[0];
    let i = 0;
    while(i<prices.length - 1){
        while(prices[i]>=prices[i+1]){
            i++;
        }
        valley = prices[i];
        while(prices[i]<=prices[i+1]){
            i++;
        }
        peak = prices[i];
        profit += peak - valley;
    }
}