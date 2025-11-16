import { computed, Injectable, signal } from "@angular/core";
import { MOCK_ITEMS } from "../mock-data/items.mockData";

interface Item {
    id: string;
    name: string;
    price: number;
    amount: number;
}
interface Cart {
    id: string;
    items: Item[];
    total: number;
}

@Injectable({
    providedIn: 'root'
})
export class CartService {
    private _items = signal<Item[]>([]);

    total = computed(() => this._items().reduce((sum, i) => sum + i.price * i.amount, 0));

    get items() {
        return this._items();
    }

    updateAmount(item: Item){

    }

    addItem(item: Item) {
        const existing = this._items().find(i => i.id === item.id);
        if (existing) {
            const updatedItem = { ...existing, amount: existing.amount + 1};
            this._items.set([
                ...this._items().filter(i => i.id !== item.id),
                updatedItem
            ]);
        } else {
            this._items.set([...this._items(), { ...item}]);
        }
    }

    removeItem(item: Item) {
        this._items.set(
            this._items().map(i => {
                if (i.id === item.id) {
                    const updatedAmount = i.amount - 1;
                    return updatedAmount > 0 ? { ...i, amount: updatedAmount } : null;
                }
                return i;
            }).filter(Boolean) as Item[]
        );
    }


    clearChart(){
        this._items.set([]);
    }

}