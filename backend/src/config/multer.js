const multer = require('multer');
const crypto = require('crypto');
const multerS3 = require('multer-s3');
const aws = require('aws-sdk')
const path = require('path')
const fs = require('fs')

if(process.env.STORAGE == 'local'){
    fs.mkdirSync(path.resolve(__dirname, '..', '..', 'temp', 'upload'), { recursive: true });
}

const storageTypes = {
    local: multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, path.resolve(__dirname, '..', '..', 'temp', 'upload'))
        },
        filename: (req, file, cb) => {
            crypto.randomBytes(16, (error, hash) => {
                if(error){
                    cb(error);
                }
    
                file.key = `${hash.toString("hex")}-${file.originalname}`
    
                cb(null, file.key)
            })
        }
    }),
    S3: multerS3({
        s3: new aws.S3(),
        bucket: process.env.AWS_BUCKET,
        contentType: multerS3.AUTO_CONTENT_TYPE,
        acl: 'public-read',
        key: (req, file, cb) => {
            crypto.randomBytes(16, (error, hash) => {
                if(error){
                    cb(error);
                }
    
                const fileName = `${hash.toString("hex")}-${file.originalname}`
    
                cb(null, fileName)
            })
        }
    }),
}

module.exports = {
    storage: storageTypes[process.env.STORAGE],
    limits: {
        fileSize: 2 * 1024 * 1024,
    },
    fileFilter: (req, file, cb) => {
        const allowedMimes = [
            'image/jpeg',
            'image/pjpeg',
            'image/png'
        ];

        if(allowedMimes.includes(file.mimetype)){
            cb(null, true)
        } else {
            cb(new Error('Formato invalido'));
        }

    }  
}