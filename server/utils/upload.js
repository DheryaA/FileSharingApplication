import multer from 'multer';


const uploaded=multer({
    dest:'uploads'
});

export {uploaded};