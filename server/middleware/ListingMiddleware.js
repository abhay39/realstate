import AddListing from '../models/listingModel.js';

export const verifyUserAndListing=async(req,res,next)=>{
    const {email,id} =req.params;

    try{
        const getListing=await AddListing.findById(id);
        if(getListing){
            if(getListing.createdBy===email){
                req.getListing=getListing;
                next();
            }else{
                
                res.status(404).json({
                    message: "you are not allowed to update this listing!!!"
                });
            }
        }else{
            res.status(404).json({
                message: "you are not allowed to update this listing!!!"
            });
        }
    }catch(err){
        res.status(500).json({
            message:err.message
        })
    }
}