import mongoose from "mongoose";

async function connectMongoose() {
  const _pwd = "";
  const _database = "";
  const _user = "";
  const _cluster = "";

  const _uri = `mongodb+srv://${_user}:${_pwd}@${_cluster}/${_database}?retryWrites=true&w=majority`;
  try {
    await mongoose.connect(_uri);
    //show Collection of Database
    const collections = (
      await mongoose.connection.db.listCollections().toArray()
    ).map((mon) => mon.name);
    //console.log(`collection of ${_database} db`, collections)
    console.log(`collections of '${_database}' db`, collections);
    return true;
  } catch (error) {
    console.error("Could not connect to mongoose", error);
    return false;
  }
}

export { connectMongoose };
