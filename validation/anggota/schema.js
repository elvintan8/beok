const Joi = require("joi");

exports.create = Joi.object().keys({
  namalengkap: Joi.string().min(3).max(50).required(),
  namabuddhis: Joi.string().min(3).max(50).required(),
  tempatlahir: Joi.string().min(3).max(50).required(),
  tanggallahir: Joi.date().required(),
  jeniskelamin: Joi.string().valid('L','P').required(),
  pendidikan: Joi.string().min(3).max(50).required(),
  fakultas: Joi.string().min(3).max(50).required(),
  angkatantahunajaran: Joi.string().min(3).max(50).required(),
  pekerjaan: Joi.string().min(3).max(50).required(),
  golongandarah: Joi.string().max(50).required(),
  hobi: Joi.string().min(3).max(50).required(),
  alamatlengkap: Joi.string().min(8).max(50).required(),
  aktifdivihara: Joi.string().min(3).max(50).required(),
  nohp: Joi.string().min(12).max(12).required(),
  email: Joi.string().min(3).max(50).required(),
});

exports.update = Joi.object().keys({
  namalengkap: Joi.string().min(3).max(50).required(),
  namabuddhis: Joi.string().min(3).max(50).required(),
  tempatlahir: Joi.string().min(3).max(50).required(),
  tanggallahir: Joi.date().required(),
  jeniskelamin: Joi.string().valid('L','P').required(),
  pendidikan: Joi.string().min(3).max(50).required(),
  fakultas: Joi.string().min(3).max(50).required(),
  angkatantahunajaran: Joi.string().min(3).max(50).required(),
  pekerjaan: Joi.string().min(3).max(50).required(),
  golongandarah: Joi.string().max(3).required(),
  hobi: Joi.string().min(3).max(50).required(),
  alamatlengkap: Joi.string().min(8).max(50).required(),
  aktifdivihara: Joi.string().min(3).max(50).required(),
  nohp: Joi.string().min(12).max(12).required(),
  email: Joi.string().min(3).max(50).required(),
});