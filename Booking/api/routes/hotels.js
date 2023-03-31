const {
  countByCity,
  countByType,
  createHotel,
  deleteHotel,
  getHotel,
  getHotelRooms,
  getHotels,
  updateHotel,
} = require ("../controllers/hotel.js") ;
//import Hotel from "../models/Hotel.js";
const {verifyAdmin} = require("../utils/verifyToken.js") 
const { Router } = require('express');
const router = Router();

//CREATE
router.route('/')
  .post(verifyAdmin, createHotel);

//UPDATE
router.route('/:id')
  .put(verifyAdmin, updateHotel);
//DELETE
router.route('/:id')
.delete(verifyAdmin, deleteHotel);
//GET
router.route('/find/:id')
  .get( getHotel);
//GET ALL
router.route('/')
  .get( getHotels);
router.route("/countByCity")
  .get(countByCity);
router.route("/countByType")
  .get(countByType);
router.route("/room/:id")
  .get(getHotelRooms);

module.exports = router;
