const Stock = require('../models/stock');


exports.postRequest =async (req, res, next)=>{

    try{
     const candyname=req.body.candyname;
    const description=req.body.description;
    const price=req.body.price;
    const quantity=req.body.quantity;
    const data= await Stock.create({candyname:candyname, description:description, price:price, quantity:quantity});
    res.status(201).json({newStockDetail:data});
    }catch(err){
        res.status(500).json({
            error:err
        })
    }
   
}

exports.getRequest =async (req, res, next)=>{
 const stocks= await Stock.findAll();
    res.status(200).json({allStocks:stocks});
  }


  exports.deleteRequest= async (req, res, next) => {
  try {
    const userId = req.params.id;

     await Stock.destroy({
      where: { id: userId }
    });

    res.status(200); 
  } catch (error) {
    res.status(500).json({
      error: error.message 
    });
  }
}

exports.updateRequest = async (req, res, next) => {
  const userId = req.params.id;
const quantity = req.body.quantity;
try {
    const stockItem = await Stock.findByPk(userId);
if (!stockItem) {
      return res.status(404).json({ message: 'Stock item not found' });
    }

    stockItem.quantity = quantity;

    await stockItem.save();

    return res.status(200).json({ message: 'Stock item updated successfully', updatedStockItem: stockItem });
  } catch (error) {
    console.error('Error updating stock item:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

exports.postEditRequest= async (req, res, next)=>{
  try{
        const userId = req.params.id;
    const stockItem = await Stock.findByPk(userId);

    if (!stockItem) {
      return res.status(404).json({ message: 'Stock item not found' });
    }
    return res.status(200).json({ stockItem });
  }catch(error){
    console.error('Error updating stock item:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
}


