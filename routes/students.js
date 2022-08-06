const router = require("express").Router()
const { addOne, removeOne, updateOne, getAll, getOne} = require("../controller/students")

router.get("/students", async (req, res) =>
{
    /*
    #swagger.tags = ['Students]
    */
    await getAll(req, res)
})

//Post
router.post('/students', async (req, res) =>
{
    /*
    #swagger.tags = ['Students]
    */
    await addOne(req, res)
})

  //Get by ID 
  router.get('/students/get/:id', async (req, res) => {
    /*  
        #swagger.tags = ['Students']
    */  
    await getOne(req, res);
})



//Update by ID 
router.patch('/students/update/:id', async (req, res) => {
    /*  
        #swagger.tags = ['Students']
    */ 
    await updateOne(req, res);
})


//Delete by ID 
router.delete('/students/delete/:id', async (req, res) => {
    /*  
        #swagger.tags = ['Students']
    */ 
    await removeOne(req, res);
})

module.exports = router