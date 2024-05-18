import AddListing from '../models/listingModel.js';

export const getUserListing=async(req,res)=>{
    const {email,id} =req.params;

    try{
        const getUser=await AddListing.findById(id);
        if(getUser){
            if(getUser.createdBy===email){
                res.status(200).json(getUser);
            }
        }else{
            res.status(404).json({
                message: "Listing not found"
            });
        }
    }catch(err){
        res.status(500).json({
            message: err.message
        });
    }
}

export const createListing=async(req,res)=>{
    const data = req.body;
    console.log(data);
    try {
        let newListing = new AddListing(data);
        await newListing.save();
        res.status(201).json(newListing);
    } catch (err) {
        res.status(500).json({
            message: err.message
        });
    }
}

export const updateListing=async(req,res)=>{
    const data=req.body;
    const id=req.params.id;
    const email=req.params.email;

    console.log(data)
    try{
        let info= await AddListing.findById(id)
        
        if(info.createdBy===email){
            info.type=data.type,
            info.propertyType=data.propertyType,
            info.bedroom=data.bedroom,
            info.bathroom=data.bathroom,
            info.builtIn=data.builtIn,
            info.parking=data.parking,
            info.lotSize=data.lotSize,
            info.area=data.area,
            info.hoa=data.hoa,
            info.price=data.price,
            info.description=data.description,
            
            await info.save();
            
            res.status(200).json({
                message: "Listing updated successfully"
            });
        }else{
            res.status(404).json({
                message: "you are not allowed to update this listing!!!"
            });
        }

    }catch(err){
        res.status(500).json({
            message: err.message
        });
    }
}