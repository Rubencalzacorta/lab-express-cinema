const mongoose = require("mongoose")

const Schema = mongoose.Schema;

const movieSchema = new Schema({
title: String,
director: String, 
starts: Array,
image: String,
description: Array,
Showtimes: Array, 
})


const Movie = mongoose.model("Movie", movieSchema)

module.exports = Movie