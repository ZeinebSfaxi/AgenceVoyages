export default (hotels = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload;

        default:
            return hotels;
    }
}