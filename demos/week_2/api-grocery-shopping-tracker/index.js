const { addGroceryItem, retrieveAllGroceryItems, retrieveGroceryItemById, retrieveGroceryItemsByCategory,
    deleteGroceryItemById, updateGroceryNameById, updateGroceryQuantityById, 
    updateGroceryPriceById, updateGroceryCategoryById } = require('./grocery-item-dao');
const uuid = require('uuid');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(bodyParser.json()); // Use the bodyParser middleware, which will essentially take the request body (JSON)
// and turn it into a JS object represented by req.body

app.get('/', (req, res) => {
    res.send("Hello world!");
})

app.post('/groceryitems', async (req, res) => {
    try {
        await addGroceryItem(uuid.v4(), req.body.name, req.body.quantity, req.body.price, req.body.category);
        res.send({
            "message": "Successfully added item"
        });
    } catch(err) {
        res.statusCode = 500; // 500 Server-sided error
        // If we ever encounter an error, this is due to some sort of issue
        // with interacting with DynamoDB
        res.send({
            "message": err
        });
    }
    

    // addGroceryItem(uuid.v4(), req.body.name, req.body.quantity, req.body.price, req.body.category).then(() => {
    //     res.send({
    //         "message": "Successfully added item"
    //     })
    // }).catch((err) => {
    //     res.statusCode = 500; // 500 Server-sided error
    //     // If we ever encounter an error, this is due to some sort of issue
    //     // with interacting with DynamoDB
    //     res.send({
    //         "message": err
    //     });
    // });
});

// If we do GET /groceryitems OR we do GET /groceryitems?category=meat
// They will both reach this same endpoint
app.get('/groceryitems', async (req, res) => {

    try {
        if (req.query.category) {
            let data = await retrieveGroceryItemsByCategory(req.query.category);
            res.send(data.Items);
        } else {
            let data = await retrieveAllGroceryItems();
            res.send(data.Items);
        }
    } catch(err) {
        res.statusCode = 500;
        res.send({
            "message": err
        });
    }
    

    // // Check if we actually have the category query parameter
    // if (req.query.category) {
    //     retrieveGroceryItemsByCategory(req.query.category).then((data) => {
    //         res.send(data.Items);
    //     }).catch((err) => {
    //         res.statusCode = 500;
    //         res.send({
    //             "message": err
    //         });
    //     })
    // } else {
    //     retrieveAllGroceryItems().then((data) => {
    //         res.send(data.Items);
    //     }).catch((err) => {
    //         res.statusCode = 500;
    //         res.send({
    //             "message": err
    //         });
    //     })
    // }
});

app.get('/groceryitems/:id', async (req, res) => {
    // Using async-await
    try {
        let data = await retrieveGroceryItemById(req.params.id);

        if (data.Item) {
            res.send(data.Item);
        } else {
            res.statusCode = 404;
            res.send({
                "message": `Item with id ${req.params.id} does not exist`
            })
        }
    } catch (err) {
        res.statusCode = 500;
        res.send({
            "message": err
        });
    }
    
    // Using .then() and .catch() for handling promises
    // retrieveGroceryItemById(req.params.id).then((data) => {
    //     if (data.Item) { // check to see if item actually exists in DynamoDB
    //         res.send(data.Item); // status code will default to 200
    //     } else {
    //         res.statusCode = 404;
    //         res.send({
    //             "message": `Item with id ${req.params.id} does not exist`
    //         });
    //     }
    // }).catch((err) => {
    //     res.statusCode = 500;
    //     res.send({
    //         "message": err
    //     });
    // });
});

app.delete('/groceryitems/:id', async (req, res) => {

    try {
        // Check to see if item exists in table before trying to delete
        let data = await retrieveGroceryItemById(req.params.id); // awaiting for data from the promise returned by retrieveGroceryItemById

        if (data.Item) {
            await deleteGroceryItemById(req.params.id);
            res.send({
                "message": `Successfully deleted item with id ${req.params.id}`
            });
        } else {
            res.statusCode = 404;
            res.send({
                "message": `Item does not exist to be deleted with id ${req.params.id}`
            })
        }
    } catch(err) {
        res.statusCode = 500;
        res.send({
            "message": err
        });
    }
    
    // "Callback hell": nesting callbacks inside of other callbacks, and it looks really messy, really quickly
    // A way to avoid this type of situation is by using async-await
    // retrieveGroceryItemById(req.params.id).then((data) => {
    //     if (data.Item) { // Item exists
    //         deleteGroceryItemById(req.params.id).then(() => {
    //             res.send({
    //                 "message": `Successfully deleted item with id ${req.params.id}`
    //             });
    //         }).catch((err) => {
    //             res.statusCode = 500;
    //             res.send({
    //                 "message": err
    //             });
    //         })
    //     } else { // Item does not exist
    //         res.statusCode = 404;
    //         res.send({
    //             "message": `Item does not exist to be deleted with id ${req.params.id}`
    //         })
    //     }
    // }).catch((err) => {
    //     res.statusCode = 500;
    //     res.send({
    //         "message": err
    //     });
    // })
});

app.patch('/groceryitems/:id/name', async (req, res) => {
    try {
        // Check if item exists
        let data = await retrieveGroceryItemById(req.params.id);
        if (data.Item) {
            await updateGroceryNameById(req.params.id, req.body.name);
            res.send({
                "message": `Successfully updated name of item with id ${req.params.id}`
            });
        } else {
            res.statusCode = 404;
            res.send({
                "message": `Item does not exist with id ${req.params.id}`
            });
        }
    } catch (err) {
        res.statusCode = 500;
        res.send({
            "message": err
        });
    }
    
    // updateGroceryNameById(req.params.id, req.body.name).then(() => {
    //     res.send({
    //         "message": `Successfully updated name of item with id ${req.params.id}`
    //     })
    // }).catch((err) => {
    //     res.statusCode = 500;
    //     res.send({
    //         "message": err
    //     });
    // })
});

app.patch('/groceryitems/:id/quantity', async (req, res) => {
    try {
        let data = await retrieveGroceryItemById(req.params.id);
        if (data.Item) {
            await updateGroceryQuantityById(req.params.id, req.body.quantity);
            res.send({
                "message": `Successfully updated quantity of item with id ${req.params.id}`
            });
        } else {
            res.statusCode = 404;
            res.send({
                "message": `Item does not exist with id ${req.params.id}`
            });
        }
        
    } catch (err) {
        res.statusCode = 500;
        res.send({
            "message": err
        });
    }

    // updateGroceryQuantityById(req.params.id, req.body.quantity).then(() => {
    //     res.send({
    //         "message": `Successfully updated quantity of item with id ${req.params.id}`
    //     })
    // }).catch((err) => {
    //     res.statusCode = 500;
    //     res.send({
    //         "message": err
    //     });
    // })
});

app.patch('/groceryitems/:id/price', async (req, res) => {
    try {
        let data = await retrieveGroceryItemById(req.params.id);
        if (data.Item) {
            await updateGroceryPriceById(req.params.id, req.body.price);
            res.send({
                "message": `Successfully updated price of item with id ${req.params.id}`
            });
        } else {
            res.statusCode = 404;
            res.send({
                "message": `Item does not exist with id ${req.params.id}`
            });
        }
        
    } catch (err) {
        res.statusCode = 500;
        res.send({
            "message": err
        });
    }
    // updateGroceryPriceById(req.params.id, req.body.price).then(() => {
    //     res.send({
    //         "message": `Successfully updated price of item with id ${req.params.id}`
    //     })
    // }).catch((err) => {
    //     res.statusCode = 500;
    //     res.send({
    //         "message": err
    //     });
    // })
});

app.patch('/groceryitems/:id/category', async (req, res) => {
    try {
        let data = await retrieveGroceryItemById(req.params.id);
        if (data.Item) {
            await updateGroceryCategoryById(req.params.id, req.body.category);
            res.send({
                "message": `Successfully updated category of item with id ${req.params.id}`
            });
        } else {
            res.statusCode = 404;
            res.send({
                "message": `Item does not exist with id ${req.params.id}`
            });
        }
        
    } catch (err) {
        res.statusCode = 500;
        res.send({
            "message": err
        });
    }

    // updateGroceryCategoryById(req.params.id, req.body.category).then(() => {
    //     res.send({
    //         "message": `Successfully updated category of item with id ${req.params.id}`
    //     })
    // }).catch((err) => {
    //     res.statusCode = 500;
    //     res.send({
    //         "message": err
    //     });
    // })
});

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
