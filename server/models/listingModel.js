import mongoose from 'mongoose';

const AddListingSchema=new mongoose.Schema({
    address:{
        type:String,
        required:true,
    },
    coordinates:{
        type:Object,
        required:true,
    },
    createdBy:{
        type:String,
        required:true,
    },
    type:{
        type:String,
    },
    propertyType:{
        type:String,
    },
    bedroom:{
        type:Number,
    },
    bathroom:{
        type:Number,
    },
    builtIn:{
        type:Number,
    },
    parking:{
        type:Number,
    },
    lotSize:{
        type:Number,
    },
    area:{
        type:Number,
    },
    price:{
        type:Number,
    },
    hoa:{
        type:Number,
    },
    description:{
        type:String,
    },
},{timestamps:true});

export default mongoose.models.AddListing || mongoose.model('AddListing',AddListingSchema);

