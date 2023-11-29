var pool = require('./bd');

async function getHierbas(){
    var query = "select * from hierbas order by id asc";
    var rows = await pool.query(query);
    return rows;
}

async function insertHierba(obj){
    try{
        var query = "INSERT INTO hierbas set ? ";
        var row = await pool.query(query,[obj]);
        return row;
    }
    catch(error){
        console.log(error);
        throw error;

    }
}

async function deleteHierbaById(id) {
    var query = "DELETE FROM hierbas where id = ?";
    var row = await pool.query(query,[id]);
    return row;
}

async function getHierbasById(id){
    var query = "SELECT * FROM hierbas where id = ?";
    var rows = await pool.query(query,[id]);
    return rows[0];
}

async function modificarHierbaById(obj, id) {
    try{
        var query = "UPDATE hierbas SET ? WHERE id=?";
        var row = await pool.query(query,[obj, id]);
        return row;
    } catch(error){
        console.log(error);
        throw error;
    }
}

module.exports = { getHierbas, insertHierba, deleteHierbaById, modificarHierbaById, getHierbasById }