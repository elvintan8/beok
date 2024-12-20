'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('anggota', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      namalengkap: {
        type: Sequelize.STRING(50)
      },
      namabuddhis: {
        type: Sequelize.STRING(50)
      },
      tempatlahir: {
        type: Sequelize.STRING(50)
      },
      tanggallahir: {
        type: Sequelize.DATE
      },
      jeniskelamin: {
        type: Sequelize.ENUM ('L','P'),
      },
      pendidikan: {
        type: Sequelize.STRING(50)
      },
      fakultas: {
        type: Sequelize.STRING(50)
      },
      angkatantahunajaran: {
        type: Sequelize.STRING(50)
      },
      pekerjaan: {
        type: Sequelize.STRING(50)
      },
      golongandarah: {
        type: Sequelize.STRING(50)
      },
      hobi: {
        type: Sequelize.STRING(50)
      },
      alamatlengkap: {
        type: Sequelize.STRING(50)
      },
      aktifdivihara: {
        type: Sequelize.STRING(50)
      },
      nohp: {
        type: Sequelize.STRING(12)
      },
      email: {
        type: Sequelize.STRING(50)
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('anggota');
  }
};