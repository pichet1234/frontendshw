var mongoose = require('../connect');
var patient = mongoose.model('patient', require('../schema/patient'));

module.exports = {
    regispatient: (req, res) => {
        patient.insertMany([
            {
                cid: req.body.cid,
                prefix: req.body.prefix,
                fname: req.body.fname,
                lname: req.body.lname,
                phone: req.body.phone,
                address: {
                    bannumber: req.body.banumber,
                    moo: req.body.moo,
                    subdistrict: req.body.subdistrict.name_th, // ตำบล
                    district: req.body.district.name_th, //อำเภอ
                    province: req.body.province.name_th//จังหวัด
                },
                latitude: req.body.latitude,
                longitude: req.body.longitude
            }
        ]).then(result => {
            res.status(201).json({
                message: 'ลงทะเบียนสำเร็จ',
                data: result,
            });
        }).catch(err => {
            res.status(500).json({ message: 'Error insert meet', error: err });
        })
    },
    getpatient: (req, res)=>{
        patient.find({ }).then((result)=>{
            res.json(result)
        }).catch((err)=>{
            console.log(err)
        })
    }
}