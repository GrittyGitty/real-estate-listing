const { listerId, otherListerId } = require('./ids');

let
    forsale = require('./mockdata/forsale'),
    rent = require('./mockdata/rent'),
    commercial = require('./mockdata/commercial'),
    roommmates = require('./mockdata/roommates'),
    mitigatingCompany = require('./mockdata/mitigatingCompany'),
    [listerMit, listerNonMit] = require('./mockdata/lister');
const {
    ForsaleListing,
    RentListing,
    CommercialListing,
    RoommatesListing,
    Lister,
    MitigatingCompany
} = require('../db/mongo/index');



new MitigatingCompany(mitigatingCompany).save()
    .then(() => new Lister(listerMit).save())
    .then(() => new Lister(listerNonMit).save())
    .then(() => {
        for (let i = 0; i < 100; i++) {
            new ForsaleListing(forsale(Boolean(Math.round(Math.random())) ? otherListerId : listerId)).save().then(console.log).catch(console.error);
            new RentListing(rent).save().then(console.log).catch(console.error);
            new CommercialListing(commercial).save().then(console.log).catch(console.error);
            new RoommatesListing(roommmates).save().then(console.log).catch(console.error);
        }
    })
    .catch(console.error);


























// const _id = mongoose.Types.ObjectId();
// const mitigatingCompany = { _id, h:"fsdfsd" };

// const listerId = mongoose.Types.ObjectId();
// const lister = { _id: listerId, mitigatingCompanyId: _id }
// const forsale = {
//     listing: {
//         listerId,
//         pictureKeys: ['property-images/6/12b0a93b-b3f5-454b-8a1b-80f7b7efb27a.1580838564327.jpeg',
//             'property-images/6/2c43ffc8-d78a-4b0f-808f-22fa7d07bc1a.1580903874863.jpeg',
//             'property-images/6/46609425-8720-42d3-8907-4d0a2a4fea24.1580839529483.jpeg'],
//     },
//     level1: {
//         type: "דירה",
//         address: {
//             municipality: "נשר",
//             area: "רמות יצחק",
//             street: "רחובות הנהר",
//             number: 13,
//             apt: 8
//         },
//     },
// }



// // new MitigatingCompany(mitigatingCompany).save()
// //     .then(() => new Lister(lister).save())
// //     .then(() => 
