interface ICGST {
  payCGST(): number;
}

interface ISGST {
  paySGST(): number;
}

class Seller implements ICGST, ISGST {
  private sellerId: string;
  private sellerName: string;
  private sellerLocations: string[];

  constructor(sellerId: string, sellerName: string, sellerLocations: string[]) {
    this.sellerId = sellerId;
    this.sellerName = sellerName;
    this.sellerLocations = sellerLocations;
  }

  payCGST() {
    return 200;
  }

  paySGST() {
    return 100;
  }
}

const seller = new Seller('S1001', 'Steve', ['New Delhi', 'Mysore']);
console.log('----Pay CGST ----');
console.log(seller.payCGST());
console.log('----Pay SGST ----');
console.log(seller.paySGST());
