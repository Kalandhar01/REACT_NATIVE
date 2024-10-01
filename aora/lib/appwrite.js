import { Account, Avatars, Client, Databases, ID, Query } from 'appwrite';

// Configuration for Appwrite API
export const config = {
  endPoint: 'https://cloud.appwrite.io/v1',
  projectId: '66fc0ce100029d8638ca',
  databaseId: '66fc0e05001d3a67a50a',
  userCollectionId: '66fc0e260021af1065a8',
  videoCollectionId: '66fc0e420001cdcf3aec',
  storageId: '66fc0fd80009e9f36f55'
};

const {
  endPoint,
projectId,
databaseId,
userCollectionId,
videoCollectionId,
storageId,
} = config

const client = new Client();
const account = new Account(client);
const avatars = new Avatars(client);
const database = new Databases(client);

// Set the endpoint and project ID for the client
client.setEndpoint(config.endPoint).setProject(config.projectId);

// Function to create a new user
export const createUser = async (email, password, username) => {

  try {
    const newAccount = await account.create(
      ID.unique(),
      email,
      password,
      username,



    )

    if (!newAccount) throw Error;


    const avatarUrl = avatars.getInitials(username);

    await signIn(email, password);

    const newUser = await database.createDocument(
      config.databaseId,
      config.userCollectionId,
      ID.unique(),
      {
        accountId: newAccount.$id,
        email,
        username,
        avatar: avatarUrl
      }
    )

    return newUser;

  }


  catch (error) {
    console.log(error);
    throw new Error(error);
  }
};



//sign inn
export const signIn = async function signIn(email, password) {
  try {

    const session = await account.createEmailPasswordSession(email, password);

    return session;

  }
  catch (error) {
    throw new Error(error);
  }

}



export const getCurrentUser = async () =>{

  try{
      const currentAccount = await account.get();

      if(!currentAccount) throw Error;

      const currentUser = await database.listDocuments(
        config.databaseId,
        config.userCollectionId,
        [Query.equal('accountId',currentAccount.$id)]

      )

      if(!currentuser) throw Error;
      
      return currentUser.documents[0];

      
  }
  catch(error){
    console.log(error);
  }

}



export const getAllPosts = async () =>{
  try{  
    const  posts = await database.listDocuments(
      databaseId,
      videoCollectionId,
    )

    return posts.documents;

  }
  catch(error){
    throw new Error(error);
  }
}





