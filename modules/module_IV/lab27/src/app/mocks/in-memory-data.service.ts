import {InMemoryDbService} from "angular2-in-memory-web-api";
import { Product } from "../models/product";
import { Customer } from "../models/customer";
import { LineItem } from "../models/line-item";
import { SalesInvoice } from "../models/sales-invoice";

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let products: Array<Product> = [
      {
        id: 1,
        name: "Samsung galaxy 8"
      },
      {
        id: 2,
        name: "Samsung galaxy 10"
      },
      {
        id: 3,
        name: "Samsung galaxy 20"
      }
    ];

    let customers: Array<Customer> = [
        {
            id: 1,
            name: "Alejandro Romero"
        },
        {
            id: 2,
            name: "Pedro Chin"
        },
        {
            id: 3,
            name: "Jaime Meluq"
        }
    ];

    let line_items: Array<LineItem> = [
        {
            id: 1,
            productId: 1,
            purchasePrice: 250000
        },
        {
            id: 2,
            productId: 2,
            purchasePrice: 255000
        },
        {
            id: 3,
            productId: 3,
            purchasePrice: 120000
        }
    ];

    let sales_invoices: Array<SalesInvoice> = [
        {
            id: 1,
            customer: customers[0],
            lineItems: [
                {
                    id: 1,
                    productId: products[0].id,
                    purchasePrice: 250000
                },
                {
                    id: 2,
                    productId: products[1].id,
                    purchasePrice: 250000
                }
            ],
            invoiceAmount: 10000,
            tax: 16
        },
        {
            id: 2,
            customer: customers[0],
            lineItems: [
                {
                    id: 1,
                    productId: products[0].id,
                    purchasePrice: 250000
                },
                {
                    id: 2,
                    productId: products[1].id,
                    purchasePrice: 250000
                },
                {
                    id: 3,
                    productId: products[2].id,
                    purchasePrice: 120000
                }
            ],
            invoiceAmount: 3434334,
            tax: 16
        },
        {
            id: 20,
            customer: customers[0],
            lineItems: [
                {
                    id: 1,
                    productId: products[0].id,
                    purchasePrice: 250000
                },
                {
                    id: 3,
                    productId: products[2].id,
                    purchasePrice: 120000
                }
            ],
            invoiceAmount:121213,
            tax: 16
        },
        {
            id: 19,
            customer: customers[0],
            lineItems: [
                {
                    id: 1,
                    productId: products[0].id,
                    purchasePrice: 250000
                },
                {
                    id: 2,
                    productId: products[1].id,
                    purchasePrice: 250000
                }
            ],
            invoiceAmount: 10000,
            tax: 16
        },
        {
            id: 22,
            customer: customers[0],
            lineItems: [
                {
                    id: 1,
                    productId: products[0].id,
                    purchasePrice: 250000
                },
                {
                    id: 2,
                    productId: products[1].id,
                    purchasePrice: 250000
                },
                {
                    id: 3,
                    productId: products[2].id,
                    purchasePrice: 120000
                }
            ],
            invoiceAmount: 3434334,
            tax: 16
        },
        {
            id: 200,
            customer: customers[1],
            lineItems: [
                {
                    id: 1,
                    productId: products[0].id,
                    purchasePrice: 250000
                },
                {
                    id: 3,
                    productId: products[2].id,
                    purchasePrice: 120000
                }
            ],
            invoiceAmount:121213,
            tax: 16
        },
        {
            id: 17,
            customer: customers[2],
            lineItems: [
                {
                    id: 1,
                    productId: products[0].id,
                    purchasePrice: 250000
                },
                {
                    id: 2,
                    productId: products[1].id,
                    purchasePrice: 250000
                }
            ],
            invoiceAmount: 10000,
            tax: 16
        },
        {
            id: 29,
            customer: customers[0],
            lineItems: [
                {
                    id: 1,
                    productId: products[0].id,
                    purchasePrice: 250000
                },
                {
                    id: 2,
                    productId: products[1].id,
                    purchasePrice: 250000
                },
                {
                    id: 3,
                    productId: products[2].id,
                    purchasePrice: 120000
                }
            ],
            invoiceAmount: 3434334,
            tax: 16
        },
        {
            id: 20,
            customer: customers[1],
            lineItems: [
                {
                    id: 1,
                    productId: products[0].id,
                    purchasePrice: 250000
                },
                {
                    id: 3,
                    productId: products[2].id,
                    purchasePrice: 120000
                }
            ],
            invoiceAmount:121213,
            tax: 16
        },
        {
            id: 41,
            customer: customers[1],
            lineItems: [
                {
                    id: 1,
                    productId: products[0].id,
                    purchasePrice: 250000
                },
                {
                    id: 2,
                    productId: products[1].id,
                    purchasePrice: 250000
                }
            ],
            invoiceAmount: 10000,
            tax: 16
        },
        {
            id: 62,
            customer: customers[2],
            lineItems: [
                {
                    id: 1,
                    productId: products[0].id,
                    purchasePrice: 250000
                },
                {
                    id: 2,
                    productId: products[1].id,
                    purchasePrice: 250000
                },
                {
                    id: 3,
                    productId: products[2].id,
                    purchasePrice: 120000
                }
            ],
            invoiceAmount: 3434334,
            tax: 16
        },
        {
            id: 220,
            customer: customers[0],
            lineItems: [
                {
                    id: 1,
                    productId: products[0].id,
                    purchasePrice: 250000
                },
                {
                    id: 3,
                    productId: products[2].id,
                    purchasePrice: 120000
                }
            ],
            invoiceAmount:121213,
            tax: 16
        },
        {
            id: 123,
            customer: customers[1],
            lineItems: [
                {
                    id: 1,
                    productId: products[0].id,
                    purchasePrice: 250000
                },
                {
                    id: 2,
                    productId: products[1].id,
                    purchasePrice: 250000
                }
            ],
            invoiceAmount: 10000,
            tax: 16
        },
        {
            id: 223,
            customer: customers[0],
            lineItems: [
                {
                    id: 1,
                    productId: products[0].id,
                    purchasePrice: 250000
                },
                {
                    id: 2,
                    productId: products[1].id,
                    purchasePrice: 250000
                },
                {
                    id: 3,
                    productId: products[2].id,
                    purchasePrice: 120000
                }
            ],
            invoiceAmount: 3434334,
            tax: 16
        },
        {
            id: 2016,
            customer: customers[2],
            lineItems: [
                {
                    id: 1,
                    productId: products[0].id,
                    purchasePrice: 250000
                },
                {
                    id: 3,
                    productId: products[2].id,
                    purchasePrice: 120000
                }
            ],
            invoiceAmount:121213,
            tax: 16
        }
    ];

    return {products, customers, line_items, sales_invoices};
  }

}
