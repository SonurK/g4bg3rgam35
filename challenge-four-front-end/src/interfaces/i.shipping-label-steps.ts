export interface IShippingSender {
    name: string,
    street?: string,
    city: string,
    state?: string,
    zip?: string
}

export interface IShippingReceiver {
    name?: string,
    street?: string,
    city?: string,
    state: string,
    zip: string
}

export interface IShippingWeight {
    weight: number
}

export interface IShippingShippingOption {
    shippingOption: number
}

export enum WizardAction {
    Prev = 1,
    Next = 2,
    End = 3
};