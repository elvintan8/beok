const { anggota } = require("../../models");
const anggotaValidation = require("../../validation/anggota");

const daftaranggota = async (req, res) => {
  try {
    const { errors } = anggotaValidation.validateCreatePayload(req.body);
    if (errors) {
      return res.status(400).json({ errors });
    }
    const {
      namalengkap,
      namabuddhis,
      alamat,
      tempatlahir,
      tanggallahir,
      jeniskelamin,
      pendidikan,
      fakultas,
      angkatantahunajaran,
      pekerjaan,
      golongandarah,
      hobi,
      alamatlengkap,
      aktifdivihara,
      nohp,
      email,
    } = req.body;
    const data = req.body;
    if (!data) {
      return res.status(400).json({
        message: "data tidak ada",
      });
    }

    const anggotabaru = await anggota.create({
      namalengkap,
      namabuddhis,
      alamat,
      tempatlahir,
      tanggallahir,
      jeniskelamin,
      pendidikan,
      fakultas,
      angkatantahunajaran,
      pekerjaan,
      golongandarah,
      hobi,
      alamatlengkap,
      aktifdivihara,
      nohp,
      email,
    });

    return res.status(201).json({
      message: "Registration Berhasil",
      anggota: anggotabaru,
    });
  } catch (error) {
    return res.status(400).json({
      message: "Registration Gagal",
      error: error.message,
    });
  }
};

const getPendaftaran = async (req, res) => {
  try {
    const { page = 1, limit = 10 } = req.query;
    const offset = (page - 1) * limit;
    const countPendaftaran = await anggota.count();

    const totalPage = Math.ceil(countPendaftaran / limit);

    const data = await anggota.findAll({
      limit: limit,
      offset: offset,
    });
    const result = data.map((item) => ({
      status: "success",
      data: {
        id: item.id,
        namalengkap: item.namalengkap,
        namabuddhis: item.namabuddhis,
        alamat: item.alamat,
        tempatlahir: item.tempatlahir,
        tanggallahir: item.tanggallahir,
        jeniskelamin: item.jeniskelamin,
        pendidikan: item.pendidikan,
        fakultas: item.fakultas,
        angkatantahunajaran: item.angkatantahunajaran,
        pekerjaan: item.pekerjaan,
        golongandarah: item.golongandarah,
        hobi: item.hobi,
        alamatlengkap: item.alamatlengkap,
        aktifdivihara: item.aktifdivihara,
        nohp: item.nohp,
        email: item.email,
      },
    }));
    res.status(200).json({
      data: result,
      meta: {
        page: parseInt(page),
        totalPage: totalPage,
        totalData: countPendaftaran,
      },
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAnggotaById = async (req, res) => {
  try {
    const data = await anggota.findByPk(req.params.id);

    if (!data) {
      return res
        .status(404)
        .json({ status: "error", message: "Data not found" });
    }

    const result = {
      status: "success",
      data,
    };

    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateAnggota = async (req, res) => {
  try {
    const { errors } = anggotaValidation.validateUpdatePayload(req.body);
    if (errors) {
      return res.status(400).json({ status: "error", errors });
    }

    const { id } = req.params;
    const {
      namalengkap,
      namabuddhis,
      alamat,
      tempatlahir,
      tanggallahir,
      jeniskelamin,
      pendidikan,
      fakultas,
      angkatantahunajaran,
      pekerjaan,
      golongandarah,
      hobi,
      alamatlengkap,
      aktifdivihara,
      nohp,
      email,
    } = req.body;

    const [updated] = await anggota.update(
      {
        namalengkap,
        namabuddhis,
        alamat,
        tempatlahir,
        tanggallahir,
        jeniskelamin,
        pendidikan,
        fakultas,
        angkatantahunajaran,
        pekerjaan,
        golongandarah,
        hobi,
        alamatlengkap,
        aktifdivihara,
        nohp,
        email,
      },
      {
        where: { id },
      }
    );

    if (updated === 0) {
      return res
        .status(404)
        .json({ status: "error", message: "Anggota not found" });
    }

    const updatedAnggota = await anggota.findByPk(id);

    return res.status(200).json({
      status: "success",
      data: updatedAnggota,
      message: "Update Data Successfully",
    });
  } catch (err) {
    return res.status(500).json({ status: "error", message: err.message });
  }
};


const deleteAnggota = async (req, res) => {
  try {
    const deleteAnggota = await anggota.findByPk(req.params.id);

    if (!deleteAnggota) {
      return res
        .status(404)
        .json({ status: "error", message: "Data not found" });
    }

    await anggota.destroy({ where: { id: req.params.id } });

    res
      .status(200)
      .json({ status: "success", message: "Data deleted successfully" });
  } catch (err) {
    res.status(500).json({ status: "error", message: err.message });
  }
};

module.exports = {
  daftaranggota,
  getPendaftaran,
  updateAnggota,
  getAnggotaById,
  deleteAnggota,
};
