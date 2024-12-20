const { daftaranggota,getPendaftaran,updateAnggota,deleteAnggota,getAnggotaById } = require("../controller/anggotacontroller")

const express = require("express");
const router = express.Router();

router.post("/anggota", daftaranggota);
router.get("/daftaranggota", getPendaftaran);
router.put("/:id", updateAnggota);
router.delete("/:id", deleteAnggota);
router.get("/:id", getAnggotaById);

module.exports = router;