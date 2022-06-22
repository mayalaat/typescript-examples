const tuple1 = ['string', true, 20];
tuple1[0] = 10; // 😱
tuple1[3] = 'new string'; // 😱

const tuple2: [string, boolean, number] = ['string', true, 20];
// tuple2[0] = 10; // 😎 dont compile
// tuple2[3] = 'new string'; // 😎 dont compile
