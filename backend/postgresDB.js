const { Client } = require("pg");

async function createUser(name, email, pass) {
  const client = new Client({
    user: "postgres",
    password: "4840",
    host: "localhost",
    port: 4840,
    database: "postgres",
  });

  let res = "";

  try {
    await client.connect();

    res = await client.query(
      "insert into user_info (username, email, password) values ($1, $2, $3)",
      [name, email, pass]
    );
  } catch (err) {
    console.log(err);
  } finally {
    client.end();

    return res;
  }
}



async function findUser(email, pass) {
  const client = new Client({
    user: "postgres",
    password: "4840",
    host: "localhost",
    port: 4840,
    database: "postgres",
  });

  let result = false;

  try {
    await client.connect();

    const res = await client.query(
      "select password from user_info where email= $1",
      [email]
    );

    console.log(res);
    console.log(res.rows.length);
    console.log(res.rows[0].password);

    if (res.rows.length > 0) {
      if (pass === res.rows[0].password) {
        result = true;
      } else {
      }
    } else {
      console.log("err");
    }
  } catch (err) {
    console.log(err);
  } finally {
    client.end();

    return result;
  }
}

findUser('arav@g.c', 'arav123')

module.exports = {
  createUser,
  findUser,
};
