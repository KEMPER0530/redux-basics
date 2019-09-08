// Actions
export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'
export const DINCREMENT = 'DINCREMENT'

console.log('actions INCREMENT');
export const increment = () => ({
    type: 'INCREMENT'
});
console.log('actions DECREMENT');
export const decrement = () => ({
    type: 'DECREMENT'
});
console.log('actions DINCREMENT');
export const dincrement = () => ({
    type: 'DINCREMENT'
});