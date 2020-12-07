const express = require('express');
const axios = require('axios');
const {mapRespItDetalle, mapRespBusq} = require('../utils');
const router = express.Router();


router.get('/', async (req, res) => {
    try {
        const response = await axios.get(`https://api.mercadolibre.com/sites/MLA/search?q=${req.query.q}`);
        const categories = response.data.filters.find((filter) => filter.id === 'category');
        res.json(mapRespBusq(response.data.results, categories));
    } catch (error) {
        if (error.response) {
            res.status(error.response.status).json({error: error.response.data.message});
        }
    }
});

router.get('/:id', async (req, res) => {
    try {
        const item = await axios.get(`https://api.mercadolibre.com/items/${req.params.id}`);

        const description = await axios.get(`https://api.mercadolibre.com/items/${req.params.id}/description`);
        item.data.description = description.data.plain_text;

        const categories = await axios.get(`https://api.mercadolibre.com/categories/${item.data.category_id}`);
        const {path_from_root} = categories.data;
        item.data.categories = path_from_root.map((category) => category.name); 

        const response = mapRespItDetalle(item.data);
        res.json(response);
    } catch (error) {
        console.log(error);
        if (error.response) {
            res.status(error.response.status).json({error: error.response.data.message});
        }
    }
});

module.exports = router;
