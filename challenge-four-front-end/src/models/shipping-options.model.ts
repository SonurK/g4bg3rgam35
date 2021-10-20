import { IShippingOptions } from 'src/interfaces/i.shipping-options';

export const LIST_SHIPPING_OPTIONS: IShippingOptions[] = [
    {
        name: "Ground",
        value: 1
    },
    {
        name: "Priority",
        value: 2
    }
]

export function GET_LIST_ITEMS_NLP() {

    return LIST_SHIPPING_OPTIONS;
}