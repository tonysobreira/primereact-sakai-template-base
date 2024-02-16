import { Project } from '@/types';

export const ProductService = {
    getProductsSmall() {
        return fetch('/project/data/products-small.json', { headers: { 'Cache-Control': 'no-cache' } })
            .then((res) => res.json())
            .then((d) => d.data as Project.Product[]);
    },

    getProducts() {
        return fetch('/project/data/products.json', { headers: { 'Cache-Control': 'no-cache' } })
            .then((res) => res.json())
            .then((d) => d.data as Project.Product[]);
    },

    getProductsWithOrdersSmall() {
        return fetch('/project/data/products-orders-small.json', { headers: { 'Cache-Control': 'no-cache' } })
            .then((res) => res.json())
            .then((d) => d.data as Project.Product[]);
    }
};
