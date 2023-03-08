let axios = require('axios');

async function getDevelopers(arr){
    let results = await Promise.all(
        arr.map(d=> axios.get(`https://api.github.com/users/${d}`))
    )
    let out =results.map(r => ({ name: r.data.name, bio: r.data.bio }));
    return out;
}

module.exports = { getDevelopers}