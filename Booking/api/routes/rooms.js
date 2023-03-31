const {
  createRoom,
  deleteRoom,
  getRoom,
  getRooms,
  updateRoom,
  updateRoomAvailability,
} = require("../controllers/room.js");
const { verifyAdmin } = require ("../utils/verifyToken.js") ;

const { Router } = require('express');
const router = Router();
//CREATE
router.route("/:hotelid")
  .post(verifyAdmin, createRoom);

//UPDATE
router.route("/availability/:id")
  .put(updateRoomAvailability);
router.route("/:id")
  .put(verifyAdmin, updateRoom);
//DELETE
router.route("/:id/:hotelid")
  .delete(verifyAdmin, deleteRoom);
//GET
router.route("/:id")
  .get(getRoom);
//GET ALL
router.route('/')
  .get(getRooms);

module.exports = router;
